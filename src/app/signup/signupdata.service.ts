import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { User }       from '../users/User';

@Injectable()
export class DataService {
    private dataObs$ = new Subject();

    getData() {
        return this.dataObs$;
    }

    updateData(data: User) {
        console.log('updateData');
        this.dataObs$.next(data);
    }
}
