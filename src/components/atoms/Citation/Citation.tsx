import styles from "./Citation.module.css";

interface ICitationProps {
  author: {
    link: string;
    name: string;
  };
  date: string;
}

export function Citation({ author, date }: ICitationProps) {
  return (
    <p className={styles.citation}>
      <em>
        By <a href={author.link}>{author.name}</a> on {date}
      </em>
    </p>
  );
}
