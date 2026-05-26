import dotenv from 'dotenv';

dotenv.config();

export const ENV = {
  BASE_URL: process.env.BASE_URL || '',

  API_BASE_URL: process.env.API_BASE_URL || '',

  STANDARD_USER: process.env.STANDARD_USER || '',

  PASSWORD: process.env.PASSWORD || ''
};