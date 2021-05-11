import { NewsService } from './../../services/news.service';
import { TotalNews } from './../../interfaces/newsModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-news',
  templateUrl: './view-news.component.html',
  styleUrls: ['./view-news.component.css']
})
export class ViewNewsComponent implements OnInit {


  totalnews: TotalNews[] = []
  constructor(private newsService: NewsService) { }

  viewNews(){
    this.newsService.viewNews().subscribe((res)=>{
      console.log(res)
      this.totalnews = res
    },(error) =>{
      console.log(error)
    }
    )
  }
  
  deleteNews(news:TotalNews){
    this.newsService.deleteNews(news._id).subscribe(()=>{
      
      let index = this.totalnews.indexOf(news) 
      console.log(index)
      this.totalnews.splice(index,1)
    })
  }
  
  ngOnInit(): void {
    this.viewNews()
  }
}

  
