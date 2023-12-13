import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent {

  list:Array<any> =[]
  constructor(private postService : PostService) {}
  ngOnInit() {
    this.postService.findAll()
      .subscribe(res => {
      this.list = res;
    })
  }
  delete(id : string){
  this.postService.delete(id)
      .subscribe(res => {
        for (let i = 0; i < this.list.length; i++) {
          if(this.list[i].id == id){
            this.list.splice(i,1);
          }
        }
    })
  }
}
