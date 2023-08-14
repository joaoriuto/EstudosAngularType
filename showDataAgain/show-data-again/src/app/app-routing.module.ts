import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowDataAgainComponent } from './show-data-again/show-data-again.component';

const routes: Routes = [
  {path:'show', component: ShowDataAgainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
