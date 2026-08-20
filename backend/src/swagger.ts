import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Application } from 'express';
import { env } from './config/env';
import path from 'path';

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
  app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log(`📄 Swagger Docs available at http://localhost:${env.PORT}/api/docs`);
};

