import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements  OnInit{

  list:Array<any> =[]
  constructor(private  postService:PostService) {}
ngOnInit() {
    this.postService.findAll()
    .subscribe(res=>{
    this.list = res;
    console.log(this.list)
  })
}

}
