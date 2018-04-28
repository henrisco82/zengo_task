import { Component } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { LoopBackConfig } from './shared/sdk/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(){
    LoopBackConfig.setBaseURL('//localhost:3000');
    LoopBackConfig.setApiVersion('api');
  }
  title = 'app';
}
