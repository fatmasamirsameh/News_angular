import { TotalNews } from './../../interfaces/newsModel';
import { NewsService } from './../../services/news.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {

  news:TotalNews ={}
  token:any
    constructor(private newsService:NewsService, private router:Router) { }
    formSubmit(news:TotalNews){
      this.newsService.addNews(news).subscribe((res)=>{
        this.news = res
       
        this.router.navigate(['/news'])
      })
    }
  

  ngOnInit(): void {
  }

}
