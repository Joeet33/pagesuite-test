import { Injectable } from '@angular/core';
import { UserType } from 'src/interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }

  userData: UserType = {} as UserType;
}
