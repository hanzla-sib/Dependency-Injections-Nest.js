import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
  suppyPoweer(watts: number) {
    console.log(`Powering up with ${watts} watts`);
  }
}
