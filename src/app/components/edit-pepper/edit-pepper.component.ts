import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';

import { HotPepperService } from './../../services/hot-pepper.service';
import { HotPepper } from './../../models/hotpepper';

@Component({
  selector: 'app-edit-pepper',
  templateUrl: './edit-pepper.component.html',
  styleUrls: ['./edit-pepper.component.css']
})
export class EditPepperComponent implements OnInit {
  
  id:string;
  editForm: FormGroup;
  title: FormControl;
  description: FormControl;
  image: FormControl;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router:Router,
    private service:HotPepperService) { }

    ngOnInit(): void {
      this.id  = this.activatedRoute.snapshot.paramMap.get("id");

      this.title = new FormControl("", [Validators.required]);
      this.description = new FormControl("", [Validators.required]);
      this.image = new FormControl("", [Validators.required]);

      this.editForm = new FormGroup({
        'title': this.title,
        'description': this.description,
        'image': this.image
      });

      if (this.id != null){
        this.loadPepper();
      }
    }

    onSubmit() {

      let pepper = new HotPepper();
        pepper.id = this.id;
        pepper.title = this.editForm.get('title').value;
        pepper.description = this.editForm.get('description').value;
        pepper.image = this.editForm.get('image').value;

      if (pepper.id != null){

        this.service.updatePepper(pepper)
        .then( 
          o => (this.router.navigate(['/peppers/', this.id]))
        ),
        err => {console.log(err);}

      }else{

        this.service.addPepper(pepper)
        .then( 
          o => ( this.router.navigate(['/peppers/', o.id]))
        ),
        err => {console.log(err);}

      }
    }
  
    onCancel() {
      let path : string[] = ['/peppers'];
      if (this.id != null) path.push(this.id);

      this.router.navigate(path);
    }
 
    loadPepper(){
      this.service.getPepper(this.id)
          .subscribe(value => 
            {
              this.editForm.controls.title.setValue(value.title);
              this.editForm.controls.description.setValue(value.description);
              this.editForm.controls.image.setValue(value.image);
            });
    }
}