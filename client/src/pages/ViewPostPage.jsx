import React from 'react';
import { useNavigate } from "react-router-dom";
import useBlogPosts from '../hook/useBlogPosts';  
import { useParams } from 'react-router-dom';

function ViewPostPage() {
  const navigate = useNavigate();
  const { id } = useParams();  
  const { posts, isError, isLoading } = useBlogPosts(id);  

  return (
    <div>
      <h1>View Post Page</h1>
      <div className="view-post-container">
        {isLoading && <h1>Loading ....</h1>}
        {isError && <h1>Request failed</h1>}
        {posts && !isLoading && !isError && (
          <>
            <h2>Post Title</h2>
            <p>Content</p>
          </>
        )}
      </div>

      <hr />
      <div className="show-all-posts-container">
        <h2>All Posts</h2>
        {posts.map((post) => (
          <div key={post.id} className="post">
            <h1>{post.title}</h1>
            <div className="post-actions">
              <button className="view-button">View post</button>
            </div>
          </div>
        ))}
        {isError && <h1>Request failed</h1>}
        {posts.length === 0 && !isLoading && <h1>No posts available</h1>}
      </div>

      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
}

export default ViewPostPage;

