import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent {

  email:string = '';


  details={
  firstName: '',
  lastName: '',
  age: '',
  address:'' ,
  phone: '',
  passportNumber: '',
  email:''
  }


  constructor(private route: ActivatedRoute,
    private userdetails: UserService,
    private router:Router){
    
    }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.email = params['email']; 
    });
    this.userdetails.getuserbyemail(this.email).subscribe(
      (response: any)=>{
        console.log(response);
        this.details=response;
        console.log(this.details)
      }
    )
    }

    submitForm() {
      this.router.navigate(['passport'])
    }
}
