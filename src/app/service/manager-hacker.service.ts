import { EventEmitter, Injectable, Output } from '@angular/core';
import { Hacker } from '../models/Hacker';
import { IHacker } from '../models/iHacker';

@Injectable({
  providedIn: 'root'
})
export class ManagerHackerService {

  constructor() { }

  @Output() editHackerEvent = new EventEmitter<IHacker>()
  @Output() updateHackerListEvent = new EventEmitter<IHacker[]>()

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

  addHacker(hacker: IHacker) {
    let hackers = this.getAllHackers();
    let h = hackers.find(badguy => badguy.ip == hacker.ip)
    if (!h) {
      hackers.push(hacker)
      console.log("Ajouté avec succès")
    } else {
      h.city = hacker.city
      h.countryName = hacker.countryName
      h.regionName = hacker.regionName
    }
    console.log("Modifié avec succès")
    localStorage.setItem('badguys', JSON.stringify(hackers));
    /*this.updateHackerListEvent.emit(hackers)*/
  }

}
//localStorage.clear(); // Supprime toutes les données stockées dans localStorage
