import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PostService} from "../../services/post.service";
import {SnackBarService} from "../../services/snack-bar.service";
import Post from "../DTO/Post";

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent {
  constructor(private postService: PostService, private snackBarService: SnackBarService) {
  }

  form = new FormGroup({
    id: new FormControl(),
    userId: new FormControl('', [Validators.required, Validators.maxLength(5)]),
    title: new FormControl(),
    body: new FormControl(),
  })

  createData() {

     this.postService.create(
          this.form.get('id')?.value,
          this.form.get('userId')?.value,
          this.form.get('title')?.value,
          this.form.get('body')?.value
      )
    .subscribe(res=>{
        console.log(res)
      if(res){
        this.snackBarService.snacKBarService('posted', 'close');
      }
      })
    }
  //   let post = new Post(
  //           this.form.get('id')?.value!,
  //           this.form.get('userId')?.value!,
  //           this.form.get('title')?.value!,
  //           this.form.get('body')?.value!);
  //
  //   this.postService.createDataFireStore(post);
  // }
}
