import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.enableCors();
  await app.listen(4000);
  console.log('🚀 API Gateway running on http://localhost:4000');
  console.log('📊 GraphQL Playground: http://localhost:4000/graphql');
}
bootstrap();