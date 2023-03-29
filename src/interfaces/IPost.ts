export interface IPost {
  id: number;
  topic: string;
  image: string;
  link: string;
  title: string;
  author: {
    name: string;
    link: string;
  };
  date: string;
  category: string;
}
