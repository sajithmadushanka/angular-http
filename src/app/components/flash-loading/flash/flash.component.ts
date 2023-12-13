import { Component } from '@angular/core';
import {FlashService} from "../../../services/flash.service";

@Component({
  selector: 'app-flash',
  templateUrl: './flash.component.html',
  styleUrls: ['./flash.component.scss']
})
export class FlashComponent {
  constructor(public loadingService : FlashService) {
  }
}
