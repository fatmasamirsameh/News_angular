import { TotalNews } from './../../interfaces/newsModel';
import { NewsService } from './../../services/news.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  totalnews: TotalNews = {}
  constructor(private newsService:NewsService,private route:ActivatedRoute ,private router:Router) { }
  id:string = this.route.snapshot.params.id

  updateNews(news:TotalNews){
  this.newsService.updateNews(this.id,news).subscribe(()=>{console.log(news)
    this.router.navigate(['/news'])
  })
}

  getSingleNews(){
    this.newsService.getSingleNews(this.id).subscribe((res)=>{
      this.totalnews = res
    })
  }

  ngOnInit(): void {
  }

}
