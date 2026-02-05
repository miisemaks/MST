export type TrackType = {
  id: number;
  title: string;
  author: string;
  imageUrl: string;
  duration: number; // в секундах
  isPremium: boolean;
  rating: number; // от 0 до 5
  genre?: string; // дополнительное поле
};
