import { Component } from '@angular/core';
import { CountryService } from '../services/countries.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.page.html',
  styleUrls: ['./country.page.scss'],
})
export class CountryPage {

  country: any [];

  constructor( private countryService: CountryService ) {

   }

   getCountry( code: string ) {

    this.countryService.getCountry( code )
        .subscribe( ( data: any [] ) => {
          this.country = data;
        } );

   }

}
