import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Award, Users, Star, BookOpen, Heart, TrendingUp, ArrowRight, CheckCircle2, MessageSquare } from 'lucide-react';
import { challenges } from '../data/challenges';
import { clubs } from '../data/clubs';
import { bookService } from '../services/bookService';
import type { Book } from '../types';
import { useLibrary } from '../context/LibraryContext';

export const Home = () => {
  const [featuredIdx, setFeaturedIdx] = useState(0);
  const [books, setBooks] = useState<Book[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('All Books');
  const { isFavorite, toggleFavorite } = useLibrary();

  useEffect(() => {
    bookService.getAll().then(setBooks).catch(console.error);
  }, []);

  useEffect(() => {
    if (books.length === 0) return;
    const timer = setInterval(() => {
      setFeaturedIdx((prev) => (prev + 1) % Math.min(books.length, 5));
    }, 4000);
    return () => clearInterval(timer);
  }, [books.length]);

  const featuredBook = books[featuredIdx] || books[0];

  return (
    <div className="space-y-10 md:space-y-12 pb-12 font-sans bg-stone-50 dark:bg-stone-950">
      
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative rounded-[2rem] overflow-hidden bg-[#FDF8F3] dark:bg-stone-900 shadow-xl mx-4 sm:mx-0 border border-stone-200/50 dark:border-stone-800/50 mt-4 pb-12">
        
        {/* Soft Background with Image */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2000&auto=format&fit=crop" 
            alt="Library background" 
            className="absolute inset-0 w-full h-full object-cover opacity-25 dark:opacity-10 blur-[3px] scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FDF8F3] via-[#FDF8F3]/90 to-[#FDF8F3]/40 dark:from-stone-900 dark:via-stone-900/90 dark:to-transparent"></div>
          
          {/* Subtle star/sparkle decorations */}
          <div className="absolute top-[20%] left-[45%] text-[#ea580c]/20 dark:text-amber-500/20"><Star size={24} fill="currentColor" /></div>
          <div className="absolute bottom-[30%] right-[10%] text-[#ea580c]/20 dark:text-amber-500/20"><Star size={16} fill="currentColor" /></div>
          <div className="absolute top-[15%] right-[20%] text-[#ea580c]/20 dark:text-amber-500/20"><Star size={32} fill="currentColor" /></div>
        </div>

        <div className="relative z-10 grid lg:grid-cols-2 gap-12 p-8 md:p-12 lg:p-16 lg:pb-8 min-h-[500px] items-center">
          
          {/* Left Content */}
          <div className="flex flex-col justify-center items-start space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FDEEDC] dark:bg-orange-500/20 text-[#DF7020] dark:text-orange-400 text-[11px] font-black tracking-widest uppercase shadow-sm">
              <Star size={14} fill="currentColor" /> WELCOME BACK, ALEX <span className="text-sm">👋</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-serif font-black leading-[1.1] text-stone-900 dark:text-white tracking-tight drop-shadow-sm">
              Your Next <span className="text-[#DF7020] dark:text-orange-500">Great</span><br/>
              <span className="text-[#DF7020] dark:text-orange-500">Read</span> Awaits
            </h1>
            
            <p className="text-stone-600 dark:text-stone-400 text-sm md:text-base max-w-sm leading-relaxed font-medium">
              Discover books, track your reading progress, and connect with a passionate community of readers worldwide.
            </p>

            {/* Micro Stats */}
            <div className="flex flex-wrap gap-3 pt-2">
               {[
                 { label: 'Books', val: '10K+', icon: <BookOpen size={16}/> },
                 { label: 'Readers', val: '5K+', icon: <Users size={16}/> },
                 { label: 'Clubs', val: '200+', icon: <Award size={16}/> },
               ].map(stat => (
                 <div key={stat.label} className="bg-white/80 dark:bg-stone-800/80 backdrop-blur-md rounded-xl px-4 py-2 flex items-center gap-3 shadow-sm border border-white/50 dark:border-stone-700/50">
                   <div className="text-[#ea580c] dark:text-orange-500">{stat.icon}</div>
                   <div>
                     <div className="font-bold text-sm text-stone-900 dark:text-white leading-tight">{stat.val}</div>
                     <div className="text-[10px] text-stone-500 font-medium">{stat.label}</div>
                   </div>
                 </div>
               ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/discover" className="group inline-flex items-center gap-2 bg-[#ea580c] hover:bg-[#c2410c] text-white px-6 py-3 rounded-xl font-bold transition-all hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30">
                Start Exploring <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/books" className="inline-flex items-center gap-2 bg-white dark:bg-stone-800 hover:bg-stone-50 dark:hover:bg-stone-700 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-white px-6 py-3 rounded-xl font-bold transition-all hover:scale-105 shadow-sm">
                <BookOpen size={18} /> Browse Books
              </Link>
            </div>
          </div>

          {/* Right Content - Modern Hero Composition */}
          <div className="hidden lg:flex items-center justify-center relative w-full h-full min-h-[450px]">
             
             {/* Floating Star Badge */}
             <div className="absolute top-4 right-4 bg-white dark:bg-stone-800 p-3 rounded-2xl shadow-lg border border-stone-100 dark:border-stone-700 flex items-center gap-3 z-20">
                <div className="text-[#ea580c] dark:text-orange-400">
                  <Star fill="currentColor" size={20} />
                </div>
                <div>
                  <div className="text-xs font-black text-stone-900 dark:text-white leading-tight">Top Rated</div>
                  <div className="text-[10px] text-stone-500 font-medium">4.9 / 5.0</div>
                </div>
             </div>

             {/* Floating Readers Badge */}
             <div className="absolute bottom-4 right-4 bg-white dark:bg-stone-800 p-2.5 pr-4 rounded-3xl shadow-lg border border-stone-100 dark:border-stone-700 flex items-center gap-3 z-20">
                <div className="flex -space-x-2">
                  <img src="https://i.pravatar.cc/150?u=12" className="w-8 h-8 rounded-full border-2 border-white dark:border-stone-800 object-cover" />
                  <img src="https://i.pravatar.cc/150?u=24" className="w-8 h-8 rounded-full border-2 border-white dark:border-stone-800 object-cover" />
                  <img src="https://i.pravatar.cc/150?u=35" className="w-8 h-8 rounded-full border-2 border-white dark:border-stone-800 object-cover" />
                </div>
                <div className="text-[10px] font-bold text-stone-800 dark:text-stone-200 leading-tight">
                  +12.5k reading <br/><span className="text-[9px] text-stone-500 font-normal">this week</span>
                </div>
             </div>

             {/* Main Featured Book Fan (Animated) */}
             <div className="relative z-10 w-[240px] h-[360px] flex items-center justify-center -ml-8 lg:-ml-12 mt-4">
               {books.slice(0, 5).map((book, i) => {
                 const total = Math.min(books.length, 5);
                 const diff = (i - featuredIdx + total) % total;
                 
                 let style = {};
                 if (diff === 0) {
                   style = { transform: 'rotate(0deg) translate(0px, 0px) scale(1)', zIndex: 30, opacity: 1 };
                 } else if (diff === 1) {
                   style = { transform: 'rotate(10deg) translate(80px, 15px) scale(0.9)', zIndex: 20, opacity: 0.95 };
                 } else if (diff === total - 1) {
                   style = { transform: 'rotate(-10deg) translate(-80px, 15px) scale(0.9)', zIndex: 10, opacity: 0.95 };
                 } else {
                   style = { transform: 'rotate(0deg) translate(0px, 30px) scale(0.8)', zIndex: 0, opacity: 0, pointerEvents: 'none' };
                 }

                 return (
                   <div 
                     key={book.id} 
                     className="absolute w-full h-full rounded-[1rem] shadow-2xl overflow-hidden border-[4px] border-white dark:border-stone-800 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] cursor-pointer bg-white"
                     style={style}
                     onClick={() => setFeaturedIdx(i)}
                   >
                      <img src={book.cover} alt={book.title} className="w-full h-full object-cover" />
                   </div>
                 );
               })}
             </div>
          </div>
        </div>

        {/* Pagination Dots at Bottom Center */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
          {Array.from({ length: Math.min(books.length, 5) }).map((_, idx) => (
            <button 
              key={idx} 
              onClick={() => setFeaturedIdx(idx)} 
              className={`h-1.5 rounded-full transition-all duration-500 ${featuredIdx === idx ? 'w-5 bg-[#ea580c]' : 'w-1.5 bg-[#ea580c]/30 hover:bg-[#ea580c]/60'}`} 
              aria-label={`Go to slide ${idx + 1}`} 
            />
          ))}
        </div>
      </section>

      {/* Categories Strip */}
      <div className="flex gap-3 overflow-x-auto pb-2 snap-x hide-scrollbar mx-4 sm:mx-0">
        <button
          onClick={() => setSelectedCategory('All Books')}
          className={`flex-shrink-0 px-5 py-2 rounded-full font-bold text-sm flex items-center gap-2 shadow-md transition-all ${selectedCategory === 'All Books' ? 'bg-amber-500 text-stone-950 shadow-amber-500/20' : 'bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-stone-700 dark:text-stone-300'}`}
        >
          <span>🔥</span> All Books
        </button>
        {['Fiction', 'Fantasy', 'Mystery', 'Self Development', 'History', 'Science', 'Biography', 'Classic', 'Psychology'].map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`flex-shrink-0 px-5 py-2 rounded-full font-semibold text-sm flex items-center gap-2 transition-all shadow-sm ${
              selectedCategory === cat
                ? 'bg-amber-500 text-stone-950 shadow-md shadow-amber-500/20 border border-amber-400'
                : 'bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-800'
            }`}
          >
            <span className="opacity-50">#</span> {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mx-4 sm:mx-0">
        
        {/* Main Content Area (Left 2 columns) */}
        <div className="xl:col-span-2 space-y-12">
          
          {/* Trending Books */}
          <section>
            <div className="flex justify-between items-end mb-6">
              <div>
                <h2 className="text-2xl font-serif font-bold flex items-center gap-2 text-stone-900 dark:text-white">
                  🔥 Trending Books
                </h2>
                <p className="text-stone-500 text-sm mt-1">Most popular books this week</p>
              </div>
              <Link to="/discover" className="text-sm font-semibold text-stone-900 dark:text-white hover:text-amber-600 transition-colors flex items-center gap-1">
                View All <ChevronRight size={16} />
              </Link>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
              {books
                .filter(book => selectedCategory === 'All Books' || (book.category?.name || '').toLowerCase().includes(selectedCategory.toLowerCase()))
                .slice(0, 8).map(book => (
                <div key={book.id} className="bg-white dark:bg-stone-900 rounded-2xl p-3 border border-stone-100 dark:border-stone-800 shadow-sm hover:shadow-xl transition-all group relative">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      toggleFavorite(book.id);
                    }}
                    title={isFavorite(book.id) ? "Remove from Favorites" : "Add to Favorites"}
                    className="absolute top-5 right-5 z-20 w-8 h-8 rounded-full bg-white/90 dark:bg-stone-800/90 backdrop-blur-md flex items-center justify-center transition-all shadow-sm hover:scale-110 cursor-pointer"
                  >
                    <Heart size={16} className={isFavorite(book.id) ? 'text-red-500 fill-red-500' : 'text-stone-400 hover:text-red-500'} />
                  </button>
                  <Link to={`/books/${book.id}`}>
                    <div className="w-full aspect-[2/3] rounded-xl overflow-hidden mb-4 relative" style={{ backgroundColor: book.coverColor }}>
                      <img src={book.cover} alt={book.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <h3 className="font-bold text-base text-stone-900 dark:text-white line-clamp-1 group-hover:text-amber-600 transition-colors">{book.title}</h3>
                    <div className="flex items-center gap-1 mt-1 mb-2">
                      <Star size={12} className="fill-amber-400 text-amber-400" />
                      <span className="text-xs font-bold">{book.rating} <span className="text-stone-400 font-normal">({(Math.random() * 50).toFixed(1)}k)</span></span>
                    </div>
                    <p className="text-stone-500 text-xs line-clamp-1 mb-3">{book.authorId}</p>
                    <div className="flex gap-2">
                      <span className="text-[10px] font-semibold bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 px-2 py-1 rounded-md">Sci-Fi</span>
                      <span className="text-[10px] font-semibold bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 px-2 py-1 rounded-md">Fantasy</span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* Bottom Grid: Discussions & Reviews */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="bg-white dark:bg-stone-900 rounded-2xl p-5 border border-stone-100 dark:border-stone-800 shadow-sm">
              <h3 className="font-serif font-bold text-lg mb-4 text-stone-900 dark:text-white">Active Discussions</h3>
              <div className="space-y-4">
                {[1,2].map(i => (
                  <div key={i} className="flex gap-3">
                    <div className="w-10 h-10 rounded-full bg-stone-200 shrink-0 overflow-hidden">
                       <img src={`https://i.pravatar.cc/150?u=${i+10}`} alt="avatar" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-bold text-stone-900 dark:text-white">Sarah Wilson</span>
                        <span className="text-xs text-stone-400">2h ago</span>
                      </div>
                      <p className="text-sm text-stone-800 dark:text-stone-200 font-medium leading-snug">What's your favorite book of 2025 so far?</p>
                      <div className="flex items-center gap-4 mt-2 text-xs text-stone-500 font-semibold">
                        <span className="flex items-center gap-1"><MessageSquare size={14}/> 248</span>
                        <span className="flex items-center gap-1"><Heart size={14}/> 1.2k</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-stone-900 rounded-2xl p-5 border border-stone-100 dark:border-stone-800 shadow-sm">
              <h3 className="font-serif font-bold text-lg mb-4 text-stone-900 dark:text-white">Leaderboard</h3>
              <div className="space-y-3">
                {[
                  { name: 'Alex Reader', books: 24, pos: 1 },
                  { name: 'Sarah Wilson', books: 21, pos: 2 },
                  { name: 'Mark Chen', books: 19, pos: 3 },
                ].map(user => (
                  <div key={user.pos} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-6 text-center font-bold text-stone-400">{user.pos}</div>
                      <div className="w-8 h-8 rounded-full overflow-hidden">
                        <img src={`https://i.pravatar.cc/150?u=${user.pos+20}`} alt={user.name} />
                      </div>
                      <div className="text-sm font-semibold text-stone-900 dark:text-white">{user.name}</div>
                    </div>
                    <div className="text-sm text-stone-500 font-medium">{user.books} books</div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Sidebar (Right column) */}
        <div className="space-y-6">
          
          {/* Continue Reading Widget */}
          <div className="bg-white dark:bg-stone-900 rounded-3xl p-6 border border-stone-100 dark:border-stone-800 shadow-sm relative overflow-hidden">
            <div className="flex justify-between items-center mb-5">
              <h3 className="font-bold text-stone-900 dark:text-white">Continue Reading</h3>
              <Link to="/reading" className="text-xs text-amber-600 hover:underline font-semibold">See All &gt;</Link>
            </div>
            {books[0] ? (
              <div className="flex gap-4">
                <Link to={`/reader/${books[0].id}`} className="w-20 h-28 rounded-lg overflow-hidden shadow-md shrink-0 block">
                  <img src={books[0].cover} alt={books[0].title} className="w-full h-full object-cover" />
                </Link>
                <div className="flex flex-col justify-center flex-1">
                  <Link to={`/reader/${books[0].id}`} className="font-bold text-stone-900 dark:text-white text-sm hover:text-amber-600 transition-colors line-clamp-1">
                    {books[0].title}
                  </Link>
                  <p className="text-xs text-stone-500 mb-3">{typeof books[0].author === 'object' ? books[0].author.name : books[0].author || 'Unknown Author'}</p>
                  <div className="flex justify-between text-[10px] font-bold mb-1.5">
                    <span className="text-stone-400">Page 142</span>
                    <span className="text-amber-600">68%</span>
                  </div>
                  <div className="w-full bg-stone-100 dark:bg-stone-800 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-amber-500 h-full rounded-full" style={{ width: '68%' }}></div>
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-xs text-stone-400">No books currently reading</p>
            )}
            <Link
              to={books[0] ? `/reader/${books[0].id}` : '/books'}
              className="w-full mt-5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white font-bold py-3 rounded-xl text-sm transition-all shadow-md shadow-amber-500/20 text-center block"
            >
              Continue Reading &rarr;
            </Link>
          </div>

          {/* Reading Goal */}
          <Link to="/reading" className="block bg-white dark:bg-stone-900 rounded-3xl p-6 border border-stone-100 dark:border-stone-800 shadow-sm hover:border-amber-300 dark:hover:border-amber-700 transition-all">
            <h3 className="font-bold text-stone-900 dark:text-white mb-5">Reading Goal 2026</h3>
            <div className="flex items-center gap-6 mb-6">
               <div className="relative w-20 h-20 shrink-0">
                 <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                   <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" className="text-stone-100 dark:text-stone-800" strokeWidth="3" />
                   <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#f59e0b" strokeWidth="3" strokeDasharray="68, 100" />
                 </svg>
                 <div className="absolute inset-0 flex items-center justify-center">
                   <span className="text-lg font-bold text-stone-900 dark:text-white">68%</span>
                 </div>
               </div>
               <div>
                 <div className="font-bold text-stone-900 dark:text-white text-lg">24 / 35 books</div>
                 <div className="text-xs text-stone-500 mb-1">Your yearly goal</div>
                 <div className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-600 bg-amber-50 dark:bg-amber-900/20 px-2 py-0.5 rounded">
                   🔥 18 day streak
                 </div>
               </div>
            </div>
            <div className="flex items-end justify-between h-12 mt-4 px-2">
              {[40,60,30,80,50,90,70,40].map((h, i) => (
                <div key={i} className="w-3 bg-amber-500/20 rounded-t-sm relative group cursor-pointer" style={{ height: '100%' }}>
                  <div className="absolute bottom-0 w-full bg-amber-500 rounded-t-sm transition-all" style={{ height: `${h}%` }}></div>
                </div>
              ))}
            </div>
            <div className="flex justify-between text-[10px] text-stone-400 font-semibold mt-2 px-1">
              <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span>
            </div>
          </Link>

          {/* Upcoming Challenges */}
          <div className="bg-white dark:bg-stone-900 rounded-3xl p-6 border border-stone-100 dark:border-stone-800 shadow-sm">
            <div className="flex justify-between items-center mb-5">
              <h3 className="font-bold text-stone-900 dark:text-white">Upcoming Challenges</h3>
              <Link to="/challenges" className="text-xs text-amber-600 hover:underline font-semibold">View All &gt;</Link>
            </div>
            <div className="space-y-4">
              {[
                { icon: '🏆', title: 'Read 5 Books This Month', members: '2,847', time: '4 days left', color: 'bg-amber-100 text-amber-600' },
                { icon: '📖', title: 'Classic Literature Challenge', members: '5,423', time: '12 days left', color: 'bg-blue-100 text-blue-600' },
                { icon: '🗺️', title: 'Fantasy World Journey', members: '3,156', time: '28 days left', color: 'bg-indigo-100 text-indigo-600' },
              ].map((c, i) => (
                <Link to="/challenges" key={i} className="flex items-center gap-3 group">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg shrink-0 ${c.color}`}>
                    {c.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-sm text-stone-900 dark:text-white line-clamp-1 group-hover:text-amber-600 transition-colors">{c.title}</h4>
                    <p className="text-xs text-stone-500">{c.members} members</p>
                  </div>
                  <div className="text-[10px] font-bold text-amber-600 whitespace-nowrap bg-amber-50 dark:bg-amber-900/20 px-2 py-1 rounded">
                    {c.time}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Popular Book Clubs */}
          <div className="bg-white dark:bg-stone-900 rounded-3xl p-6 border border-stone-100 dark:border-stone-800 shadow-sm">
            <div className="flex justify-between items-center mb-5">
              <h3 className="font-bold text-stone-900 dark:text-white">Popular Book Clubs</h3>
              <Link to="/clubs" className="text-xs text-amber-600 hover:underline font-semibold">View All &gt;</Link>
            </div>
            <div className="space-y-4">
              {[
                { img: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=100&q=80', title: 'Fantasy Lovers', members: '12.4k' },
                { img: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=100&q=80', title: 'Self Development Hub', members: '8.7k' },
                { img: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=100&q=80', title: 'Classic Readers', members: '6.2k' },
              ].map((club, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0">
                    <img src={club.img} alt={club.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-sm text-stone-900 dark:text-white line-clamp-1">{club.title}</h4>
                    <p className="text-xs text-stone-500">{club.members} members</p>
                  </div>
                  <Link to="/clubs" className="text-xs font-bold text-amber-600 bg-amber-50 hover:bg-amber-100 dark:bg-amber-900/20 dark:hover:bg-amber-900/40 px-3 py-1.5 rounded-full transition-colors">
                    Join
                  </Link>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Home;
