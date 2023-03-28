import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { IPostResponse, IWpTerm } from "./interfaces/IPostResponse";
import { Card } from "@canonical/react-components";
import { IPost } from "./interfaces/IPost";

function mapPostResponse(posts: IPostResponse[]): IPost[] {
  return posts.map((post) => {
    const wpTermsMap: { [id: string]: IWpTerm } = {};
    for (const wpTermArray of post["_embedded"]["wp:term"]) {
      for (const wpTerm of wpTermArray) {
        wpTermsMap[wpTerm.id] = wpTerm;
      }
    }

    return {
      topic: wpTermsMap[post.topic[0]]?.name,
      id: post.id,
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
    console.log(data);
    setPosts(mapPostResponse(data));
  }

  return (
    <div className="App">
      <div className="row">
        {posts.map((post) => (
          <div className="col-4 p-card" key={post.id}>
            <header className="p-card__header">
              <h5 className="p-muted-heading u-no-margin--bottom">
                {post.topic}
              </h5>
            </header>
            <img
              className="p-card__image"
              src="https://assets.ubuntu.com/v1/0f33d832-The-State-of-Robotics.jpg"
            />
            <div className="p-card__inner">
              <h3>The State of Robotics - August 2021</h3>
              <p>
                From robots learning to encourage social participation to detect
                serious environmental problems, it was a learning month.
              </p>
            </div>
            <hr className="u-no-margin--bottom" />
            <div className="p-card__inner">
              by <a href="#">Bartek Szopka</a> on 21st August 2021
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
