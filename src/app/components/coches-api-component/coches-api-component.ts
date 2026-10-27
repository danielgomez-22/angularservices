import { Component, ChangeDetectorRef } from '@angular/core';
import { OnInit } from '@angular/core';
import { Coche } from '../../models/coche';
import { ServiceCoches } from '../../services/service.coches';

@Component({
  selector: 'app-coches-api-component',
  standalone: false,
  styleUrl: './coches-api-component.css',
  templateUrl: './coches-api-component.html',
})
export class CochesApiComponent implements OnInit {
  public arrayCoches!: Array<Coche>
  constructor(
    private _serviceCoches: ServiceCoches, 
    private _cdr: ChangeDetectorRef
  ) { }

  async ngOnInit(): Promise<void> {
    this.arrayCoches = await this._serviceCoches.getChochesAsync();
    this._cdr.detectChanges(); // para dibujar los cambios
  }

}
