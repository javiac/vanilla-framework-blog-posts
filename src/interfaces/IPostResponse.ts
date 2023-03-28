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
  };
  topic: number[];
}
