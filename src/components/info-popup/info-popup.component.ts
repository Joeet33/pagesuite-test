import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-info-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info-popup.component.html',
  styleUrls: ['./info-popup.component.css']
})
export class InfoPopupComponent implements OnInit {


  constructor() { }

  @Input() userId:any

  ngOnInit(): void {

  }

}
