import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-renta',
  templateUrl: './renta.component.html',
  styleUrls: ['./renta.component.scss']
})
export class RentaComponent implements OnInit {

  //Variables
  primerApellido: string = '';
  segundoApellido: string = '';
  nombre: string = '';
  departamento: string[] = ['Ventas', 'Contabilidad', 'Administración', 'TI'];
  departamentoSeleccionado: string = 'Ventas';
  salario: number = 0;
  salarioGravable: number = 0;
  salarioSobreExceso: number = 0;

  renta: number = 0;
  AFP: number = 0;
  ISSS: number = 0;
  mostrarResult: boolean = false;
  formulario: any = document.getElementById('formulario');
  resultados: any = document.getElementById('resultados');

  readonly Cuotatramo2 = 17.67;
  readonly Cuotatramo3 = 60;
  readonly Cuotatramo4 = 288.57;


  constructor() { }

  ngOnInit(): void {
  }
  calcularAFP(sal: number) {
    return Number((sal * 0.0725).toFixed(2));
  }
  calcularISSS(sal: number): number {
    let isss: number = sal <= 1000 ? Number((sal * 0.03).toFixed(2)) : Number((1000 * 0.03).toFixed(2));
    return isss;
  }

  calcularRenta() {
    this.AFP = this.calcularAFP(this.salario);
    this.ISSS = this.calcularISSS(this.salario);

    this.salarioGravable = this.salario - this.AFP - this.ISSS;

    if (this.salarioGravable > 472.00 && this.salario < 895.24) {
      this.salarioSobreExceso = this.salarioGravable - 472.00;
      this.renta = Number((Number((this.salarioSobreExceso * 0.10).toFixed(2)) + this.Cuotatramo2).toFixed(2));

    } else if (this.salarioGravable > 895.24 && this.salario < 2038.10) {
      this.salarioSobreExceso = this.salarioGravable - 895.24;
      this.renta = Number((this.salarioSobreExceso * 0.20).toFixed(2)) + this.Cuotatramo3;

    } else if (this.salarioGravable > 2038.10) {
      this.salarioSobreExceso = this.salarioGravable - 2038.10;
      this.renta = Number((Number((this.salarioSobreExceso * 0.30).toFixed(2)) + this.Cuotatramo4).toFixed(2));

    } else {
      this.renta = 0;
    }
    this.mostrarResult = true;

  }

  Regresar() {
    this.mostrarResult = false;
  }
}