import { Module } from '@nestjs/common';
import { ReportsModule } from 'src/reports/reports.module';
import { UsersModule } from 'src/users/users.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';
import { Report } from 'src/reports/reports.entity';
import { CurrentUserInterceptor } from 'src/users/interceptors/current-user.interceptor';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AuthService } from 'src/users/auth.service';
@Module({
  imports: [
    ReportsModule,
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [User, Report],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    AuthService,
    {
      provide: APP_INTERCEPTOR,
      useClass: CurrentUserInterceptor,
    },
  ],
})
export class AppModule {}
