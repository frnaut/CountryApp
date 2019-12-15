import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/countries.service';

@Component({
  selector: 'app-chinese',
  templateUrl: './chinese.page.html',
  styleUrls: ['./chinese.page.scss'],
})
export class ChinesePage  {

  countries: any [];

  constructor( private countryService: CountryService ) {  
    this.getChinese('zh');
  }

  getChinese( idioma: string ) {
    this.countryService.languagesCountry( idioma )
        .subscribe( ( data: any [] ) => this.countries = data  );
  }


}
