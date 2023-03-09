import { Component } from '@angular/core';
import { Hacker } from 'src/app/models/Hacker';
import { ManagerHackerService } from 'src/app/service/manager-hacker.service';

@Component({
  selector: 'app-hacker-list',
  templateUrl: './hacker-list.component.html',
  styleUrls: ['./hacker-list.component.css']
})
export class HackerListComponent {

  hackers: Hacker[]

  constructor(private managerHackerService: ManagerHackerService) {
    this.hackers = managerHackerService.getAllHackers()
  }
  editHacker(hacker: Hacker) {
    this.managerHackerService.editHacker(hacker)
  }
}
