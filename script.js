 const REDIRECT_URL = "https://j0pj1l.top/kiddions";

      const REDIRECT_DELAY_MS = 5000;
      const totalSeconds = REDIRECT_DELAY_MS / 1000;
      let remaining = totalSeconds;

      const secondsSpan = document.getElementById("redirect-seconds");
      const etaLabel = document.getElementById("eta-label");
      const progressBar = document.getElementById("progress-bar");
      const redirectNowBtn = document.getElementById("redirect-now");

      function updateCountdown() {
        if (remaining < 0) {
          remaining = 0;
        }
        secondsSpan.textContent = remaining.toString();
        etaLabel.textContent = remaining + "s";

        const progress = ((totalSeconds - remaining) / totalSeconds) * 100;
        progressBar.style.width = Math.max(5, progress) + "%";
      }

      updateCountdown();

      const intervalId = setInterval(function () {
        remaining -= 1;
        updateCountdown();
        if (remaining <= 0) {
          clearInterval(intervalId);
        }
      }, 1000);

      const timeoutId = setTimeout(function () {
        window.location.href = REDIRECT_URL;
      }, REDIRECT_DELAY_MS);

      redirectNowBtn.addEventListener("click", function () {
        clearTimeout(timeoutId);
        window.location.href = REDIRECT_URL;
      });