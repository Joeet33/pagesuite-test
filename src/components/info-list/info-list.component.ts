import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info-list.component.html',
  styleUrls: ['./info-list.component.css']
})
export class InfoListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
