import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/countries.service';


@Component({
  selector: 'app-french',
  templateUrl: './french.page.html',
  styleUrls: ['./french.page.scss'],
})
export class FrenchPage {

  countries: any [];

  constructor( private countryService: CountryService ) { 
    this.getFrench('fr')
  }

  getFrench( idioma: string ) {
    this.countryService.languagesCountry( idioma )
        .subscribe( ( data: any []) => this.countries = data );
  }

}
