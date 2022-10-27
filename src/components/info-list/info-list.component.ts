import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { InfoPopupComponent } from '../info-popup/info-popup.component';
import { ModalPopupService } from 'src/services/modal-popup.service';

@Component({
  selector: 'app-info-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule, InfoPopupComponent],
  templateUrl: './info-list.component.html',
  styleUrls: ['./info-list.component.css'],
})
export class InfoListComponent implements OnInit {
  user: any = [];
  userData: any = '';


  constructor(private http: HttpClient, public modalPopup: ModalPopupService) {}

  ngOnInit(): void {
    this.http
      .get('https://www.reddit.com/r/todayilearned/hot.json?limit=25')
      .subscribe((res: any) => {
        this.user = res.data.children;
      });
      console.log(this.modalPopup)
  }

  onClickHandler(users: any) {
    this.userData = users;
    this.modalPopup.modalPopup = !this.modalPopup.modalPopup
    console.log(this.modalPopup);
    
  }
}
