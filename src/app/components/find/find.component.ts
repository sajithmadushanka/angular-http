import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.scss']
})
export class FindComponent {
  constructor(private  postService:PostService) {}
  list:Array<any> =[]
    id ='';
    loadData():void{

      this.postService.find(this.id)
      .subscribe(res=>{
        this.list = res;
        console.log(this.list)
      })
    }
}
