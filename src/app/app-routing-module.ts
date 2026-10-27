import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonasApiComponent } from './components/personas-api-component/personas-api-component';
import { ComicsComponent } from './components/comics-component/comics-component';
import { CochesApiComponent } from './components/coches-api-component/coches-api-component';

const routes: Routes = [
  { path: 'personas',  component: PersonasApiComponent }, 
  { path: 'coches',  component: CochesApiComponent },

  { path: '',  component: ComicsComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
