// 'use client'; 

// import React, { useEffect } from 'react';
// import axios from 'axios';
// import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

// const Blogs = () => {
//   // Fetch Medium blog posts
//   const fetchMediumPosts = async () => {
//     const mediumPostsContainer = document.getElementById('medium-posts');
//     const url = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@nsaiaparanji';

//     try {
//       const response = await axios.get(url);
//       const posts = response.data.items.filter(item => item.categories.length > 0).slice(0, 3);

//       mediumPostsContainer.innerHTML = ''; // Clear any previous posts

//       posts.forEach(post => {
//         const card = document.createElement('div');
//         card.classList.add('medium-blog-card');
//         card.style.width = '400px';
//         card.style.backgroundColor = '#fff';
//         card.style.borderRadius = '20px';
//         card.style.borderColor = 'black';
//         card.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
//         card.style.padding = '2rem';
//         card.style.position = 'relative';

//         const icon = `<a href="${post.link}" target="_blank" style="position:absolute; bottom: 1rem; right: 1rem;"><FontAwesomeIcon icon={faUpRightFromSquare}/></a>`;

//         card.innerHTML = `
//           <h4 style="color:#000000;">${post.title}</h4>
//           <p style="color:#646464; font-size: 0.95rem;">${post.description.split('</p>')[0].replace(/<[^>]+>/g, '').slice(0, 150)}...</p>
//           ${icon}
//         `;
//         mediumPostsContainer.appendChild(card);
//       });
//     } catch (error) {
//       console.error('Failed to fetch Medium posts:', error);
//       const mediumPostsContainer = document.getElementById('medium-posts');
//       mediumPostsContainer.innerHTML = `<p>Unable to load blog posts right now.</p>`;
//     }
//   };

//   // Fetch posts when the component mounts
//   useEffect(() => {
//     fetchMediumPosts();
//   }, []);

//   return (
//     <section id="tech-blogs" className="container-sm">
//       <h2 className="section-heading display-6">Medium Articles - Tech Blogs</h2>
//       <div id="medium-posts" className="sub-section"></div>
//       <div className="arrow">
//         <button className="mail-button" onClick={() => window.open('https://medium.com/@nsaiaparanji', '_blank')}>
//           View More
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Blogs;
'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const Blogs = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [numPosts,setNumPosts] = useState(0);
  const fetchMediumPosts = async () => {
    const url = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@nsaiaparanji';
    try {
      const response = await axios.get(url);
     setNumPosts(response.data.items.length);
      const filteredPosts = response.data.items
        .filter(item => item.categories.length > 0)
        .slice(0, 3);
      setPosts(filteredPosts);
    } catch (err) {
      console.error('Failed to fetch Medium posts:', err);
      setError('Unable to load blog posts right now.');
    }
  };

  useEffect(() => {
    fetchMediumPosts();
  }, []);

  return (
    <section id="tech-blogs" className="container-sm">
     {/* Designed & Developed by Sai Aparanji Nemmani – © 2025 */}

      <h2 className="section-heading display-6">Medium Articles - Tech Blogs</h2>
<p>Recent articles:</p>
      <div id="medium-posts" className="sub-section" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {error && <p>{error}</p>}
        
        {posts.map(post => (
          <div
            key={post.guid}
            className="medium-blog-card"
            style={{
              width: '400px',
              backgroundColor: '#fff',
              borderRadius: '20px',
              borderColor: 'black',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              padding: '2rem',
              position: 'relative',
            }}
          >
            <h4 style={{ color: '#000000' }}>{post.title}</h4>
            <p style={{ color: '#646464', fontSize: '0.95rem' }}>
              {post.description.split('</p>')[0].replace(/<[^>]+>/g, '').slice(0, 150)}...
            </p>
            <a href={post.link} target="_blank" rel="noopener noreferrer" style={{ position: 'absolute', bottom: '1rem', right: '1rem', color:'black' }}>
              <FontAwesomeIcon icon={faUpRightFromSquare} />
            </a>
          </div>
        ))}
      </div>

      <div className="arrow">
        <button
          className="mail-button"
          onClick={() => window.open('https://medium.com/@nsaiaparanji', '_blank')}
        >
            View All {numPosts} Articles
        </button>
      </div>
    </section>
  );
};

export default Blogs;
