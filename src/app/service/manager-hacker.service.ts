import { EventEmitter, Injectable, Output } from '@angular/core';
import { Hacker } from '../models/Hacker';
import { IHacker } from '../models/iHacker';

@Injectable({
  providedIn: 'root'
})
export class ManagerHackerService {

  constructor() { }
  
  @Output() editHackerEvent = new EventEmitter<IHacker>()

  editHacker(hacker: IHacker) {
    this.editHackerEvent.emit(hacker)
  }

  /**
   * Get hackers stored locally on client side (localStorage)
   * @returns list of Hackers
   */
  getAllHackers(): Hacker[] {
    return JSON.parse(localStorage.getItem('badguys') || '[]');
  }

}
