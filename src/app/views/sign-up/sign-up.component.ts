import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  reporters:any
  token:any
  invalidEmail:boolean = false
  invalidAge:boolean = false
  constructor(private authService:AuthService, private router:Router) { }

  signUp(credentils:any){
    this.authService.signUp(credentils).subscribe((res)=>{
      console.log(res)
      this.reporters = res
      this.token = this.reporters.token
      localStorage.setItem('token',this.token)
      this.router.navigate(['/profile'])
    },(httpError)=>{
      console.log(httpError)
      if(httpError.error.name == 'MongoError'){
        this.invalidEmail = true
      }
      if(httpError.error.errors.age.name == 'ValidatorError'){
        this.invalidAge = true
      }
    })
  }

  ngOnInit(): void {
  }

}
