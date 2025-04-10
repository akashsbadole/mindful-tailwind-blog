
import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  category: {
    name: string;
    slug: string;
    description?: string;
    postCount?: number;
    featuredImage?: string;
  };
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <Link to={`/category/${category.slug}`} className="group">
      <div className="relative overflow-hidden rounded-lg h-48">
        <img
          src={category.featuredImage || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe'}
          alt={category.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
          <h3 className="text-xl font-semibold text-white">{category.name}</h3>
          {category.postCount !== undefined && (
            <span className="text-white/80 text-sm">
              {category.postCount} {category.postCount === 1 ? 'post' : 'posts'}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
