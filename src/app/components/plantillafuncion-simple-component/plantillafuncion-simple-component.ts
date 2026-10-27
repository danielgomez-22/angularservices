import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { ServicePlantilla } from '../../services/service.plantilla';
import { Plantilla } from '../../models/plantilla'; // Asegúrate de tener tu modelo Plantilla

@Component({
  selector: 'app-plantillafuncion-simple-component',
  standalone: false,
  styleUrl: './plantillafuncion-simple-component.css',
  templateUrl: './plantillafuncion-simple-component.html',
})
export class PlantillafuncionSimpleComponent implements OnInit {
  
  public arrayPlantillas: string[] = [];
  public funcionSeleccionada: string = ""; // Almacena la función elegida en el select
  public empleadosFiltrados: Plantilla[] = []; // Almacena los trabajadores de esa función
  
  constructor(
    private _servicePlantilla: ServicePlantilla, 
    private _cdr: ChangeDetectorRef
  ) { }

  async ngOnInit(): Promise<void> {
    try {
      this.arrayPlantillas = await this._servicePlantilla.getPlantillaAsync();
      this._cdr.detectChanges();
    } catch (error) {
      console.error("Error al cargar las funciones:", error);
    }
  }

  // Método que se ejecuta al pulsar el botón "Mostrar plantilla"
  async mostrarPlantilla() {
    if (!this.funcionSeleccionada) {
      alert("Por favor, selecciona una función primero.");
      return;
    }

    try {
      // 1. Llamamos al endpoint general /api/Plantilla que trae todos los trabajadores (según tu 1ª foto)
      const todosLosEmpleados: Plantilla[] = await this._servicePlantilla.getTodosLosEmpleadosAsync(); 
      
      // 2. Filtramos los empleados cuya función coincida exactamente con la seleccionada
      this.empleadosFiltrados = todosLosEmpleados.filter(
        emp => emp.funcion.toLowerCase() === this.funcionSeleccionada.toLowerCase()
      );

      this._cdr.detectChanges(); // Refresca la vista para dibujar la tabla
    } catch (error) {
      console.error("Error al obtener los trabajadores:", error);
    }
  }
}
