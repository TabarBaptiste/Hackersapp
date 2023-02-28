/**
 * Représente la structure de données d'un Hacker
 * L'id sera autogénéré par l'application (null si nouveau)
 */
export interface IHacker {
  ip: string,
  countryName: string,
  regionName: string,
  city: string,
  id?: string
}
