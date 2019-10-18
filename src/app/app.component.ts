import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: []
})

export class AppComponent {
  title = 'Angular-test';

  constructor(){

    function getClosure(){
      var text = 'nameejang'
      
      return function(){
       return text;
      };
    }
      
      var closure = getClosure();
      console.log(closure());    
  }
}

