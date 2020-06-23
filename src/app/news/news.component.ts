import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  articles

  constructor(private apiservice:ApiService) { }

  ngOnInit(): void {
    this.apiservice.getNews().subscribe((data)=>{
      console.log(data)
      this.articles = data['articles'];
    }

    
    
    )
  }

}
