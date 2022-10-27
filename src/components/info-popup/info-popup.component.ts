import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalPopupService } from 'src/services/modal-popup.service';


@Component({
  selector: 'app-info-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info-popup.component.html',
  styleUrls: ['./info-popup.component.css']
})
export class InfoPopupComponent implements OnInit {


  constructor(public modalPopup: ModalPopupService) { }

  @Input() userData:any

  ngOnInit(): void {

  }

  onClickHandler() {
    this.modalPopup.modalPopup = !this.modalPopup.modalPopup
    console.log(this.modalPopup);
    
  }
}
