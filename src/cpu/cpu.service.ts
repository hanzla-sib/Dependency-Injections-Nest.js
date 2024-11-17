import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
  constructor(private powerService: PowerService) {
   
  }
  compute(a: number, b: number) {
    console.log('Computing', a, b);
    this.powerService.suppyPoweer(100);
    return a + b;
  }
}
