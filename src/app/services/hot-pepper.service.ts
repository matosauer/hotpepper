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
    return this.db.collection<HotPepper>('hotpeppers').snapshotChanges()
      .pipe(
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
          map( d => {
            return { id, ...d.data() }
          }
        )
      );
  }

  updatePepper(pepper: HotPepper){
    return this.db.collection<HotPepper>('hotpeppers').doc(pepper.id)
            .update({
              title: pepper.title,
              description: pepper.description,
              image: pepper.image
            });
  }

  addPepper(pepper: HotPepper){
    return this.db.collection('hotpeppers')
            .add({
              title: pepper.title,
              description: pepper.description,
              image: pepper.image
            });
  }

  deletePepper(id: string){
    return this.db.collection('hotpeppers').doc(id).delete();
  }
}
