import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

/**
 * bootstrap
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // global pipes
  app.useGlobalPipes(new ValidationPipe());
  
  const options = new DocumentBuilder()
    .setTitle('Test API example')
    .setDescription('The test API description')
    .setVersion('1.0')
    .addTag('test')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('apidoc', app, document);

  await app.listen(3000);

}

bootstrap();
