---
name: analyze-media
description: Analyze content from video and audio URLs. Use when user provides a media URL and asks "what is this about", "analyze", "what does this video say", or similar.
---

# Analyze Media

Extract and present the full context of any video/audio content.

## When to Use

Trigger when user:
- Pastes a video/audio URL and asks what it is about
- Asks to analyze media content
- Wants to know "what does this video/song/podcast say"

Supported platforms (via `yt-dlp`): YouTube, Instagram, TikTok, Twitter/X, Facebook, Vimeo, SoundCloud, Bandcamp, Mixcloud, and 1700+ others.

## Dependencies

All tools live inside a single cached virtual environment. Nothing needs to be installed globally.

## Workflow

### Step 0: Set up cached environment

Creates the full environment in an OS-appropriate cache directory:

- **Linux:** `~/.cache/analyze-media/`
- **macOS:** `~/Library/Caches/analyze-media/`
- **Windows:** `%localappdata%\analyze-media\`

```
<cache>/
├── venv/         # Python virtual environment
├── models/       # Whisper model files (auto-downloaded by faster-whisper)
└── temp/         # Temporary files (cleaned after each use)
```

```bash
python -m venv <cache>/venv
<cache>/<pip_exe> install yt-dlp faster-whisper
```

### Step 1: Extract metadata

```bash
<cache>/<python_exe> -m yt_dlp --dump-json --no-download <URL>
```

Key fields:
- `title` — content title
- `description` / `alt_title` — description / caption
- `channel` / `uploader` — creator
- `duration_string` — length
- `comment_count` / `like_count` — engagement
- `comments` — top comments (if available)
- `upload_date` — when posted

If this alone answers the user's question (e.g. "who made this?"), STOP here.

### Step 2: Get transcript

Two paths depending on the platform:

**Path A — Has embedded captions (e.g. YouTube, Vimeo):**

Parse the JSON from Step 1, look for `automatic_captions` or `subtitles` for the target language. Pick the `json3` format URL, fetch it, extract text from events → `segs` → `utf8`.

No extra dependencies needed.

**Path B — No captions (e.g. Instagram, TikTok, SoundCloud, Bandcamp):**

Download media:

```bash
<cache>/<python_exe> -m yt_dlp -f "bestaudio/best" -o <cache>/temp/<file> <URL>
```

Transcribe:

> **NOTE:** Adjust Whisper model with `--model` if needed. Override language with `--lang <code>` if auto-detection is wrong.

```bash
HF_HUB_CACHE=<cache>/models <cache>/<python_exe> scripts/transcribe.py --input <cache>/temp/<file>
```

Delete the file after transcription.

### Step 3: Analyze

Present the content to the user: what the media is about, key points, relevant metadata. Include comments as optional context if relevant.
