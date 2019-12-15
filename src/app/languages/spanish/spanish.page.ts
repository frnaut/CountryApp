import { Component } from '@angular/core';
import { CountryService } from '../../services/countries.service';

@Component({
  selector: 'app-spanish',
  templateUrl: './spanish.page.html',
  styleUrls: ['./spanish.page.scss'],
})
export class SpanishPage {

  countries: any [];

  constructor( private countryService: CountryService ) {
    this.getSpanish('es');
   }

  getSpanish( idioma: string ){
    this.countryService.languagesCountry( idioma )
        .subscribe( ( data: any [] ) => this.countries = data );
  }
}
