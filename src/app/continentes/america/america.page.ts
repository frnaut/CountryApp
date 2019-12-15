import { Component } from '@angular/core';
import { CountryService } from '../../services/countries.service';

@Component({
  selector: 'app-america',
  templateUrl: './america.page.html',
  styleUrls: ['./america.page.scss'],
})
export class AmericaPage {

  countries: any [];

  constructor( private countryService: CountryService ) { 
    this.continentes('americas');
  }

  continentes( region: string ) {

    this.countryService.regionCountry( region )
        .subscribe( ( data: any [] ) => this.countries = data );

  }

}
