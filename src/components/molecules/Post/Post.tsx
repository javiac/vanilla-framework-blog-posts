import { Link } from "@canonical/react-components";
import classnames from "classnames";
import { IPost } from "../../../interfaces/IPost";
import { Citation } from "../../atoms/Citation/Citation";

import styles from "./Post.module.scss";

interface IPostProps {
  post: IPost;
}

export function Post(props: IPostProps) {
  const post = props.post;

  return (
    <div
      className={classnames(
        "p-card",
        "p-card--highlighted",
        "u-no-padding",
        styles.card
      )}
    >
      <header className={classnames("p-card__header", styles.header)}>
        <h5
          className={classnames(
            "p-muted-heading",
            "u-align-text--left",
            "u-no-padding",
            !post.topic ? styles.transparent : ""
          )}
        >
          {post.topic ?? "Empty"}
        </h5>
      </header>
      <div className={styles.content}>
        <Link href={post.link}>
          <img className="p-card__image" src={post.image} alt={post.title} />
        </Link>
        <div className={styles.titleContainer}>
          <Link href={post.link}>
            <h3 className={classnames(styles.title, "u-align-text--left")}>
              {post.title}
            </h3>
          </Link>
        </div>
        <Citation author={post.author} date={post.date} />
      </div>
      <p className={classnames(styles.footer, "u-align-text--left")}>
        {post.category}
      </p>
    </div>
  );
}
