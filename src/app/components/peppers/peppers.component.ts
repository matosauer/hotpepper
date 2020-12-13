import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HotPepperService } from './../../services/hot-pepper.service';
import { HotPepper } from './../../models/hotpepper';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-peppers',
  templateUrl: './peppers.component.html',
  styleUrls: ['./peppers.component.css']
})
export class PeppersComponent implements OnInit {

  hotpeppers$: Observable<HotPepper[]>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router:Router,
    private service:HotPepperService,
    public authService: AuthService) { }

  ngOnInit(): void {
    this.hotpeppers$ = this.service.getPeppers();
  }

  onAddNew(){
    this.router.navigate(['/edit/pepper/']);
  }

  onEdit(id:string){
    this.router.navigate(['/edit/pepper/', id]);
  }

  onDelete(id:string){
    if(confirm('Confirm deletion')) {
      this.service.deletePepper(id)
        .catch (
          err => {console.log(err);}
        );
    }
  }
}
