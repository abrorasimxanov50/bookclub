import { lazy, ComponentType } from 'react';
import { createBrowserRouter, type RouteObject } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { ReaderLayout } from '../layouts/ReaderLayout';
import { AuthLayout } from '../layouts/AuthLayout';
import { AdminLayout } from '../layouts/AdminLayout';

const safeLazy = (importFn: () => Promise<{ default: ComponentType<any> }>) =>
  lazy(async () => {
    try {
      return await importFn();
    } catch (error) {
      window.location.reload();
      return { default: () => null };
    }
  });

const Home = safeLazy(() => import('../pages/Home'));
const Discover = safeLazy(() => import('../pages/Discover'));
const Categories = safeLazy(() => import('../pages/Categories'));
const Books = safeLazy(() => import('../pages/Books'));
const BookDetail = safeLazy(() => import('../pages/BookDetail'));
const Reader = safeLazy(() => import('../pages/Reader'));
const Library = safeLazy(() => import('../pages/Library'));
const ReadingProgress = safeLazy(() => import('../pages/ReadingProgress'));
const Favorites = safeLazy(() => import('../pages/Favorites'));
const Challenges = safeLazy(() => import('../pages/Challenges'));
const ChallengeDetail = safeLazy(() => import('../pages/ChallengeDetail'));
const Clubs = safeLazy(() => import('../pages/Clubs'));
const ClubDetail = safeLazy(() => import('../pages/ClubDetail'));
const Community = safeLazy(() => import('../pages/Community'));
const Leaderboard = safeLazy(() => import('../pages/Leaderboard'));
const Profile = safeLazy(() => import('../pages/Profile'));
const Settings = safeLazy(() => import('../pages/Settings'));
const Login = safeLazy(() => import('../pages/Login'));
const Register = safeLazy(() => import('../pages/Register'));
const ForgotPassword = safeLazy(() => import('../pages/ForgotPassword'));
const AdminDashboard = safeLazy(() => import('../pages/admin/AdminDashboard'));
const AdminBooks = safeLazy(() => import('../pages/admin/AdminBooks'));
const AdminUsers = safeLazy(() => import('../pages/admin/AdminUsers'));
const AdminReviews = safeLazy(() => import('../pages/admin/AdminReviews'));
const AdminChallenges = safeLazy(() => import('../pages/admin/AdminChallenges'));
const AdminClubs = safeLazy(() => import('../pages/admin/AdminClubs'));
const NotFound = safeLazy(() => import('../pages/NotFound'));

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'discover', element: <Discover /> },
      { path: 'books', element: <Books /> },
      { path: 'books/:id', element: <BookDetail /> },
      { path: 'categories', element: <Categories /> },
      { path: 'library', element: <Library /> },
      { path: 'reading', element: <ReadingProgress /> },
      { path: 'favorites', element: <Favorites /> },
      { path: 'challenges', element: <Challenges /> },
      { path: 'challenges/:id', element: <ChallengeDetail /> },
      { path: 'clubs', element: <Clubs /> },
      { path: 'clubs/:id', element: <ClubDetail /> },
      { path: 'community', element: <Community /> },
      { path: 'leaderboard', element: <Leaderboard /> },
      { path: 'profile', element: <Profile /> },
      { path: 'profile/:username', element: <Profile /> },
      { path: 'settings', element: <Settings /> },
    ],
  },
  {
    path: '/reader',
    element: <ReaderLayout />,
    children: [
      { path: ':bookId', element: <Reader /> },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: 'forgot-password', element: <ForgotPassword /> },
    ],
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      { index: true, element: <AdminDashboard /> },
      { path: 'books', element: <AdminBooks /> },
      { path: 'users', element: <AdminUsers /> },
      { path: 'reviews', element: <AdminReviews /> },
      { path: 'challenges', element: <AdminChallenges /> },
      { path: 'clubs', element: <AdminClubs /> },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
];
