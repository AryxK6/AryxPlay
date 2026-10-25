(() => {
  const repo = "AryxK6/AryxPlay";
  const releasesUrl = `https://github.com/${repo}/releases/latest`;
  const downloadButton = document.getElementById("download-button");
  const subtitle = document.getElementById("download-subtitle");
  const status = document.getElementById("release-status");
  const year = document.getElementById("year");

  if (year) year.textContent = new Date().getFullYear();

  // A release asset is used when available; otherwise send visitors to Releases.
  // Publish the APK as an asset on a GitHub Release to enable direct downloads.
  fetch(`https://pub-12c03d0a2ede410da4216bfc7d6566cb.r2.dev/ARYX_PLAY_v1.0.apk`, {
    headers: { "Accept": "application/vnd.github+json" }
  })
    .then((response) => {
      if (!response.ok) throw new Error("No published release found");
      return response.json();
    })
    .then((release) => {
      const apk = (release.assets || []).find((asset) =>
        asset.name.toLowerCase().endsWith(".apk")
      );
      if (apk && downloadButton) {
        downloadButton.href = apk.browser_download_url;
        downloadButton.setAttribute("download", apk.name);
        const sizeMb = (apk.size / (1024 * 1024)).toFixed(1);
        if (subtitle) subtitle.textContent = `${release.tag_name || "Latest"} · ${sizeMb} MB APK`;
        if (status) status.textContent = `Latest build: ${apk.name}`;
      } else {
        if (subtitle) subtitle.textContent = "Android APK · Open latest release";
        if (status) status.textContent = "No APK asset detected yet — open the release page";
        if (downloadButton) downloadButton.href = releasesUrl;
      }
    })
    .catch(() => {
      if (subtitle) subtitle.textContent = "Android APK · Latest release";
      if (status) status.textContent = "Official download link · Opens GitHub Releases";
      if (downloadButton) downloadButton.href = releasesUrl;
    });
})();
