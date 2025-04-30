interface Wishlist {
  name: string;
  image: string;
  price: number;
  likes: string;
  rating: number;
}

export const wishlist: Wishlist[] = [
  {
    name: "Product 1",
    image: "/assets/images/boy.jpg",
    price: 20,
    likes: "2,890",
    rating: 4.8,
  },
  {
    name: "Product 2",
    image: "/assets/images/people.jpg",
    price: 25,
    likes: "3,402",
    rating: 4.5,
  },
  {
    name: "Product 3",
    image: "/assets/images/people.jpg",
    price: 18,
    likes: "990",
    rating: 4.7,
  },
  {
    name: "Product 4",
    image: "/assets/images/boy.jpg",
    price: 30,
    likes: "2,390",
    rating: 4.9,
  },
];
