import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { InfoPopupComponent } from '../info-popup/info-popup.component';
import { ShowModalService } from 'src/services/showModal/show-modal.service';
import { UserDataService } from 'src/services/userData/user-data.service';
import { Children, Root, UserType } from 'src/interfaces/interface';

@Component({
  selector: 'app-info-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule, InfoPopupComponent],
  templateUrl: './info-list.component.html',
  styleUrls: ['./info-list.component.css'],
})
export class InfoListComponent implements OnInit {
  user: Children[] = [];

  constructor(
    private http: HttpClient,
    public modalPopup: ShowModalService,
    public userData: UserDataService
  ) {}

  ngOnInit(): void {
    this.http
      .get<Root>('https://www.reddit.com/r/todayilearned/hot.json?limit=25')
      .subscribe((res) => {
        this.user = res.data.children;
      });
    console.log(this.modalPopup);
  }

  onClickHandler(users: UserType) {
    this.userData.userData = users;
    this.modalPopup.modalPopup = !this.modalPopup.modalPopup;
    console.log(this.modalPopup);
  }
}
