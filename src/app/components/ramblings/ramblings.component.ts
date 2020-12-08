import { HotPepperService } from './../../services/hot-pepper.service';
import { HotPepper } from './../../models/hotpepper';
import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ramblings',
  templateUrl: './ramblings.component.html',
  styleUrls: ['./ramblings.component.css']
})
export class RamblingsComponent implements OnInit {

  hotpepper: HotPepper;
  id:string;

  constructor(private activatedroute: ActivatedRoute,
              private router:Router,
              private service:HotPepperService) { }

  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe(params => { 
        console.log(params);
        this.id = params.get('id'); 

        if(this.id != null){
          this.hotpepper = this.service.getPepper(this.id);

          console.log(this.hotpepper);
        }
   });
  }

}
