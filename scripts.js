/**
 * Light and Dark modes
 */
const switchElement = document.querySelector('.switch')

switchElement.addEventListener('click', () => {
  document.body.classList.toggle('dark')
})


const button = document.getElementById('hamButton');
const icon = button.querySelector('i');

button.addEventListener('click', () => {
  if (icon.classList.contains('fa-bars')) {
    icon.classList.replace('fa-bars', 'fa-arrow-left');
  } else {
    icon.classList.replace('fa-arrow-left', 'fa-bars');
  }
});

/**
 * Fetching github repositories
 */ 
// Select the container where repos will be displayed
const repoContainer = document.getElementById('repo-container');

// Function to fetch and display repos
async function fetchRepos() {
  try {
    // Fetch repos from GitHub API
    const response = await axios.get('https://api.github.com/users/aparanji49/repos');

    // Filter out the 'aparanji49' repo, then sort by 'updated_at' and take the top 4
    const sortedRepos = response.data
    .filter(repo => repo.name !== 'aparanji49' && repo.name !== 'first-contributions')
      .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
      .slice(0, 4);

    // Clear any existing content in the container
    repoContainer.innerHTML = '';

    // Loop through the top 4 repos and create divs
    sortedRepos.forEach(repo => {
      const repoDiv = document.createElement('div');
      repoDiv.className = 'repo';
      repoDiv.innerHTML = `
        <div><img src="images/github-mark-white.png" height="30" width="30"/><h3>${repo.name}</h3>
        </div><hr/><div><img src="images/info-24.png" height="20" width="20"/><p><strong>Description:</strong> ${repo.description || 'No description available'}</p>
       </div><div> <img src="images/link-16.png" height="20" width="20"/><p><strong>Link: </strong><a href="https://www.github.com/${repo.full_name}" target="_blank">github.com/${repo.full_name}</a></p>
       </div><div> <img src="images/clock-pending-time-svgrepo-com.png" height="20" width="20"/><p><strong>Last Updated:</strong> ${new Date(repo.updated_at).toLocaleString()}</p>
     </div> `;
      repoContainer.appendChild(repoDiv);
    });
  } catch (error) {
    console.error('Error fetching repos:', error);
    repoContainer.innerHTML = `<p>Failed to load repositories. Please try again later.</p>`;
  }
}

// Call the function to fetch and display repos
fetchRepos();


async function fetchMediumPosts() {
  const mediumPostsContainer = document.getElementById('medium-posts');
  const url = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@nsaiaparanji';

  try {
    const response = await axios.get(url);
    const posts = response.data.items.filter(item => item.categories.length > 0).slice(0, 3);

    posts.forEach(post => {
      const card = document.createElement('div');
      card.classList.add('medium-blog-card');
      card.style.width = '400px';
      card.style.backgroundColor = '#fff';
      card.style.borderRadius = '20px';
      card.style.borderColor = 'black';
      card.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
      card.style.padding = '2rem';
      card.style.position = 'relative';

      const icon = `<a href="${post.link}" target="_blank" style="position:absolute; bottom: 1rem; right: 1rem;"><i class="fa-solid fa-up-right-from-square"></i></a>`;

      card.innerHTML = `
        <h4 style="color:#000000;">${post.title}</h4>
        <p style="color:#646464; font-size: 0.95rem;">${post.description.split('</p>')[0].replace(/<[^>]+>/g, '').slice(0, 150)}...</p>
        ${icon}
      `;
      mediumPostsContainer.appendChild(card);
    });
  } catch (error) {
    console.error('Failed to fetch Medium posts:', error);
    mediumPostsContainer.innerHTML = `<p>Unable to load blog posts right now.</p>`;
  }
}

fetchMediumPosts();
