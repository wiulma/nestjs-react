import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { HelloModule } from './hello/hello.module';
import { UserModule } from './user/user.module';

@Module({
	imports: [
		TypeOrmModule.forRoot(),
		HelloModule,
		UserModule
	],
})
export class AppModule {}
