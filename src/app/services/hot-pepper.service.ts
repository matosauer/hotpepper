import { HOTPEPPERS } from './mock-hotpeppers';
import { HotPepper } from './../models/hotpepper';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class HotPepperService {

  constructor(private db: AngularFirestore) { }

  getPeppers(): Observable<HotPepper[]>{
    return this.db.collection<HotPepper>('hotpeppers').snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as HotPepper;
          const id = a.payload.doc.id;
          return { id, ...data };
        }))
      );
  }

  getPepper(id: string) : Observable<HotPepper> {
    return this.db.collection<HotPepper>('hotpeppers').doc(id)
      .get()
      .pipe(
        map(doc => doc.data() as HotPepper)
      );
  }
}
