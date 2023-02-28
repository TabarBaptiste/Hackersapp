import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AproposComponent } from './component/apropos/apropos.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'apropos', component: AproposComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
