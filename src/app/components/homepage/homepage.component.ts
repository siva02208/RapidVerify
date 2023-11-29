import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  formData = {
    email: ''
  };

  constructor(private router: Router,
    private emailverify: UserService) {}

  navigate(email:string)
  {
    console.log(this.formData);
    
      this.emailverify.verify(this.formData).subscribe(
        (Response)=>{
          console.log(this.formData)
          this.router.navigate(['userview',email])
        },
      (error)=>{
        this.router.navigate(['login'])
      }
      )


  }  
}
