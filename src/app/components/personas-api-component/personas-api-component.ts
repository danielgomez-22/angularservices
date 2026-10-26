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

  ngOnInit(): void {
    this._service.getPersonas().subscribe((response) => {
      console.log('leyendo personas')
      this.personas = response;
      this._cdr.detectChanges();
    });
  }
}
