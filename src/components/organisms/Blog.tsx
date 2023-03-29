import { useEffect, useState } from "react";
import { IPost } from "../../interfaces/IPost";
import { WpApiClient } from "../../services/WpApiClient";
import { Post } from "../molecules/Post/Post";

export function Blog() {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    loadPosts();
  }, []);

  async function loadPosts() {
    const wpApiClient = new WpApiClient();
    const posts = await wpApiClient.getPosts();
    setPosts(posts);
  }

  return (
    <div className="row">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
