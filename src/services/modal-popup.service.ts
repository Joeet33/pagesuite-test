import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalPopupService {

  modalPopup:boolean = false;

  constructor() { }
}
