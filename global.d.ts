namespace NodeJS {
  interface ProcessEnv {
    JWT_SECRET: string;
    DB_TYPE: 'postgres';
    DB_HOST: string;
    DB_PORT: number;
    DB_USERNAME: string;
    DB_PASSWORD: string;
    DB_DATABASE: string;
  }
}
