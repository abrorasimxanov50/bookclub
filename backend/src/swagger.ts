import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Application } from 'express';
import { env } from './config/env';
import path from 'path';

const publicGet = (summary: string, tags: string[]) => ({
  get: { summary, tags, responses: { 200: { description: 'Successful response' }, 500: { description: 'Server error' } } },
});

const protectedGet = (summary: string, tags: string[]) => ({
  get: { summary, tags, security: [{ bearerAuth: [] }], responses: { 200: { description: 'Successful response' }, 401: { description: 'Unauthorized' } } },
});

const protectedPost = (summary: string, tags: string[]) => ({
  post: { summary, tags, security: [{ bearerAuth: [] }], requestBody: { required: true, content: { 'application/json': { schema: { type: 'object', additionalProperties: true } } } }, responses: { 201: { description: 'Created' }, 401: { description: 'Unauthorized' } } },
});

const protectedPut = (summary: string, tags: string[]) => ({
  put: { summary, tags, security: [{ bearerAuth: [] }], requestBody: { required: true, content: { 'application/json': { schema: { type: 'object', additionalProperties: true } } } }, responses: { 200: { description: 'Successful response' }, 401: { description: 'Unauthorized' } } },
});

const protectedDelete = (summary: string, tags: string[]) => ({
  delete: { summary, tags, security: [{ bearerAuth: [] }], responses: { 200: { description: 'Successful response' }, 401: { description: 'Unauthorized' } } },
});

const genericPaths = {
  '/users/profile': protectedPut('Update current profile', ['Users']),
  '/users/{username}': publicGet('Get a user profile', ['Users']),
  '/users/{id}/follow': { post: protectedPost('Follow a user', ['Users']).post, delete: protectedDelete('Unfollow a user', ['Users']).delete },
  '/categories': { get: publicGet('List categories', ['Categories']).get, post: protectedPost('Create a category', ['Categories']).post },
  '/categories/{slug}': publicGet('Get category by slug', ['Categories']),
  '/categories/{id}': { put: protectedPut('Update a category', ['Categories']).put, delete: protectedDelete('Delete a category', ['Categories']).delete },
  '/authors': { get: publicGet('List authors', ['Authors']).get, post: protectedPost('Create an author', ['Authors']).post },
  '/authors/{slug}': publicGet('Get author by slug', ['Authors']),
  '/authors/{id}': { put: protectedPut('Update an author', ['Authors']).put, delete: protectedDelete('Delete an author', ['Authors']).delete },
  '/books': { get: publicGet('List books', ['Books']).get, post: protectedPost('Create a book', ['Books']).post },
  '/books/{id}': { get: publicGet('Get book details', ['Books']).get, put: protectedPut('Update a book', ['Books']).put, delete: protectedDelete('Delete a book', ['Books']).delete },
  '/library': { get: protectedGet('Get current library', ['Library']).get, post: protectedPost('Add book to library', ['Library']).post },
  '/library/{id}': protectedDelete('Remove book from library', ['Library']),
  '/progress/{bookId}': { get: protectedGet('Get reading progress', ['Progress']).get, put: protectedPut('Update reading progress', ['Progress']).put },
  '/reviews/book/{bookId}': publicGet('List book reviews', ['Reviews']),
  '/reviews': protectedPost('Add a book review', ['Reviews']),
  '/reviews/{id}': { put: protectedPut('Update a review', ['Reviews']).put, delete: protectedDelete('Delete a review', ['Reviews']).delete },
  '/challenges': { get: publicGet('List challenges', ['Challenges']).get, post: protectedPost('Create a challenge', ['Challenges']).post },
  '/challenges/{id}': { put: protectedPut('Update a challenge', ['Challenges']).put, delete: protectedDelete('Delete a challenge', ['Challenges']).delete },
  '/challenges/{id}/join': protectedPost('Join a challenge', ['Challenges']),
  '/clubs': { get: publicGet('List clubs', ['Clubs']).get, post: protectedPost('Create a club', ['Clubs']).post },
  '/clubs/{id}': { put: protectedPut('Update a club', ['Clubs']).put, delete: protectedDelete('Delete a club', ['Clubs']).delete },
  '/clubs/{id}/join': protectedPost('Join a club', ['Clubs']),
  '/discussions/club/{clubId}': publicGet('List club discussions', ['Discussions']),
  '/discussions': protectedPost('Create a discussion', ['Discussions']),
  '/discussions/{id}': { put: protectedPut('Update a discussion', ['Discussions']).put, delete: protectedDelete('Delete a discussion', ['Discussions']).delete },
  '/discussions/{discussionId}/comments': { get: publicGet('List discussion comments', ['Discussions']).get, post: protectedPost('Add a comment', ['Discussions']).post },
  '/admin/dashboard': protectedGet('Get admin dashboard statistics', ['Admin']),
  '/admin/users': protectedGet('List users', ['Admin']),
  '/admin/users/{id}': protectedDelete('Delete a user', ['Admin']),
  '/search': publicGet('Search books, authors, categories and users', ['Search']),
  '/home': publicGet('Get home page data', ['Home']),
  '/activity/feed': protectedGet('Get activity feed', ['Activity']),
  '/leaderboard/{period}': publicGet('Get leaderboard by period', ['Leaderboard']),
  '/notifications': protectedGet('Get notifications', ['Notifications']),
  '/notifications/read-all': protectedPut('Mark all notifications as read', ['Notifications']),
  '/notifications/{id}/read': protectedPut('Mark a notification as read', ['Notifications']),
};

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'BookClub API',
      version: '1.0.0',
      description: 'API documentation for the BookClub backend.',
    },
    servers: [
      {
        url: `http://localhost:${env.PORT}/api`,
        description: 'Development server',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
    paths: genericPaths,
  },
  apis: [
    path.join(__dirname, 'routes/*.ts'),
    path.join(__dirname, 'routes/*.js'),
    path.join(__dirname, 'controllers/*.ts'),
    path.join(__dirname, 'controllers/*.js'),
  ], // Robust path targeting both ts and js routes and controllers
};

const swaggerSpec = swaggerJsdoc(options);

export const setupSwagger = (app: Application) => {
  app.get('/api/docs.json', (req, res) => res.json(swaggerSpec));
  app.get('/api-docs.json', (req, res) => res.json(swaggerSpec));
  app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log(`📄 Swagger Docs available at http://localhost:${env.PORT}/api/docs`);
};

