import { Component } from '@angular/core';
import { CountryService } from '../../services/countries.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  countries: any [];

  constructor( private countryService: CountryService,
               private router: Router ) {
    this.homeCountries();

   }

  homeCountries() {
    this.countryService.getCountrys()
        .subscribe(( data: any [] ) => {

          console.log(data);
          this.countries = data;

        }) ;
  }

  goCountry( code: string ) {
    this.router.navigateByUrl(`pais/${ code }`)
  }

}
