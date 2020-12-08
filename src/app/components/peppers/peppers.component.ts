import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HotPepperService } from './../../services/hot-pepper.service';
import { HotPepper } from './../../models/hotpepper';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-peppers',
  templateUrl: './peppers.component.html',
  styleUrls: ['./peppers.component.css']
})
export class PeppersComponent implements OnInit {

  hotpeppers$: Observable<HotPepper[]>;

  constructor(
      private service: HotPepperService,
      private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.hotpeppers$ = this.service.getPeppers();
  }

}
