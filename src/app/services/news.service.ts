import { TotalNews } from './../interfaces/newsModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  baseUrl = 'http://localhost:3000/'

  constructor(private http:HttpClient){} 
  addNews(news:TotalNews){
    return this.http.post(this.baseUrl + 'news',news)
  }
  viewNews(){
    return this.http.get<TotalNews[]>(this.baseUrl + 'news')
  }
  deleteNews(id:any){
    return this.http.delete(this.baseUrl + 'news/' + id)
  }
  getSingleNews(id:string){
    return this.http.get<TotalNews>(this.baseUrl + 'news/'+ id)
  }

  updateNews(id:string,news:TotalNews){
    return this.http.patch(this.baseUrl + 'news/' + id ,news)
  }
}

