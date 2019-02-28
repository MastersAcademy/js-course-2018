import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms-control',
  templateUrl: './reactive-forms-control.component.html',
  styleUrls: ['./reactive-forms-control.component.scss']
})
export class ReactiveFormsControlComponent implements OnInit {

  someString: FormControl;

  constructor() { }

  ngOnInit() {
    this.someString = new FormControl('hello');
  }

  resetToHello() {
    this.someString.patchValue('hello');
  }
}
