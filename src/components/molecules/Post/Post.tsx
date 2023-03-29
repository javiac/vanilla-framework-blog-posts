import classnames from "classnames";
import { IPost } from "../../../interfaces/IPost";

import styles from "./Post.module.css";

interface IPostProps {
  post: IPost;
}

export function Post(props: IPostProps) {
  const post = props.post;

  return (
    <div
      className={classnames(
        "p-card",
        "col-4",
        "p-card--highlighted",
        styles.card
      )}
    >
      <header className={classnames("p-card__header", styles.header)}>
        <h5
          className={classnames(
            "p-muted-heading",
            "u-no-margin--bottom",
            styles.header,
            !post.topic ? styles.transparent : ""
          )}
        >
          {post.topic ?? "Empty"}
        </h5>
      </header>
      <div className={styles.content}>
        <a href={post.link}>
          <img className="p-card__image" src={post.image} alt={post.title} />
        </a>
        <div className={styles.titleContainer}>
          <a href={post.link}>
            <h3 className={styles.title}>{post.title}</h3>
          </a>
        </div>
        <p className={styles.citation}>
          <em>
            By <a href={post.author.link}>{post.author.name}</a> on {post.date}
          </em>
        </p>
      </div>
      <p className={styles.footer}>{post.category}</p>
    </div>
  );
}
