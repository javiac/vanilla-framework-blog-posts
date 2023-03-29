export interface IWpTerm {
  id: number;
  link: string;
  name: string;
  slug: string;
  taxonomy: string;
}

export interface IPostResponse {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
  _embedded: {
    "wp:term": IWpTerm[][];
    author: {
      id: number;
      name: string;
      link: string;
    }[];
  };
  topic: number[];
  featured_media: string;
  link: string;
  date: string;
  categories: number[];
}
