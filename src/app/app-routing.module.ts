import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'idiomas',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'region',
    loadChildren: () => import('./region/region.module').then( m => m.RegionPageModule)
  },
  {
    path: 'idioma/espanol',
    loadChildren: () => import('./languages/spanish/spanish.module').then( m => m.SpanishPageModule)
  },
  {
    path: 'idioma/ingles',
    loadChildren: () => import('./languages/english/english.module').then( m => m.EnglishPageModule)
  },
  {
    path: 'idioma/frances',
    loadChildren: () => import('./languages/french/french.module').then( m => m.FrenchPageModule)
  },
  {
    path: 'idioma/chino',
    loadChildren: () => import('./languages/chinese/chinese.module').then( m => m.ChinesePageModule)
  },
  {
    path: 'continente/america',
    loadChildren: () => import('./continentes/america/america.module').then( m => m.AmericaPageModule)
  },
  {
    path: 'continente/asia',
    loadChildren: () => import('./continentes/asia/asia.module').then( m => m.AsiaPageModule)
  },
  {
    path: 'continente/africa',
    loadChildren: () => import('./continentes/africa/africa.module').then( m => m.AfricaPageModule)
  },
  {
    path: 'continente/europa',
    loadChildren: () => import('./continentes/europa/europa.module').then( m => m.EuropaPageModule)
  },
  {
    path: 'continente/oceania',
    loadChildren: () => import('./continentes/oceania/oceania.module').then( m => m.OceaniaPageModule)
  },
  {
    path: 'loading',
    loadChildren: () => import('./loading/loading.module').then( m => m.LoadingPageModule)
  },
  {
    path: 'pais/:code',
    loadChildren: () => import('./country/country.module').then( m => m.CountryPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
