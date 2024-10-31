import { useState, useEffect } from 'react';
import axios from 'axios';

const useBlogPosts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:4000/posts");
        // Assuming the response data is an object with a 'data' property containing the posts array
        setPosts(response.data.data || []); // Adjust this line based on the actual response structure
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { posts, isLoading, isError };
};

export default useBlogPosts;