import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor() { }

  isLoggedIn(){
    let token = localStorage.getItem('token') // value token 
    if(token){
      return false
    }
    return true
  }

  logout(){
    localStorage.removeItem('token')
  }

  ngOnInit(): void {
  }

}
