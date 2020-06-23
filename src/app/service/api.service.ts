import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_KEY = '08d8686f0142488e8461de28538b40b2'

  constructor(private http:HttpClient) { }

  public getNews()
  {
    return this.http.get(`http://newsapi.org/v2/top-headlines?country=in&apiKey=${this.API_KEY}`)
  }

}
