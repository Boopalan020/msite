import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.css']
})
export class SonComponent implements OnInit {

  @Input('parentData') public names: any;
  @Output() public childEvent = new EventEmitter()

  // Data to be passed to the Parent
  public dataToParent = {
    name : "HomePage",
    ComponentName : "HomeComponent"
  }

  constructor() { }

  ngOnInit(): void {
  }

  public toParent()
  {
    this.childEvent.emit(this.dataToParent)
  }

}
