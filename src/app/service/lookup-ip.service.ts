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
    return this.http.get(environment.apiBaseUrl + ip + '?access_key=' + environment.keyAPI);
  }

}
