import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = {
    name: '',
    age: '',
    number: ''
  };
  title = 'fromsangular';
  getValues(simpleForm: any) {
    this.user.name = simpleForm.user;
    this.user.age = simpleForm.age;
    this.user.number = simpleForm.contact;
    // console.log(this.user.name);
    // alert(this.user.name);
  }
  // outputValues() {
  //   alert(this.user.name);
  // }
}
