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
