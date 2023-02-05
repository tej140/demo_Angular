import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit{

  students: any;
  constructor(){
    this.students=[{Sid:1,Sname:'Sai Ganesh',dob:'02-27-1998',course:'Mech',fees:'10000'},
                  {Sid:2,Sname:'Mani Chander',dob:'06-27-1991',course:'Computers',fees:'15000'},
                  {Sid:3,Sname:'Swapnil',dob:'01-17-2001',course:'IT',fees:'20000'},
                  {Sid:4,Sname:'Abhishek',dob:'02-27-2000',course:'Electrical',fees:'12000'},
                  {Sid:5,Sname:'Ritesh',dob:'05-19-1998',course:'Civil',fees:'14000'}
                  ]
  }
  ngOnInit(): void {
    
  }
}
