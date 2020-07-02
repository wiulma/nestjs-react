import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { HelloModule } from './hello/hello.module';
import { UserModule } from './user/user.module';

@Module({
	imports: [
		TypeOrmModule.forRoot({
			"type": "mysql",
			"host": "mysqldb",
			"port": 3306,
			"username": process.env.MYSQL_APP_USER,
			"password": process.env.MYSQL_APP_PASSWORD,
			"database": process.env.MYSQL_APP_DATABASE,
			"entities": ["dist/**/*.entity{.ts,.js}"],
			"synchronize": true
		}),
		HelloModule,
		UserModule
	],
})
export class AppModule {}
