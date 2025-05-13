import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const getStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const decimal = rating - fullStars;

    const hasHalfStar = decimal >= 0.25 && decimal <= 0.75;
    const totalStars = hasHalfStar ? fullStars + 1 : fullStars;
    const emptyStars = 5 - totalStars;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} color="#000000" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" color="#000000" />);
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} color="#000000" />);
    }

    return stars;
  };

  return <div className="flex items-center gap-1">{getStars()}</div>;
};

export default StarRating;
