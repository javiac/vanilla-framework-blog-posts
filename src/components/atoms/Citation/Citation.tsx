interface ICitationProps {
  author: {
    link: string;
    name: string;
  };
  date: string;
}

export function Citation({ author, date }: ICitationProps) {
  return (
    <p className="u-no-margin u-align-text--left">
      <em>
        By <a href={author.link}>{author.name}</a> on {date}
      </em>
    </p>
  );
}
