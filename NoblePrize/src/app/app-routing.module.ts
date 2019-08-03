import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrizeComponent } from './prize/prize.component';


const routes: Routes = [
  { path: '',
    redirectTo: '/prize',
    pathMatch: 'full'
  },
  { path: 'prize', component: PrizeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
