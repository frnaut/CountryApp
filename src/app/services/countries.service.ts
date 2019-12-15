import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor( private http: HttpClient ) { }


getQuery( query: string ) {
  const URL = `https://restcountries.eu/rest/v2/${ query }`;

  return this.http.get(URL);

}

getCountrys() {

  return this.getQuery('all')
              .pipe ( map ( data => {
                return data;
              } ));

}

searchCoutry( termino: string ) {

  return this.getQuery(`name/${termino}`)
              .pipe ( map ( data => {
                return data;
              }) );

}

languagesCountry( idioma: string ) {

  return this.getQuery(`lang/${ idioma }`)
          .pipe (map ( data => {
            return data;
          } ));

}

regionCountry( region: string ) {

  return this.getQuery(`region/${region}`)
          .pipe ( map (data => {
            return data;
          } ));


}

getCountry( code: string ) {
  return this.getQuery(`https://restcountries.eu/rest/v2/alpha/${code}`)
          .pipe( map ( data => {
            return data;
          }));
}

}
