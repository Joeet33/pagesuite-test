import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowModalService } from 'src/services/show-modal/show-modal.service';
import { UserDataService } from 'src/services/user-data/user-data.service';

@Component({
  selector: 'app-info-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info-popup.component.html'
})
export class InfoPopupComponent implements OnInit {
  constructor(
    public modalPopup: ShowModalService,
    public userData: UserDataService
  ) {}

  ngOnInit(): void {}

  onClickHandler() {
    this.modalPopup.showModal = !this.modalPopup.showModal;
  }
}