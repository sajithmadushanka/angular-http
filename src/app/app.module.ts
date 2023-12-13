import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllComponent } from './components/all/all.component';
import { DeleteComponent } from './components/delete/delete.component';
import { FindComponent } from './components/find/find.component';
import { NewComponent } from './components/new/new.component';
import { UpdateComponent } from './components/update/update.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FlashComponent } from './components/flash-loading/flash/flash.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {HttpManagerInterceptor} from "./components/interceptors/http-manager.interceptor";
import {AngularFireModule} from "@angular/fire/compat";

import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {environment} from "../environments/environment.development";
@NgModule({
  declarations: [
    AppComponent,
    AllComponent,
    DeleteComponent,
    FindComponent,
    NewComponent,
    UpdateComponent,
    NotFoundPageComponent,
    FlashComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:HttpManagerInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
