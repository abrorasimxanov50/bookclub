import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Rocket, Heart, Ghost, Sword, 
  Map, Lightbulb, User, BookOpen, 
  Coffee, Target, Compass
} from 'lucide-react';

const categories = [
  { id: 'fiction', name: 'Fiction', icon: <BookOpen size={32} />, color: 'from-blue-500 to-indigo-600', count: 1240 },
  { id: 'sci-fi', name: 'Science Fiction', icon: <Rocket size={32} />, color: 'from-purple-500 to-fuchsia-600', count: 850 },
  { id: 'romance', name: 'Romance', icon: <Heart size={32} />, color: 'from-rose-400 to-red-500', count: 930 },
  { id: 'fantasy', name: 'Fantasy', icon: <Sword size={32} />, color: 'from-emerald-400 to-teal-600', count: 1100 },
  { id: 'mystery', name: 'Mystery & Thriller', icon: <Ghost size={32} />, color: 'from-slate-700 to-stone-900', count: 720 },
  { id: 'history', name: 'Historical', icon: <Map size={32} />, color: 'from-amber-600 to-orange-700', count: 540 },
  { id: 'biography', name: 'Biography', icon: <User size={32} />, color: 'from-sky-400 to-blue-600', count: 430 },
  { id: 'self-help', name: 'Self Help', icon: <Lightbulb size={32} />, color: 'from-yellow-400 to-amber-500', count: 680 },
  { id: 'business', name: 'Business', icon: <Target size={32} />, color: 'from-green-500 to-emerald-700', count: 390 },
  { id: 'poetry', name: 'Poetry', icon: <Coffee size={32} />, color: 'from-pink-400 to-rose-600', count: 210 },
];

export const Categories = () => {
  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 font-sans">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 text-sm font-semibold">
            <Compass size={16} /> Browse by Genre
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-serif">
            Explore Categories
          </h1>
          <p className="text-stone-500 dark:text-stone-400 text-lg">
            Find exactly what you're in the mood for. From epic fantasy worlds to inspiring biographies.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              to={`/discover?genre=${category.name}`}
              className="group relative overflow-hidden rounded-3xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-48 flex flex-col justify-end"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-90 group-hover:opacity-100 transition-opacity`}></div>
              
              {/* Decorative Pattern / Blur */}
              <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              
              {/* Icon */}
              <div className="absolute top-6 right-6 text-white/50 group-hover:text-white transition-colors duration-300 group-hover:scale-110 transform">
                {category.icon}
              </div>

              {/* Content */}
              <div className="relative z-10 text-white">
                <h3 className="text-2xl font-bold font-serif mb-1 group-hover:tracking-wide transition-all">
                  {category.name}
                </h3>
                <p className="text-white/70 text-sm font-medium">
                  {category.count.toLocaleString()} books
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Popular Tags */}
        <div className="mt-16 pt-10 border-t border-stone-200 dark:border-stone-800">
          <h3 className="text-lg font-bold mb-6 text-center text-stone-500">Popular Tags</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['#Bestsellers', '#AwardWinners', '#ClassicLiterature', '#ModernFiction', '#TrueCrime', '#Philosophy', '#Art', '#Cooking'].map(tag => (
              <Link 
                key={tag} 
                to="/discover"
                className="px-4 py-2 rounded-full bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-amber-400 hover:text-amber-600 transition-colors text-sm font-medium text-stone-600 dark:text-stone-400 shadow-sm"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
};

export default Categories;
