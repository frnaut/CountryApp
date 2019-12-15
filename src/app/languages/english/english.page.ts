import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/countries.service';


@Component({
  selector: 'app-english',
  templateUrl: './english.page.html',
  styleUrls: ['./english.page.scss'],
})
export class EnglishPage {

  countries: any [];

  constructor( private countryService: CountryService  ) {

    this.getEnglish('en');

   }

  getEnglish( idioma: string ) {
    this.countryService.languagesCountry( idioma )
        .subscribe( ( data: any[] ) => this.countries = data );
  }

}
