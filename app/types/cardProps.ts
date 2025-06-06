export type ReviewCardProps = {
  image: string;
  title: string;
  description: string;
  rating: number;
  user: string;
};

export type ContentListCardProps = {
  id: string;
  user: string;
  name: string;
  items: {
    contentId: string;
    title: string;
    image: string;
  }[];
  createdAt: string;
};
