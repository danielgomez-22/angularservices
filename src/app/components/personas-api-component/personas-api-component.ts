import { Component, ChangeDetectorRef } from '@angular/core';
import { ServicePersonas } from '../../services/service.personas';
import { Persona } from '../../models/persona';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-personas-api-component',
  standalone: false,
  styleUrl: './personas-api-component.css',
  templateUrl: './personas-api-component.html',
})
export class PersonasApiComponent implements OnInit {
  public personas!: Array<Persona>;

  constructor(
    private _cdr: ChangeDetectorRef,
    private _service: ServicePersonas 
  ) {}

  async ngOnInit(): Promise<void> {
    this.personas = await this._service.getPersonasAsync();
    try{
      console.log('dentrooooo ');
      this._cdr.detectChanges();
    }catch(error){
      console.log('error en el api: ', error);
    }

    //this._service.getpersonas().subcribe({
      //next: (response) => {
        //this.personas = response;
        //this._cdr.detectChanges();

     // }, error: (error) => {
       // console.log('error en el api: ', error);
      //}
   // })
    
  }
}
