import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {
  person: any;

  constructor() {
    
    this.person = {
      name: 'Harsha',
      age: 45,
      salary: 4545.45,
      hobbies:['Chatting', 'Music', 'Movies', 'Cricket'],
      address: {doorNo: 101, street:'MP', city:'Hyd'}
    };

  }
  ngOnInit() {}

  showMessage() {
    alert('Show Message is Executed...');
    console.log("This is a Console Message");
    console.log(this.person);
  }

}
