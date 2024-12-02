import { Module } from '@nestjs/common';
import { ReportsModule } from 'src/reports/reports.module';
import { UsersModule } from 'src/users/users.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';
import { Report } from 'src/reports/reports.entity';
import { CurrentUserInterceptor } from 'src/users/interceptors/current-user.interceptor';
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
  providers: [AppService, CurrentUserInterceptor],
})
export class AppModule {}
