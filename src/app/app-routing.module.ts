import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProofOfLifeComponent } from '../app/proof-of-life/proof-of-life.component';
import { NavbarComponent } from '../app/navbar/navbar.component';
import { LocationComponent } from '../app/location/location.component';
import { SalesComponent } from '../app/sales/sales.component';

const routes: Routes = [
  {path: '', component: ProofOfLifeComponent},
  {path: 'Location', component: LocationComponent},
  {path: 'Sales', component: SalesComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
