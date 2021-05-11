import { ReporterService } from './../../services/reporter.service';
import { Component, OnInit } from '@angular/core';
import { Reporters } from 'src/app/interfaces/reporterModel';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  reporter: Reporters = {}
  constructor(private reporterService:ReporterService) { }
getProfile(){
this.reporterService.getProfile().subscribe((res)=>{
console.log(res)
this.reporter = res
})
}
  ngOnInit(): void {
  
this.getProfile()
}

}
