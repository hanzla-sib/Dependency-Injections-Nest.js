import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateReportDto } from './dto/create-report-dtos';
import { Report } from './reports.entity';
import { User } from 'src/users/user.entity';

@Injectable()
export class ReportsService {
  constructor(
    @InjectRepository(Report) private reportRepository: Repository<Report>,
  ) {}
  createReport(Body: CreateReportDto, user: User) {
    const report = this.reportRepository.create(Body);
    report.user = user;
   
    return this.reportRepository.save(report);
  }
}
