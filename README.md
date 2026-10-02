# Iian Kehn — personal site

Flat, responsive personal website hosted on GitHub Pages at https://www.iiankehn.com/.

## Pages

- `index.html`: profile, Acute Web, CORE, Slate R1, Slate R2, and social profiles.
- `videos.html`: official TikTok creator profile embed and YouTube link.
- `about.html`: introduction and project overview.

## Edit and preview

Plain HTML, CSS, and a small video script. No build step, package installation, external fonts, or framework.

Run `python3 -m http.server 8000` from the repository and open http://localhost:8000.

Shared styles are in `assets/site.css`. The supplied portrait is stored locally in `assets/iian-kehn.jpg`. Social profile links intentionally omit share tracking parameters. Update navigation and shared footer/social content across all three pages when making changes.

## Video integration

The Videos page uses TikTok’s official creator profile embed, which shows a selection of recent public videos without a manually maintained list. The visitor selects **Load TikTok videos** before the third-party script is loaded. Public account eligibility, content availability, browser blocking, and TikTok service availability affect the embedded feed; direct TikTok and YouTube links remain available. No TikTok API key or account credential is stored.

Documentation: https://developers.tiktok.com/docs/en/embed-creator-profiles

## Publishing

GitHub Pages serves the root of `main`; `CNAME` preserves `www.iiankehn.com`. Push changes to `main` and check the Pages deployment. Relative internal links support both the custom domain and repository-path hosting. Light/dark colors follow device preferences. Navigation works without JavaScript, and keyboard focus and reduced-motion preferences are supported.
