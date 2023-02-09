import { Component, OnInit } from '@angular/core';

/*enum departamento {
  'Ventas',
  'Contabilidad',
  'Administración',
  'TI'
};*/

@Component({
  selector: 'app-renta',
  templateUrl: './renta.component.html',
  styleUrls: ['./renta.component.scss']
})
export class RentaComponent implements OnInit {
  
  
  //Variables
  primerApellido : string = 'Primer Apellido';
  segundoApellido : string = 'Segundo Apellido';
  nombre : string = 'Nombre';
  //departamento: departamento;
  departamento: string[] = ['Ventas','Contabilidad','Administración','TI'];
  departamentoSeleccionado : string = 'Ventas';
  /*departamento:typeof departamento = departamento {
    Ventas: 'ventas'
    Contabilidad: 'Contabilidad'
    Administracion:'Administración'
    TI : 'TI'
  };*/

  salario : number = 0;
  renta : number = 0;
  
  constructor() { }

  ngOnInit(): void {
  }

  calcularRenta () {
    this.renta = this.salario - 10;
  }

}
