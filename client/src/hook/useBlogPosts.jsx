import { useState, useEffect } from "react";
import axios from "axios";

function useBlogPosts() {
    const [posts, setPosts] = useState([]);    
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);


    const fetchPosts = async () => {
        try {
            setIsError(false);
            setIsLoading(true);
            const results = await axios("http://localhost:4000/posts");
            setPosts(results.data.data); 
        } catch (error) {
            console.error("Error fetching posts:", error);
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
            fetchPosts();  

    }, []);  

    return { posts, isError, isLoading }; 
}

export default useBlogPosts;
