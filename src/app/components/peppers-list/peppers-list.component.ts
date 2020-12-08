import { HotPepperService } from './../../services/hot-pepper.service';
import { HotPepper } from './../../models/hotpepper';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-peppers-list',
  templateUrl: './peppers-list.component.html',
  styleUrls: ['./peppers-list.component.css']
})
export class PeppersListComponent implements OnInit {

private hotpeppers$: Observable<HotPepper[]>;

  constructor(
    private service: HotPepperService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.hotpeppers$ = this.service.getPeppers();
  }

}
