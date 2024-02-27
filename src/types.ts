export type Blog = {
  id: string;
  body: string;
  title: string;
  category: category[];
  image: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};

export type category = {
  id: string;
  category: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};
