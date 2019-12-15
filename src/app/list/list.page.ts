import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage {


  constructor( private router: Router ) {}

  goSpanish() {
    this.router.navigateByUrl('/idioma/espanol');
  }

  goEnglish() {
    this.router.navigateByUrl('/idioma/ingles');
  }

  goFrench() {
    this.router.navigateByUrl('/idioma/frances');
  }

  goChinese() {
    this.router.navigateByUrl('/idioma/chino');
  }

}
