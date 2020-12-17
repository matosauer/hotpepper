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
  isAdmin$: Observable<boolean>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router:Router,
    private service:HotPepperService,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.hotpeppers$ = this.service.getPeppers();
    this.isAdmin$ = this.authService.isAdmin()
  }

  onAddNew(){
    this.router.navigate(['/edit/peppers/']);
  }

  onEdit(id:string){
    this.router.navigate(['/edit/peppers/', id]);
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
