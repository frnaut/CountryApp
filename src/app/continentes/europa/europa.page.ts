import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/countries.service';

@Component({
  selector: 'app-europa',
  templateUrl: './europa.page.html',
  styleUrls: ['./europa.page.scss'],
})
export class EuropaPage {

  countries: any[];

  constructor( private countryService: CountryService ) {

      this.europa('europe');
   }

  europa( region: string ) {

    this.countryService.regionCountry( region )
        .subscribe( ( data: any ) => this.countries = data );
  }

}
