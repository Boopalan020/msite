import { Component } from '@angular/core';

// Decorator to define class as a Component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Here comes Business logics

  title = 'Angular Preparation is going On';
  disConfig = true
  fromChild = {
    name : "",
    ComponentName : ""
  }

  public name = "Mproject to child"

  public changBlock()
  {
    this.disConfig = !this.disConfig
  }
}
