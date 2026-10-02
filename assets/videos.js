// TikTok is contacted only after the visitor loads the feed.
const button = document.getElementById('load-videos');
button.addEventListener('click', () => {
  button.disabled = true;
  document.getElementById('embed-prompt').hidden = true;
  const feed = document.getElementById('tiktok-feed');
  const status = document.getElementById('embed-status');
  feed.hidden = false;
  status.hidden = false;
  status.textContent = 'Loading TikTok videos…';
  const script = document.createElement('script');
  script.src = 'https://www.tiktok.com/embed.js';
  script.async = true;
  const observer = new MutationObserver(() => {
    if (feed.querySelector('iframe')) {
      status.hidden = true;
      observer.disconnect();
    }
  });
  observer.observe(feed, {childList: true, subtree: true});
  const fallback = () => {
    if (!feed.querySelector('iframe')) {
      status.textContent = 'TikTok could not display the feed here. Use Open TikTok below to watch the videos.';
    }
  };
  script.addEventListener('error', fallback);
  document.body.appendChild(script);
  window.setTimeout(fallback, 12000);
});
