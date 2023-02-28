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
  constructor(private lookupIpService:LookupIpService){}

  hacker: Hacker =  new Hacker('','','','')
  ip: string | null = null;

  hackerForm = new FormGroup({
    ip: new FormControl(''),
    countryName: new FormControl(''),
    regionName: new FormControl(''),
    city: new FormControl(''),
    id: new FormControl(undefined)
  })


  ngOnInit(){
    this.getIP();
  }

  getIP() {
    const ip = this.hackerForm.get('ip')?.value;
    if (ip) {
      this.lookupIpService.getGeoLocationIp(ip).subscribe((res: any) => {
        this.hackerForm.get('countryName')?.setValue(res.country_name);
        this.hackerForm.get('regionName')?.setValue(res.region_name);
        this.hackerForm.get('city')?.setValue(res.city);
        this.lookupIpService=res.ip;
      });
    }
  }

  onSubmit() {
    console.log("Submit")
    console.log(this.hackerForm.value)
  }

   clear() {
    this.hackerForm.controls.ip.setValue("IP à renseigner")
    console.log("cancel")
    console.log(this.hackerForm.value)
  }
}
