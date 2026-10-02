// Cards link to local watch pages; each watch page links to its original post.
(async () => {
 const grid = document.getElementById('video-grid');
 const empty = document.getElementById('video-empty');
 try {
  const response = await fetch('assets/videos.json');
  if (!response.ok) throw new Error('Video list unavailable');
  const videos = await response.json();
  empty.hidden = videos.length > 0;
  for (const video of videos) {
   const card = document.createElement('article'); card.className = 'video-card';
   const link = document.createElement('a'); link.href = `videos/${video.id}.html`; link.className = 'video-cover';
   const image = document.createElement('img'); image.src = video.thumbnail; image.alt = video.title; image.loading = 'lazy';
   const play = document.createElement('span'); play.className = 'cover-play'; play.textContent = '▶'; play.setAttribute('aria-hidden','true');
   link.append(image, play);
   const h2 = document.createElement('h2'); const title = document.createElement('a'); title.href = link.href; title.textContent = video.title; h2.append(title);
   const original = document.createElement('a'); original.className = 'original-link'; original.href = video.url; original.textContent = 'Original on TikTok ↗';
   card.append(link, h2, original); grid.append(card);
  }
 } catch {empty.hidden = false;}
})();
