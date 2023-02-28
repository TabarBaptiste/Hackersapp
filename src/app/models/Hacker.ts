import { IHacker } from "./iHacker";

export class Hacker implements IHacker {

  constructor(
    public ip: string,
    public countryName: string,
    public regionName: string,
    public city: string,
    public id?: string) {
    // rien à faire de plus ici
  }

}
