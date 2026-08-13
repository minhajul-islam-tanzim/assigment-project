export interface Book {
     id: number;
  title: string;
  author: string;
  description: string;
  category: "Story" | "Tech" | "Science";
  available_quantity: number;
  image_url: string;
}