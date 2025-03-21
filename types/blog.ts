export interface BlogPost {
  id: number;
  title: string;
  content: string;
  slug: string;
  category: string;
  categoryId: number;
  image: string;
  published: boolean;
  author: string;
  authorId: number;
}
