import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class DataService {
    private dataObs$ = new Subject();

    getData() {
        return this.dataObs$;
    }

    updateData(data: any) {
        console.log('updateData');
        this.dataObs$.next(data);
    }
}
