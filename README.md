# ARYX PLAY Website

A responsive, cinematic static landing page for ARYX PLAY, with an Android download button, repository links, contact email, and real SVG brand marks for LinkedIn, X, Facebook, and GitHub.

## Quick start

Open `index.html` in a browser. No build step or package manager is required.

## GitHub Pages deployment

1. Add these files to the root of `https://github.com/AryxK6/AryxPlay`.
2. Commit and push them to your default branch.
3. Open the repository's **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select your default branch and `/(root)`, then save.
6. Wait for GitHub Pages to publish the site. The Pages panel will show its URL.

If you prefer to keep the Android source root uncluttered, put the site in `/docs` and select `/docs` in Pages settings.

## Make the download button serve your APK

The website checks the GitHub Releases API for the latest published release and looks for an `.apk` asset.

1. Open the repository's **Releases** page.
2. Create a release (for example tag `v1.0`).
3. Upload your signed APK as a release asset, such as `ARYX_PLAY_v1.0.apk`.
4. Publish the release.

The main download button will then link directly to that APK and show its file size. Until an APK is attached to a release, the button safely opens the Releases page instead. Do not commit signing keys or passwords to the repository.

## Update your socials or email

Edit the profile links in `index.html`. The current links are:
- Email: `aryx.k6@gmail.com`
- LinkedIn: `https://www.linkedin.com/in/aryx-k`
- X: `https://x.com/Aryx_K6`
- Facebook: `https://www.facebook.com/AryK6`
- GitHub: `https://github.com/AryxK6/AryxPlay`

## Notes

- The page uses inline SVG icons, including recognizable social platform marks rather than text-only labels.
- Google Fonts are loaded remotely; the page falls back to system sans-serif fonts if unavailable.
- This is a static promotional/download site. It does not host or stream film content.
