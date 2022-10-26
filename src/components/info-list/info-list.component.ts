import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http'

@Component({
  selector: 'app-info-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './info-list.component.html',
  styleUrls: ['./info-list.component.css']
})
export class InfoListComponent implements OnInit {

  user:any = []

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get("https://www.reddit.com/r/todayilearned/hot.json?limit=25").subscribe((res) => {
      console.log(res)
      this.user = res
    })
  }

}
