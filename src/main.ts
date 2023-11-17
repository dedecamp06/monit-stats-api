import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as swaggerStats from 'swagger-stats';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    snapshot: true
  });
  
  const config = new DocumentBuilder()
  .setTitle('API Documentation example')
  .setDescription('The monit API description')
  .setVersion('1.0')
  .build();
const document = SwaggerModule.createDocument(app, config);

app.use(swaggerStats.getMiddleware({ swaggerSpec: document }));

SwaggerModule.setup('api-docs', app, document);
  await app.listen(3000);
}
bootstrap();
