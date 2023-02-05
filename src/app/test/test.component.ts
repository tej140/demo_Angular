import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  name: String;
  age: any;
  salary: any;
  hobbies: any;
  address: any;

  constructor() {
    //alert('Constructor() Executed...');
    
    this.name = 'Harsha';
    this.age = 35;
    this.salary = 4545.45;
    this.hobbies = ['Chatting', 'Music', 'Movies', 'Cricket'];
    this.address = {doorNo: 101, street:'MP', city:'Hyd'};
  }

  ngOnInit() {
  }

}
