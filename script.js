
(() => {
  const downloadUrl =
    "https://pub-12c03d0a2ede410da4216bfc7d6566cb.r2.dev/ARYX_PLAY_v1.0.apk";

  const downloadButton = document.getElementById("download-button");
  const subtitle = document.getElementById("download-subtitle");
  const status = document.getElementById("release-status");
  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  if (downloadButton) {
    downloadButton.href = downloadUrl;
    downloadButton.setAttribute("download", "ARYX_PLAY_v1.0.apk");
  }

  if (subtitle) {
    subtitle.textContent = "Android APK · Version 1.0";
  }

  if (status) {
    status.textContent = "Direct APK download · Cloudflare R2";
  }
})();
