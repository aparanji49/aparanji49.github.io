// src/app/blogs/page.jsx

import Blogs from "../components/Blogs";

export const metadata = {
  title: "Tech Blogs",
  description:
    "Technical writing and articles by Sai Aparanji Nemmani on software engineering, web development, and related topics.",
};

const BlogsPage = () => {
  return (
    <>
      {/* Designed & Developed by Sai Aparanji Nemmani – © 2025 */}

      <Blogs />
    </>
  );
};

export default BlogsPage;
