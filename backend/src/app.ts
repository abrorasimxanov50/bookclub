import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import { env } from './config/env';

import authRoutes from './routes/auth.routes';
import userRoutes from './routes/user.routes';
import { errorHandler } from './middleware/error.middleware';
import categoryRoutes from './routes/category.routes';
import authorRoutes from './routes/author.routes';
import bookRoutes from './routes/book.routes';
import libraryRoutes from './routes/library.routes';
import progressRoutes from './routes/progress.routes';
import reviewRoutes from './routes/review.routes';
import challengeRoutes from './routes/challenge.routes';
import clubRoutes from './routes/club.routes';
import discussionRoutes from './routes/discussion.routes';
import adminRoutes from './routes/admin.routes';
import searchRoutes from './routes/search.routes';
import homeRoutes from './routes/home.routes';
import activityRoutes from './routes/activity.routes';
import leaderboardRoutes from './routes/leaderboard.routes';
import notificationRoutes from './routes/notification.routes';

const app = express();

// Middlewares
app.use(helmet());
app.use(cors({
  origin: env.CORS_ORIGIN,
  credentials: true,
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// Root route
app.get('/api', (req, res) => {
  res.json({
    success: true,
    message: 'Welcome to BookClub API',
  });
});

// Routes will be mounted here
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/authors', authorRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/library', libraryRoutes);
app.use('/api/progress', progressRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/challenges', challengeRoutes);
app.use('/api/clubs', clubRoutes);
app.use('/api/discussions', discussionRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/search', searchRoutes);
app.use('/api/home', homeRoutes);
app.use('/api/activity', activityRoutes);
app.use('/api/leaderboard', leaderboardRoutes);
app.use('/api/notifications', notificationRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'API Route Not Found',
  });
});

import { setupSwagger } from './swagger';

// Global Error Handler
app.use(errorHandler);

// Setup Swagger UI
setupSwagger(app);

export default app;
