#!/usr/bin/env python3
"""transcribe.py — Audio file → plain text transcript via faster-whisper.

Pure single-job script: takes an audio file path, prints transcript text to stdout.
No URL handling, no download, no metadata — just speech-to-text.

Usage:
    python transcribe.py --input /path/to/audio.m4a
    python transcribe.py --input /path/to/audio.wav --lang en
    python transcribe.py --input /path/to/audio.mp3 --model base

Exit codes:
    0 — success (transcript printed to stdout)
    1 — missing dependency (faster-whisper)
    2 — input file not found or invalid
    3 — transcription failed
"""

import argparse
import os
import sys


def check_dependencies() -> None:
    """Verify faster-whisper is available. Exit with code 1 if not."""

    # faster-whisper bundles PyAV which handles audio decoding internally.
    try:
        import faster_whisper  # noqa: F401
    except ImportError:
        print("ERROR: faster-whisper not installed.", file=sys.stderr)
        sys.exit(1)


def transcribe(audio_path: str, lang: str | None, model_size: str) -> str:
    """Load Whisper model and transcribe the audio file. Returns plain text."""

    from faster_whisper import WhisperModel

    # Load model. device="cpu" + compute_type="int8" for broadest compatibility.
    # First run downloads the model (~40MB for tiny) from HuggingFace cache.
    model = WhisperModel(model_size, device="cpu", compute_type="int8")

    # Transcribe. segments is a generator yielding timestamped text chunks.
    segments, _ = model.transcribe(audio_path, language=lang)

    # Collect all segment texts, strip whitespace, join with newlines.
    lines: list[str] = []
    for segment in segments:
        lines.append(segment.text.strip())

    return "\n".join(lines)


def main() -> None:
    parser = argparse.ArgumentParser(description="Transcribe audio file to text.")

    # Required: path to audio file (common formats: m4a, mp3, mp4, wav, ogg, etc.)
    parser.add_argument("--input", "-i", required=True, help="Path to audio file")

    # Optional: force a specific language code (e.g. en, id). Auto-detect if omitted.
    parser.add_argument(
        "--lang", "-l", default=None, help="Language code (auto-detect if omitted)"
    )

    # Optional: Whisper model size. tiny is fast/low-memory, base/small are more accurate.
    parser.add_argument(
        "--model",
        "-m",
        default="base",
        help="Whisper model: tiny, base, small, medium, large (default: base)",
    )

    args = parser.parse_args()

    # Validate input file exists before doing anything heavy
    if not os.path.isfile(args.input):
        print(f"ERROR: File not found: {args.input}", file=sys.stderr)
        sys.exit(2)

    # Check tools are installed
    check_dependencies()

    # Transcribe and output
    try:
        text = transcribe(args.input, args.lang, args.model)
        print(text)
    except IndexError:
        print("ERROR: No audio stream found in the input file.", file=sys.stderr)
        print("  The downloaded format may be video-only.", file=sys.stderr)
        print("  Redownload using a format that includes an audio stream.", file=sys.stderr)
        sys.exit(4)
    except Exception as e:
        print(f"ERROR: Transcription failed: {e}", file=sys.stderr)
        sys.exit(3)


if __name__ == "__main__":
    main()
