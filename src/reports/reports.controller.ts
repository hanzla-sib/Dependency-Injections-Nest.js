import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { CreateReportDto } from './dto/create-report-dtos';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('reports')
export class ReportsController {
  @Post()
  @UseGuards(AuthGuard)
  CreateReport(@Body() body: CreateReportDto) {
    console.log(body);
  }
}
