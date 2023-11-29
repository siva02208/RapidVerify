import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sample-page',
  templateUrl: './sample-page.component.html',
  styleUrls: ['./sample-page.component.css']
})
export class SamplePageComponent {

  constructor(private router:Router){

  }
  formData = {
    firstName: '',
    lastName: '',
    age: null,
    address: '',
    phone: '',
    passportNumber: ''
  };

  submitForm() {
    console.log('Form submitted:', this.formData);
    this.router.navigate(['passport'])
  }
}
