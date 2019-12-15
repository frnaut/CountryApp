import { Component } from '@angular/core';
import { CountryService } from '../../services/countries.service';

@Component({
  selector: 'app-africa',
  templateUrl: './africa.page.html',
  styleUrls: ['./africa.page.scss'],
})
export class AfricaPage {

  countries: any [];

  constructor( private countryService: CountryService ) {
    this.continentes( 'africa' );
   }

  continentes( continente: string ) {
    this.countryService.regionCountry( continente )
        .subscribe( ( data: any[] ) => this.countries = data );
  }

}
