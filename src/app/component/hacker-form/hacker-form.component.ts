import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Hacker } from 'src/app/models/Hacker';
import { LookupIpService } from '../../service/lookup-ip.service';

@Component({
  selector: 'app-hacker-form',
  templateUrl: './hacker-form.component.html',
  styleUrls: ['./hacker-form.component.css']
})
export class HackerFormComponent {
  managerHackerService: any;
  constructor(private lookupIpService: LookupIpService) { }

  hacker: Hacker = new Hacker('', '', '', '')
  ipAddress: string | null = null;

  hackerForm = new FormGroup({
    ip: new FormControl(''),
    countryName: new FormControl(''),
    regionName: new FormControl(''),
    city: new FormControl(''),
    id: new FormControl(undefined)
  })

  ngOnInit(): void {
    this.managerHackerService.editHackerEvent
      .subscribe((hacker: Hacker) => {
        console.log('Event message editEvent')
        this.hacker_to_hackerForm(hacker)

      })
    this.getIP()
    this.hackerForm_to_hacker()
  }

  getIP() {
    const ip = this.hackerForm.get('ip')?.value;
    console.log(ip)
    if (ip) {
      this.lookupIpService.getGeoLocationIp(ip).subscribe((res: any) => {
        console.log(res); // Ajouter cette ligne pour déboguer la réponse du service
        this.hackerForm.get('countryName')?.setValue(res.country_name);
        this.hackerForm.get('regionName')?.setValue(res.region_name);
        this.hackerForm.get('city')?.setValue(res.city);
        this.hackerForm.get('ip')?.setValue(res.ip);
      });
    }
  }

  onSubmit() {
    console.log("Data form")
    console.log(this.hackerForm.value)
    debugger
    let hacker = this.hackerForm_to_hacker();

    console.log("Hacker object : ")
    console.log(JSON.stringify(hacker))
    this.managerHackerService.saveHacker(hacker)
  }

  clear() {
    this.hackerForm.reset({
      ip: '',
      countryName: '',
      regionName: '',
      city: '',
      id: undefined,
    })
  }

// Convertir le formulaire en objet Hacker
private hackerForm_to_hacker(): Hacker {
  // Récupérer l'id s'il existe dans le formulaire
  const id = this.hackerForm.controls.id.value;
  // Créer un nouvel objet Hacker à partir des valeurs du formulaire
  const hacker = new Hacker(
    this.hackerForm.controls.ip.value ?? '',
    this.hackerForm.controls.countryName.value ?? '',
    this.hackerForm.controls.regionName.value ?? '',
    this.hackerForm.controls.city.value ?? ''
  );
  // Si un id est présent dans le formulaire, l'assigner à l'objet Hacker créé
  if (id) {
    hacker.id = id;
  }
  // Assigner l'objet Hacker créé à la propriété hacker de la classe
  this.hacker = hacker;
  // Retourner l'objet Hacker créé
  return hacker;
}

// Convertir un objet Hacker en valeurs du formulaire
private hacker_to_hackerForm(hacker: Hacker): void {
  // Mettre à jour les valeurs du formulaire avec les propriétés de l'objet Hacker
  this.hackerForm.patchValue({
    ip: hacker.ip,
    countryName: hacker.countryName,
    regionName: hacker.regionName,
    city: hacker.city
  })
}

}
