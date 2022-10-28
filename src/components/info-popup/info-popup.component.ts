import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowModalService } from 'src/services/showModal/show-modal.service';
import { UserDataService } from 'src/services/userData/user-data.service';


@Component({
  selector: 'app-info-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info-popup.component.html',
  styleUrls: ['./info-popup.component.css'],
})
export class InfoPopupComponent implements OnInit {
  constructor(
    public modalPopup: ShowModalService,
    public userData: UserDataService
  ) {}

  ngOnInit(): void {}

  onClickHandler() {
    this.modalPopup.modalPopup = !this.modalPopup.modalPopup;
    console.log(this.modalPopup);
  }
}
