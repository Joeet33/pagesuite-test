import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { InfoPopupComponent } from '../info-popup/info-popup.component';
import { ShowModalService } from 'src/services/show-modal/show-modal.service';
import { UserDataService } from 'src/services/user-data/user-data.service';
import { Children, Root, UserType } from 'src/interfaces/data-types';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-info-list',
  standalone: true,
  imports: [CommonModule, InfoPopupComponent],
  templateUrl: './info-list.component.html',
  animations: [
    trigger("fade", [
      
  transition("void => *", [
    style({opacity: 0}),
    animate(300)
  ]),

  transition("* => void", [
    animate(3000, style({opacity: 0}))
  ])
    ])
  ]
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
        this.user = res.data.children.filter(obj => !(obj.data.thumbnail === this.DEFAULT || obj.data.thumbnail === this.NSFW));
      });
  }

  onClickHandler(users: UserType) {
    this.userData.dataObj = users;
    this.modalPopup.showModal = !this.modalPopup.showModal;
  }
}
