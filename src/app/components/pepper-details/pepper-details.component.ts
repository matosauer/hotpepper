import { HotPepperService } from './../../services/hot-pepper.service';
import { HotPepper } from './../../models/hotpepper';
import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-pepper-details',
  templateUrl: './pepper-details.component.html',
  styleUrls: ['./pepper-details.component.css']
})
export class PepperDetailsComponent implements OnInit {

  hotpepper : any; //Observable<HotPepper>;
  id: string;

  constructor(private activatedroute: ActivatedRoute,
              private router:Router,
              private service:HotPepperService) { }

  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe(params => { 
        this.id = params.get('id'); 

        if(this.id != null){
          console.log("loading " + this.id);
          this.hotpepper = this.service.getPepper(this.id);
        }else{
          this.hotpepper =  of(new HotPepper());
        }
   });
  }
}