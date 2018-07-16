import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  dataCtrl: any = {
    'mode': {
      'home': true,
      'menu': true,
      'details': false,
      'loading' : false,
      'reqError': false,
      'reqDone': false
    }
  };
}