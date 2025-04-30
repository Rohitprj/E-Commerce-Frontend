interface Wishlist {
  name: string;
  image: string;
  price: number;
  rating: number;
}

export const wishlist: Wishlist[] = [
  {
    name: "Product 1",
    image: "/images/product1.png",
    price: 20,
    rating: 4.8,
  },
  {
    name: "Product 2",
    image: "/images/product2.png",
    price: 25,
    rating: 4.5,
  },
  {
    name: "Product 3",
    image: "/images/product3.png",
    price: 18,
    rating: 4.7,
  },
  {
    name: "Product 4",
    image: "/images/product4.png",
    price: 30,
    rating: 4.9,
  },
];
