import { Col, Row } from "@canonical/react-components";
import { useEffect, useState } from "react";
import { IPost } from "../../../interfaces/IPost";
import { WpApiClient } from "../../../services/WpApiClient";
import { Post } from "../../molecules/Post/Post";

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
    <Row>
      {posts.map((post) => (
        <Col size={4} key={post.id}>
          <Post post={post} />
        </Col>
      ))}
    </Row>
  );
}
