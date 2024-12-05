import { CurrentUser } from './../users/decorators/current-user.decorator';
import {
  Body,
  Controller,
  Post,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { CreateReportDto } from './dto/create-report-dtos';
import { AuthGuard } from 'src/guards/auth.guard';
import { User } from 'src/users/user.entity';
import { ReportsService } from './reports.service';
import { CreateReportInterceptor } from './Interceptors/create-report-interceptor';

@Controller('reports')
export class ReportsController {
  constructor(private reportSercice: ReportsService) {}
  @Post()
  @UseGuards(AuthGuard)
  @UseInterceptors(CreateReportInterceptor)
  CreateReport(@Body() body: CreateReportDto, @CurrentUser() user: User) {
    return this.reportSercice.createReport(body, user);
  }
}
