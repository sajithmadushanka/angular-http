import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PostService} from "../../services/post.service";
import {SnackBarService} from "../../services/snack-bar.service";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent {
  constructor(private  postService:PostService, private snackBarService: SnackBarService) {}

  id = '';
  loadData(): void {
    this.postService.find(this.id)
      .subscribe(res => {
      this.form.patchValue({
        id: res[0].id,
        userId: res[0].userId,
        title: res[0].title,
        body: res[0].body
      })
    })
  }

  form = new FormGroup({
    id:new FormControl(),
    userId:new FormControl('' , [Validators.required,Validators.maxLength(5)]),
    title:new FormControl(),
    body:new FormControl(),
  })
  update(){
    this.postService.update(
       this.form.get('id')?.value,
        this.form.get('userId')?.value,
        this.form.get('title')?.value,
       this.form.get('body')?.value
      )
      .subscribe(res=>{
        console.log(res)
        if(res){
         this.snackBarService.snacKBarService('updated', 'close');
        }
      })
  }
}
