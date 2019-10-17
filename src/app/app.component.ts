import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-test';

  constructor(){
    console.log('working');
    var num = 1;
    console.log('number ->', num);
    console.log(num * 10);
  }
}
