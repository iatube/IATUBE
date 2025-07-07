document.addEventListener('DOMContentLoaded', () => {
  const videosContainer = document.getElementById('videos');
  fetch('https://iatube-backend.example.com/videos') // Replace with actual API
    .then(res => res.json())
    .then(data => {
      data.forEach(video => {
        const div = document.createElement('div');
        div.className = 'bg-white p-2 shadow rounded';
        div.innerHTML = \`
          <h3 class="font-bold text-lg">\${video.title}</h3>
          <p class="text-sm">\${video.description}</p>
          <video controls class="w-full mt-2">
            <source src="\${video.videoUrl}" type="video/mp4">
          </video>
        \`;
        videosContainer.appendChild(div);
      });
    })
    .catch(err => console.error('Error fetching videos:', err));
});