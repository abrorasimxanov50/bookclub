import app from './app';
import { env } from './config/env';
import { connectDB, disconnectDB } from './config/db';

async function startServer() {
  await connectDB();

  const server = app.listen(env.PORT, () => {
    console.log(`🚀 Server running in ${env.NODE_ENV} mode on http://localhost:${env.PORT}`);
  });

  // Handle unhandled promise rejections
  process.on('unhandledRejection', (err: any) => {
    console.log('UNHANDLED REJECTION! 💥 Shutting down...');
    console.log(err.name, err.message);
    server.close(async () => {
      await disconnectDB();
      process.exit(1);
    });
  });

  // Handle SIGTERM (e.g., from Docker)
  process.on('SIGTERM', () => {
    console.log('👋 SIGTERM RECEIVED. Shutting down gracefully');
    server.close(async () => {
      console.log('💥 Process terminated!');
      await disconnectDB();
    });
  });
}

startServer();
