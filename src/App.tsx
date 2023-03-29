import moment from "moment";
import { useEffect, useState } from "react";
import "./App.css";
import { Post } from "./components/molecules/Post/Post";
import { IPost } from "./interfaces/IPost";
import { IPostResponse, IWpTerm } from "./interfaces/IPostResponse";

function mapPostResponse(posts: IPostResponse[]): IPost[] {
  return posts.map((post) => {
    const wpTermsMap: { [id: string]: IWpTerm } = {};
    for (const wpTermArray of post["_embedded"]["wp:term"]) {
      for (const wpTerm of wpTermArray) {
        wpTermsMap[wpTerm.id] = wpTerm;
      }
    }
    const author = post._embedded.author[0];

    return {
      topic: wpTermsMap[post.topic[0]]?.name,
      id: post.id,
      image: post.featured_media,
      link: post.link,
      title: post.title.rendered,
      author: {
        name: author.name,
        link: author.link,
      },
      date: moment(post.date).format("D MMMM YYYY"),
      category: wpTermsMap[post.categories[0]].name,
    };
  });
}

function App() {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    loadPosts();
  }, []);

  async function loadPosts() {
    const response = await fetch(
      "https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json"
    );
    const data = (await response.json()) as IPostResponse[];
    setPosts(mapPostResponse(data));
  }

  return (
    <div className="App">
      <div className="row">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default App;
