import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotPepper } from 'src/app/models/hotpepper';
import { AuthService } from 'src/app/services/auth.service';
import { HotPepperService } from 'src/app/services/hot-pepper.service';

@Component({
  selector: 'app-show-pepper',
  templateUrl: './show-pepper.component.html',
  styleUrls: ['./show-pepper.component.css']
})
export class ShowPepperComponent implements OnInit {

  hotpepper: HotPepper;

  constructor(
        private activatedRoute: ActivatedRoute,
        private router:Router,
        private service:HotPepperService,
        private authService: AuthService
      ) { }

  ngOnInit(): void {
    let id: string = this.activatedRoute.snapshot.paramMap.get("id");
    if (id != null){
      this.showPepper(id);
    }
  }
  
  showPepper(id: string){
    this.service.getPepper(id)
        .subscribe(value => 
          {
            this.hotpepper = value;
          });
  }

  onEdit(){
    this.router.navigate(['/edit/pepper/', this.hotpepper.id]);
  }

  onCancel(){
    this.router.navigate(['/peppers/']);
  }
}
