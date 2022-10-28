import { Injectable } from '@angular/core';
import { UserType } from 'src/interfaces/data-types';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  constructor() {}

  dataObj: UserType = {} as UserType;
}
