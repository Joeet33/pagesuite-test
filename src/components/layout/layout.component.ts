import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './layout.component.html'
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
