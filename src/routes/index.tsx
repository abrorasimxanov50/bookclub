import { lazy } from 'react';
import { createBrowserRouter, type RouteObject } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { ReaderLayout } from '../layouts/ReaderLayout';
import { AuthLayout } from '../layouts/AuthLayout';
import { AdminLayout } from '../layouts/AdminLayout';

const Home = lazy(() => import('../pages/Home'));
const Discover = lazy(() => import('../pages/Discover'));
const Categories = lazy(() => import('../pages/Categories'));
const Books = lazy(() => import('../pages/Books'));
const BookDetail = lazy(() => import('../pages/BookDetail'));
const Reader = lazy(() => import('../pages/Reader'));
const Library = lazy(() => import('../pages/Library'));
const ReadingProgress = lazy(() => import('../pages/ReadingProgress'));
const Favorites = lazy(() => import('../pages/Favorites'));
const Challenges = lazy(() => import('../pages/Challenges'));
const ChallengeDetail = lazy(() => import('../pages/ChallengeDetail'));
const Clubs = lazy(() => import('../pages/Clubs'));
const ClubDetail = lazy(() => import('../pages/ClubDetail'));
const Community = lazy(() => import('../pages/Community'));
const Leaderboard = lazy(() => import('../pages/Leaderboard'));
const Profile = lazy(() => import('../pages/Profile'));
const Settings = lazy(() => import('../pages/Settings'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const ForgotPassword = lazy(() => import('../pages/ForgotPassword'));
const AdminDashboard = lazy(() => import('../pages/admin/AdminDashboard'));
const AdminBooks = lazy(() => import('../pages/admin/AdminBooks'));
const AdminUsers = lazy(() => import('../pages/admin/AdminUsers'));
const AdminReviews = lazy(() => import('../pages/admin/AdminReviews'));
const AdminChallenges = lazy(() => import('../pages/admin/AdminChallenges'));
const AdminClubs = lazy(() => import('../pages/admin/AdminClubs'));
const NotFound = lazy(() => import('../pages/NotFound'));

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
