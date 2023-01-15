import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bussiness-handle',
  templateUrl: './bussiness-handle.component.html',
  styleUrls: ['./bussiness-handle.component.css']
})
export class BussinessHandleComponent implements OnInit {
  @Output() closeBussiness = new EventEmitter<void>()
  constructor() { }

  ngOnInit(): void {
  }

  closeForm(){
    this.closeBussiness.emit()
  }

}
