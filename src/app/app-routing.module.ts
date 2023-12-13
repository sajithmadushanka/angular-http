import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AllComponent} from "./components/all/all.component";
import {DeleteComponent} from "./components/delete/delete.component";
import {FindComponent} from "./components/find/find.component";
import {NewComponent} from "./components/new/new.component";
import {UpdateComponent} from "./components/update/update.component";
import {NotFoundPageComponent} from "./components/not-found-page/not-found-page.component";

const routes: Routes = [
  {path:'', redirectTo:'/all', pathMatch:'full'},
  {path:'all', component:AllComponent},
  {path:'delete', component:DeleteComponent},
  {path:'find', component:FindComponent},
  {path:'new', component:NewComponent},
  {path:'update', component:UpdateComponent},
  {path:'**', component:NotFoundPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
