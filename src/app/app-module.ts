import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ServiceComics } from './services/service.comics';
import { ComicsComponent } from './components/comics-component/comics-component';
import { provideHttpClient } from '@angular/common/http';
import { PersonasApiComponent } from './components/personas-api-component/personas-api-component';
import { ServicePersonas } from './services/service.personas';
import { MenuComponent } from './components/menu-component/menu-component';
import { ServiceCoches } from './services/service.coches';
import { CochesApiComponent } from './components/coches-api-component/coches-api-component';
import { PlantillafuncionSimpleComponent } from './components/plantillafuncion-simple-component/plantillafuncion-simple-component';
import { ServicePlantilla } from './services/service.plantilla';
import { FormsModule } from '@angular/forms';
import { PlantillaFuncionMultipleComponent } from './components/plantilla-funcion-multiple-component/plantilla-funcion-multiple-component';

@NgModule({
  declarations: [
    App,
    ComicsComponent,
    PersonasApiComponent,
    MenuComponent,
    CochesApiComponent,
    PlantillafuncionSimpleComponent,
    PlantillaFuncionMultipleComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    provideBrowserGlobalErrorListeners(),
    ServiceComics,
    provideHttpClient(),
    ServicePersonas,
    ServiceCoches,
    ServicePlantilla,
  ],
  bootstrap: [App],
})
export class AppModule {}
