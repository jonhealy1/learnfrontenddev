import React, { useEffect, useState } from "react";
import { getPosts } from "../services/postService";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts().then((result) => {
      console.log(result);
    });
  }, []);
  return <></>;
}
