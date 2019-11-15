import { Module } from '@nestjs/common';
import { HelloModule } from './hello/hello.module';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';

@Module({
  imports: [HelloModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class AppModule {}
