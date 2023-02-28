import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LookupIpService {

  constructor(private http:HttpClient) { }

  public getGeoLocationIp(ip: string) : any {
    console.log('getGeoLocationIp called');
    return this.http.get(environment.apiBaseUrl + '?ip=' + ip + '&output=json&access_key=9a588d9d3c7d0c03d49dedb4caeb3f59' + environment.keyAPI);
  }

}
