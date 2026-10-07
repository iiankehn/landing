# Iian Kehn

Personal website at https://www.iiankehn.com/. Plain HTML, CSS, and JavaScript. No package installation or build step.

## Pages

- Home: personal introduction and links to the other pages.
- Projects: Acute Web, unified Slate, CORE, and CORE Dev.
- Videos: presentation gallery with cards linking to individual local watch pages.
- About: biography, Amazon role, personal interests, and circular social icon buttons.

The visual system uses white and grey surfaces, muted blue accents, subtle depth, and small circular portraits. Navigation, typography, layouts, keyboard focus, and reduced motion support scale for phones and larger screens.

## Preview and publish

Run `python3 -m http.server 8000` from the repository. GitHub Pages publishes the root of `main`. Preserve `CNAME`.

## Add a TikTok video

The gallery reads `assets/videos.json`. Every entry has a real post URL, thumbnail, title, and matching page under `videos/`. Do not invent posts or use profile embeds as a gallery.

```sh
python3 scripts/add-video.py 'https://www.tiktok.com/@iiankehn/video/POST_ID' --title 'Video title' --thumbnail 'assets/video-cover.jpg'
```

Replace POST_ID with a verified numeric post ID. Use a verified title and thumbnail. The command creates the individual HTML page and updates the gallery. The watch page uses the official TikTok player and includes a direct link to the original post. TikTok availability and browser settings can affect playback; the original link remains accessible.

The gallery is currently empty because TikTok's public profile failed to return the video list during this redesign. Add verified post URLs to populate it. Public bio facts were verified on the creator's TikTok profile: Regulated Waste Coordinator (L3) at Amazon, tech creator, pet lover, proud husband.

## Appearance

The device theme is used by default and follows system changes while the site is open. Footer controls select System, Light, or Dark. Explicit selections are saved locally and shared across pages and tabs. Selecting System clears the override. Theme selection is applied before the stylesheet loads to avoid a light flash. With JavaScript disabled, CSS still follows the device preference. No preference data leaves the device.

## Project content — October 7, 2026

Acute Web lists the published 1.1 release and native ARM64/x86_64 support. Slate replaces the historical R1/R2 listings: Notes and Forge are unified in the October 2026 release, maintained in `iiankehn/slate-android`. CORE Dev links to the development journal at https://dev.iiankehn.com/. Project descriptions and the About page are based on the current project READMEs and published GitHub releases.
