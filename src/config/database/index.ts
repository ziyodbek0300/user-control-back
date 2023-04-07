import {logger} from '@/utils/logger';
import {DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_DATABASE, NODE_ENV} from '@/config/env';

export const dbConnection = {
  url: NODE_ENV === 'development'
        ? `mongodb://${DB_HOST}:${DB_PORT}/${DB_DATABASE}`
        : `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}`,
  options: {
    authSource: 'admin',
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
  },
  error: (error: Error) => {
    if (error) {
      logger.error('DB: MongoDB Connection error:', error);
      process.exit(1);
    }
  },
};