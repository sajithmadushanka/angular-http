import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


import Post from "../components/DTO/Post";

import {AngularFirestore} from "@angular/fire/compat/firestore";
import {environment} from "../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient,
              private fireStoreService: AngularFirestore) { }
  findAll():Observable<any>{
    return this.http.get<any>(environment.apiUrl)
  }

  // createDataFireStore(post:Post){
  //   return new Promise<any>((resolve, reject)=>{
  //     this.fireStoreService.collection('post-data')
  //       .add(post.toObject())
  //       .then(res=>{
  //         console.log(res)
  //       },error => {
  //         console.log(error)
  //       })
  //   })
  //
  // }
  create(id:any, userId:any, title:any, body:any):Observable<any>{
    return this.http.post<any>(environment.apiUrl,
      {id,userId,title,body})
  }
  find(id:any):Observable<any>{
    return this.http.get<any>(environment.apiUrl +'?id=' + id)
  }
  update(id:any, userId:any, title:any, body:any):Observable<any>{
    return this.http.put<any>(environment.apiUrl  + id ,
      {
        id,userId,title,body
      })
  }
  delete(id : any):Observable<any>{
    return this.http.delete<any>(environment.apiUrl+ id)
  }
}
