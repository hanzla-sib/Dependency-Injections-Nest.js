
import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
    constructor(private PowerService: PowerService) {
        console.log('Disk service created');
    }
    getData(){
        this.PowerService.suppyPoweer(100);
        console.log('Getting data');
        return 'data';
    }
}
