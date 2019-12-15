import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/countries.service';

@Component({
  selector: 'app-oceania',
  templateUrl: './oceania.page.html',
  styleUrls: ['./oceania.page.scss'],
})
export class OceaniaPage {

  countries: any [];

  constructor( private countryService: CountryService ) {

    this.oceania('oceania');

   }

  oceania( region: string ) {
    this.countryService.regionCountry( region )
        .subscribe( ( data: any [] ) => this.countries = data );
  }

}
