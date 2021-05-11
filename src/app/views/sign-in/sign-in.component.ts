import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  reporters:any
  token:any
  invalidLogin : boolean = false
  constructor(private authService:AuthService,private router:Router) { }

  signIn(credentials:any){
    this.authService.login(credentials).subscribe((res)=>{
      // console.log(res)
      this.reporters = res
      this.token = this.reporters.token
      localStorage.setItem('token',this.token)
      this.router.navigate(['/profile'])
    },(httpError)=>{
      this.invalidLogin = true
    })
  }

  ngOnInit(): void {
  }

}
