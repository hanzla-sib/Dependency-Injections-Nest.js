import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Report } from './report.entity';
import { Repository } from 'typeorm';
import { CreateReportDto } from './dto/create-report-dtos';

@Injectable()
export class ReportsService {
  constructor(
    @InjectRepository(Report) private reportRepository: Repository<Report>,
  ) {}
  createReport(Body: CreateReportDto) {
    const report = this.reportRepository.create(Body);
    return this.reportRepository.save(report);
  }
}
