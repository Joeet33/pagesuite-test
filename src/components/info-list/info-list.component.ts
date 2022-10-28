import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { InfoPopupComponent } from '../info-popup/info-popup.component';
import { ShowModalService } from 'src/services/show-modal/show-modal.service';
import { UserDataService } from 'src/services/user-data/user-data.service';
import { Children, Root, UserType } from 'src/interfaces/data-types';

@Component({
  selector: 'app-info-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule, InfoPopupComponent],
  templateUrl: './info-list.component.html',
  styleUrls: ['./info-list.component.css'],
})
export class InfoListComponent implements OnInit {
  user: Children[] = [];
  DEFAULT = 'default';
  NSFW = 'nsfw';

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
  }

  onClickHandler(users: UserType) {
    this.userData.dataObj = users;
    this.modalPopup.showModal = !this.modalPopup.showModal;
  }
}
