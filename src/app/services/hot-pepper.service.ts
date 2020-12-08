import { HOTPEPPERS } from './mock-hotpeppers';
import { HotPepper } from './../models/hotpepper';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotPepperService {

  constructor() { }

  getPeppers(): Observable<HotPepper[]>{
    return of(HOTPEPPERS);
  }

  getPepper(id: string){
    return HOTPEPPERS.find(p => p.id ==id);
  }
}
