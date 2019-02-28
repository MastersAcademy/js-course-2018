import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngmodel',
  templateUrl: './ngmodel.component.html',
  styleUrls: ['./ngmodel.component.scss']
})
export class NgmodelComponent implements OnInit {

  stringValue: string;

  ngOnInit() {
    this.stringValue = 'hello';
  }

  resetToHello() {
    this.stringValue = 'hello';
  }
}
