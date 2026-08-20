import React from 'react';
import { Link } from 'react-router-dom';
import { Book as BookIcon, ChevronRight, TrendingUp, Award, Users, Zap, Star, Sparkles, BookOpen } from 'lucide-react';
import { books } from '../data/books';
import { challenges } from '../data/challenges';
import { clubs } from '../data/clubs';

export const Home = () => {
  return (
    <div className="space-y-10 md:space-y-14">

        {/* Hero Section */}
        <section className="relative rounded-3xl overflow-hidden border border-amber-100 dark:border-stone-800 shadow-lg" style={{ background: 'linear-gradient(135deg, #fffbf2 0%, #fff8ed 50%, #fef3c7 100%)' }}>

          {/* Dark mode overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-900 to-stone-950 opacity-0 dark:opacity-100 transition-opacity" />

          {/* Warm glow */}
          <div className="absolute -top-20 right-20 w-96 h-96 bg-amber-300/25 dark:bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

          {/* Grid layout */}
          <div className="relative z-10 grid lg:grid-cols-2 min-h-[400px]">

            {/* ── Left: Text ── */}
            <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">

              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 text-xs font-bold uppercase tracking-widest border border-amber-200 dark:border-amber-700/50 mb-6 w-fit">
                <Sparkles size={12} className="text-amber-500" /> Welcome to BookClub
              </span>

              {/* Clean 2-line heading */}
              <h1 className="font-bold font-serif leading-tight text-stone-900 dark:text-white mb-5" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: 1.1 }}>
                Your Next Great Read<br />
                <span className="relative">
                  <span className="text-amber-600 dark:text-amber-400">Awaits</span>
                  <span className="absolute -bottom-0.5 left-0 right-0 h-[3px] bg-amber-400/40 dark:bg-amber-500/40 rounded-full" />
                </span>
              </h1>

              <p className="text-stone-500 dark:text-stone-400 mb-8 leading-relaxed" style={{ fontSize: '15px' }}>
                Discover books, track your reading progress, and connect with a passionate community of readers worldwide.
              </p>

              {/* Stats */}
              <div className="flex gap-8 mb-8">
                {[
                  { value: '10K+', label: 'Books' },
                  { value: '5K+',  label: 'Readers' },
                  { value: '200+', label: 'Clubs' },
                ].map(s => (
                  <div key={s.label}>
                    <div className="text-xl font-bold text-stone-900 dark:text-white">{s.value}</div>
                    <div className="text-xs text-stone-500 dark:text-stone-400 font-medium mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3">
                <Link to="/discover" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-2.5 rounded-xl font-semibold text-sm transition-all hover:shadow-lg hover:shadow-amber-500/20 hover:-translate-y-px">
                  Start Exploring <ChevronRight size={15} />
                </Link>
                <Link to="/books" className="inline-flex items-center gap-2 bg-white dark:bg-stone-800 hover:bg-stone-50 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-200 border border-stone-200 dark:border-stone-700 px-6 py-2.5 rounded-xl font-semibold text-sm transition-all hover:-translate-y-px shadow-sm">
                  <BookOpen size={14} /> Browse Books
                </Link>
              </div>
            </div>

            {/* ── Right: Book fan ── */}
            <div className="hidden lg:flex items-center justify-center py-10 pr-8 relative">

              {/* Fan container */}
              <div className="relative" style={{ width: '200px', height: '280px' }}>
                {books.slice(0, 3).map((book, i) => {
                  const styles = [
                    { transform: 'rotate(-10deg) translate(-60px, 10px)', zIndex: 1 },
                    { transform: 'rotate(0deg) translate(0px, 0px)',      zIndex: 3 },
                    { transform: 'rotate(10deg) translate(55px, 10px)',   zIndex: 2 },
                  ];
                  return (
                    <div
                      key={book.id}
                      className="absolute inset-0 w-full h-full rounded-2xl shadow-2xl overflow-hidden border-4 border-white dark:border-stone-800"
                      style={{ ...styles[i], backgroundColor: book.coverColor ?? '#d97706' }}
                    >
                      <img src={book.cover} alt={book.title} className="w-full h-full object-cover"
                        onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                    </div>
                  );
                })}
              </div>

              {/* Top Rated badge */}
              <div className="absolute top-6 right-4 bg-white dark:bg-stone-800 rounded-2xl shadow-lg px-3 py-2 flex items-center gap-2 border border-stone-100 dark:border-stone-700">
                <Star size={14} className="fill-amber-400 text-amber-400 shrink-0" />
                <div>
                  <div className="text-[11px] font-bold text-stone-900 dark:text-white">Top Rated</div>
                  <div className="text-[10px] text-stone-400">4.9 / 5.0</div>
                </div>
              </div>

              {/* Readers badge */}
              <div className="absolute bottom-6 right-4 bg-white dark:bg-stone-800 rounded-2xl shadow-lg px-3 py-2 border border-stone-100 dark:border-stone-700">
                <div className="flex -space-x-1.5 mb-1">
                  {['#F59E0B','#10B981','#6366F1'].map((c, i) => (
                    <div key={i} className="w-5 h-5 rounded-full border-2 border-white dark:border-stone-800" style={{ backgroundColor: c }} />
                  ))}
                </div>
                <div className="text-[10px] font-bold text-stone-900 dark:text-white">+2.4k reading</div>
              </div>
            </div>
          </div>
        </section>

        {/* Trending Books */}
        <section>
          <div className="flex justify-between items-end mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-serif flex items-center gap-3">
                <TrendingUp size={28} className="text-amber-600" /> Trending Now
              </h2>
              <p className="text-stone-500 dark:text-stone-400 mt-1">The most popular books this week</p>
            </div>
            <Link to="/discover" className="hidden sm:inline-flex items-center gap-1 text-amber-600 hover:text-amber-700 font-semibold transition-colors bg-amber-50 dark:bg-amber-900/20 px-4 py-2 rounded-lg">
              View all <ChevronRight size={16} />
            </Link>
          </div>
          
          <div className="flex gap-6 overflow-x-auto pb-6 snap-x hide-scrollbar">
            {books.slice(0, 8).map(book => (
              <Link
                key={book.id}
                to={`/books/${book.id}`}
                className="min-w-[160px] md:min-w-[180px] snap-start flex flex-col group"
              >
                <div
                  className="w-full aspect-[2/3] rounded-xl mb-4 shadow-md group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 relative overflow-hidden"
                  style={{ backgroundColor: book.coverColor }}
                >
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-3">
                    <span className="bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1">
                      <BookOpen size={14} /> Details
                    </span>
                  </div>
                </div>
                <h3 className="font-bold text-sm md:text-base line-clamp-2 group-hover:text-amber-600 transition-colors leading-snug">{book.title}</h3>
                <p className="text-stone-500 dark:text-stone-400 text-xs mt-1 truncate">{book.authorId}</p>
                <div className="flex items-center gap-1 mt-1.5">
                  <Star size={12} className="fill-amber-500 text-amber-500" />
                  <span className="text-xs font-semibold">{book.rating}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-12">

          {/* Recommended For You */}
          <div className="lg:col-span-2">
            <div className="flex justify-between items-end mb-6">
              <h2 className="text-2xl md:text-3xl font-bold font-serif flex items-center gap-3">
                <BookIcon size={28} className="text-amber-600" /> Recommended
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {books.slice(4, 10).map(book => (
                <Link
                  key={book.id}
                  to={`/books/${book.id}`}
                  className="flex flex-col group h-full"
                >
                  <div
                    className="w-full aspect-[2/3] rounded-xl mb-4 shadow-sm group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 relative overflow-hidden"
                    style={{ backgroundColor: book.coverColor }}
                  >
                    <img
                      src={book.cover}
                      alt={book.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                    />
                  </div>
                  <h3 className="font-bold text-sm line-clamp-2 group-hover:text-amber-600 transition-colors">{book.title}</h3>
                  <div className="mt-auto pt-2 flex items-center justify-between">
                    <p className="text-stone-500 dark:text-stone-400 text-xs truncate max-w-[100px]">{book.authorId}</p>
                    <div className="flex items-center gap-1 bg-stone-100 dark:bg-stone-800 px-1.5 py-0.5 rounded text-xs">
                      <Star size={10} className="fill-amber-500 text-amber-500" />
                      <span className="font-semibold">{book.rating}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            
            {/* Quick Stats */}
            <section className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
              <div className="absolute -right-6 -top-6 text-amber-500/20">
                <Zap size={100} />
              </div>
              <h2 className="text-lg font-bold font-serif mb-5 flex items-center gap-2 relative z-10">
                <Zap size={20} className="text-amber-400" /> Your Activity
              </h2>
              <div className="grid grid-cols-2 gap-4 relative z-10">
                {[
                  { label: 'Books Read', value: '24' },
                  { label: 'Day Streak', value: '7 🔥' },
                  { label: 'Reviews', value: '12' },
                  { label: 'Points', value: '1,240' },
                ].map(stat => (
                  <div key={stat.label} className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10 text-center hover:bg-white/20 transition-colors cursor-default">
                    <div className="text-xl md:text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-amber-200/80 mt-1 uppercase tracking-wider font-semibold">{stat.label}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Challenges */}
            <section className="bg-white dark:bg-stone-900 rounded-2xl p-6 border border-stone-200 dark:border-stone-800 shadow-sm">
              <div className="flex justify-between items-center mb-5">
                <h2 className="text-lg font-bold font-serif flex items-center gap-2">
                  <Award size={20} className="text-amber-600" /> Challenges
                </h2>
                <Link to="/challenges" className="text-xs text-amber-600 font-semibold hover:underline">View All</Link>
              </div>
              <div className="space-y-5">
                {challenges.slice(0, 3).map(challenge => (
                  <div key={challenge.id} className="group">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-semibold line-clamp-1 group-hover:text-amber-600 transition-colors">{challenge.title}</span>
                      <span className="text-stone-500 font-medium whitespace-nowrap ml-2">{challenge.current}/{challenge.target}</span>
                    </div>
                    <div className="w-full bg-stone-100 dark:bg-stone-800 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-amber-500 to-amber-600 h-full rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${Math.min((challenge.current / challenge.target) * 100, 100)}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Popular Clubs */}
            <section className="bg-white dark:bg-stone-900 rounded-2xl p-6 border border-stone-200 dark:border-stone-800 shadow-sm">
              <div className="flex justify-between items-center mb-5">
                <h2 className="text-lg font-bold font-serif flex items-center gap-2">
                  <Users size={20} className="text-amber-600" /> Popular Clubs
                </h2>
                <Link to="/clubs" className="text-xs text-amber-600 font-semibold hover:underline">Explore</Link>
              </div>
              <div className="space-y-4">
                {clubs.slice(0, 4).map(club => (
                  <Link key={club.id} to={`/clubs/${club.id}`} className="flex items-center gap-3 group p-2 -mx-2 rounded-xl hover:bg-stone-50 dark:hover:bg-stone-800/50 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-100 to-amber-200 dark:from-amber-900/40 dark:to-amber-800/40 border border-amber-200 dark:border-amber-800/50 flex items-center justify-center text-amber-700 dark:text-amber-400 text-sm font-bold flex-shrink-0 shadow-sm">
                      {club.name[0]}
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-sm leading-tight group-hover:text-amber-600 transition-colors line-clamp-1">{club.name}</h3>
                      <p className="text-xs text-stone-500 mt-0.5">{club.memberCount.toLocaleString()} members</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

          </div>
        </div>

    </div>
  );
};

export default Home;
