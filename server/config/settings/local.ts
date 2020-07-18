import { Config } from 'constants/types';

const LocalConfig: Config = {
  allowedClientOrigins: ['http://localhost:8080'],
  databaseUrl: process.env.DATABASE_URL as string | '',
  databaseUrlSSL: Boolean(process.env.databaseUrlSSL) || false,
  port: 3000,
  tokenSecret: 'tokenSecret',
};

export default LocalConfig;
