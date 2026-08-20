import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, BookOpen, Heart, Share2, ChevronLeft, MessageSquare, Globe, Calendar, Hash } from 'lucide-react';
import { bookService } from '../services/bookService';
import type { Book } from '../types';
import { reviews as allReviews } from '../data/reviews';
import { authors } from '../data/authors';
import { useLibrary } from '../context/LibraryContext';

import { useAuth } from '../context/AuthContext';

export const BookDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { isFavorite, toggleFavorite } = useLibrary();
  const { isAuthenticated } = useAuth();
  
  const [book, setBook] = useState<Book | null>(null);
  const [similarBooks, setSimilarBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    if (id) {
      bookService.getById(id)
        .then(data => {
          setBook(data || null);
          if (data && data.genre && data.genre.length > 0) {
            bookService.getByGenre(data.genre[0]).then(res => setSimilarBooks(res));
          } else {
            bookService.getAll().then(res => setSimilarBooks(res));
          }
          setLoading(false);
        })
        .catch(err => {
          console.error(err);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-stone-50 dark:bg-stone-950 text-stone-500">Loading...</div>;
  }

  if (!book) {
    return <div className="min-h-screen flex items-center justify-center bg-stone-50 dark:bg-stone-950 text-stone-500">Book not found</div>;
  }

  const isSaved = isFavorite(book.id);
  const author = book.author || null;
  const bookReviews = allReviews.filter(r => r.bookId === book.id);

  const handleStartReading = () => {
    if (isAuthenticated) {
      navigate(`/reader/${book.id}`);
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 font-sans">
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Back */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1 text-stone-500 hover:text-amber-600 transition-colors mb-6 text-sm font-medium"
        >
          <ChevronLeft size={18} /> Back
        </button>

        {/* Top Section */}
        <div className="flex flex-col sm:flex-row gap-8 mb-10">
          {/* Cover */}
          <div className="flex-shrink-0 mx-auto sm:mx-0">
            <div
              className="w-44 sm:w-52 aspect-[2/3] rounded-xl shadow-2xl relative overflow-hidden"
              style={{ backgroundColor: book.coverColor }}
            >
              <img
                src={book.cover}
                alt={book.title}
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
            </div>

            {/* Action Buttons */}
            <div className="mt-5 space-y-2 w-44 sm:w-52">
              <button
                onClick={handleStartReading}
                className="w-full py-2.5 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium flex items-center justify-center gap-2 transition-colors text-sm cursor-pointer"
              >
                <BookOpen size={16} /> Start Reading
              </button>
              <button
                onClick={() => toggleFavorite(book.id)}
                className={`w-full py-2.5 border rounded-lg font-medium flex items-center justify-center gap-2 transition-colors text-sm ${
                  isSaved
                    ? 'bg-red-50 border-red-200 text-red-600 dark:bg-red-900/20 dark:border-red-900/50'
                    : 'bg-white dark:bg-stone-900 border-stone-200 dark:border-stone-800 hover:bg-stone-50 dark:hover:bg-stone-800'
                }`}
              >
                <Heart size={16} className={isSaved ? 'fill-red-500 text-red-500' : ''} />
                {isSaved ? 'Saved' : 'Save to Library'}
              </button>
              <button className="w-full py-2.5 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors text-sm hover:bg-stone-50 dark:hover:bg-stone-800">
                <Share2 size={16} /> Share
              </button>
            </div>
          </div>

          {/* Details */}
          <div className="flex-1 min-w-0">
            {/* Genres */}
            <div className="flex flex-wrap gap-2 mb-3">
              {book.genre.map(g => (
                <span key={g} className="px-2.5 py-1 bg-amber-100 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 rounded-full text-xs font-medium">
                  {g}
                </span>
              ))}
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif mb-2 leading-tight">{book.title}</h1>
            <p className="text-base text-stone-500 dark:text-stone-400 mb-4">
              by <span className="text-amber-600 font-medium">{author?.name || book.authorId}</span>
            </p>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-5">
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} size={18} className={i <= Math.round(book.rating) ? 'fill-amber-500 text-amber-500' : 'text-stone-300'} />
                ))}
              </div>
              <span className="font-bold text-lg">{book.rating}</span>
              <span className="text-stone-500 text-sm">({book.reviewCount.toLocaleString()} ratings)</span>
            </div>

            <p className="text-stone-600 dark:text-stone-400 leading-relaxed mb-6 text-sm sm:text-base">{book.description}</p>

            {/* Info Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { icon: <Calendar size={14} />, label: 'Published', value: String(book.publishedYear) },
                { icon: <Hash size={14} />, label: 'Pages', value: String(book.pageCount) },
                { icon: <Globe size={14} />, label: 'Language', value: book.language },
                { icon: null, label: 'Publisher', value: book.publisher },
                { icon: null, label: 'ISBN', value: book.isbn },
                { icon: null, label: 'Status', value: book.status },
              ].map(item => (
                <div key={item.label} className="bg-white dark:bg-stone-900 rounded-lg p-3 border border-stone-100 dark:border-stone-800">
                  <p className="text-xs text-stone-400 mb-0.5 flex items-center gap-1">{item.icon}{item.label}</p>
                  <p className="font-medium text-sm truncate">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Rating breakdown + Similar */}
          <div className="space-y-8">
            <section className="bg-white dark:bg-stone-900 rounded-xl p-5 border border-stone-200 dark:border-stone-800">
              <h2 className="text-lg font-bold font-serif mb-4">Community Rating</h2>
              <div className="flex items-center gap-5">
                <div className="text-center">
                  <div className="text-4xl font-bold text-amber-600">{book.rating}</div>
                  <div className="flex text-amber-500 justify-center mt-1">
                    {[1,2,3,4,5].map(i => <Star key={i} size={13} className={i <= Math.round(book.rating) ? 'fill-amber-500' : 'text-stone-300'} />)}
                  </div>
                </div>
                <div className="flex-1 space-y-1.5">
                  {[5,4,3,2,1].map((star, idx) => {
                    const pct = [70, 20, 7, 2, 1][idx];
                    return (
                      <div key={star} className="flex items-center gap-2 text-xs">
                        <span className="w-3">{star}</span>
                        <div className="flex-1 h-1.5 bg-stone-200 dark:bg-stone-700 rounded-full overflow-hidden">
                          <div className="h-full bg-amber-500 rounded-full" style={{ width: `${pct}%` }} />
                        </div>
                        <span className="text-stone-400 w-7 text-right">{pct}%</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* Similar Books */}
            <section>
              <h2 className="text-lg font-bold font-serif mb-4">Similar Books</h2>
              <div className="space-y-3">
                {similarBooks.filter(b => b.id !== book.id).slice(0, 4).map(b => (
                  <Link key={b.id} to={`/books/${b.id}`} className="flex gap-3 group items-center">
                    <div className="w-10 h-14 rounded flex-shrink-0 overflow-hidden shadow">
                      <img src={b.cover} alt={b.title} className="w-full h-full object-cover"
                        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-sm font-medium line-clamp-1 group-hover:text-amber-600 transition-colors">{b.title}</h4>
                      <div className="flex items-center gap-1 mt-0.5">
                        <Star size={10} className="fill-amber-500 text-amber-500" />
                        <span className="text-xs text-stone-500">{b.rating}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </div>

          {/* Reviews */}
          <div className="lg:col-span-2">
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-lg font-bold font-serif">Reader Reviews</h2>
              <span className="text-sm text-stone-500">{bookReviews.length} reviews</span>
            </div>

            {bookReviews.length > 0 ? (
              <div className="space-y-4">
                {bookReviews.map(review => (
                  <div key={review.id} className="bg-white dark:bg-stone-900 p-5 rounded-xl border border-stone-200 dark:border-stone-800">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-9 h-9 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-700 text-sm font-bold">
                          {review.userId[0].toUpperCase()}
                        </div>
                        <div>
                          <div className="font-medium text-sm">{review.userId}</div>
                          <div className="text-xs text-stone-400">{new Date(review.date).toLocaleDateString()}</div>
                        </div>
                      </div>
                      <div className="flex">
                        {[1,2,3,4,5].map(i => (
                          <Star key={i} size={13} className={i <= review.rating ? 'fill-amber-500 text-amber-500' : 'text-stone-300'} />
                        ))}
                      </div>
                    </div>
                    <p className="text-stone-700 dark:text-stone-300 text-sm leading-relaxed mb-3">{review.content}</p>
                    <button className="flex items-center gap-1.5 text-xs text-stone-400 hover:text-amber-600 transition-colors">
                      <Heart size={13} /> {review.likes} helpful
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-stone-400">
                <MessageSquare size={40} className="mx-auto mb-3 opacity-40" />
                <p>No reviews yet. Be the first!</p>
              </div>
            )}

            {/* Write Review */}
            <div className="mt-5 bg-white dark:bg-stone-900 rounded-xl p-5 border border-stone-200 dark:border-stone-800">
              <h3 className="font-semibold mb-3 text-sm">Write a Review</h3>
              <div className="flex gap-1 mb-3">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} size={22} className="text-stone-300 hover:text-amber-500 hover:fill-amber-500 cursor-pointer transition-colors" />
                ))}
              </div>
              <textarea
                rows={3}
                placeholder="Share your thoughts about this book..."
                className="w-full text-sm px-3 py-2 border border-stone-200 dark:border-stone-700 rounded-lg bg-stone-50 dark:bg-stone-800 resize-none focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button className="mt-2 px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white text-sm rounded-lg font-medium transition-colors">
                Post Review
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookDetail;
