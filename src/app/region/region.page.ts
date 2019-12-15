import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-region',
  templateUrl: './region.page.html',
  styleUrls: ['./region.page.scss'],
})
export class RegionPage {

  constructor( private router: Router ) {


   }

   contientes( region: string ) {
      this.router.navigateByUrl(`continente/${ region }`);
   }


}
