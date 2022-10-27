import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { InfoPopupComponent } from '../info-popup/info-popup.component';

@Component({
  selector: 'app-info-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule, InfoPopupComponent],
  templateUrl: './info-list.component.html',
  styleUrls: ['./info-list.component.css'],
})
export class InfoListComponent implements OnInit {
  user: any = [];
  userId: any = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get('https://www.reddit.com/r/todayilearned/hot.json?limit=25')
      .subscribe((res: any) => {
        this.user = res.data.children;
        console.log(this.user);
      });
  }

  onClickHandler(users: any) {
    console.log(users);

    this.userId = users;
  }
}
