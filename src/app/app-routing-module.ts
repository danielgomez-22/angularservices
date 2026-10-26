import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonasApiComponent } from './components/personas-api-component/personas-api-component';
import { ComicsComponent } from './components/comics-component/comics-component';

const routes: Routes = [
  { path: 'personas',  component: PersonasApiComponent }, 
  { path: '',  component: ComicsComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
