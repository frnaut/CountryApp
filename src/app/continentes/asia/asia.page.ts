import { Component } from '@angular/core';
import { CountryService } from '../../services/countries.service';

@Component({
  selector: 'app-asia',
  templateUrl: './asia.page.html',
  styleUrls: ['./asia.page.scss'],
})
export class AsiaPage {

  countries: any [];

  constructor( private countryService: CountryService ) { 

    this.continentes('asia');
  }

  continentes( region: string ) {

    this.countryService.regionCountry( region )
        .subscribe( ( data: any [] ) => this.countries = data );

  }
}
