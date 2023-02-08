import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-renta',
  templateUrl: './renta.component.html',
  styleUrls: ['./renta.component.scss']
})
export class RentaComponent implements OnInit {
  
  
  //Variables
  primerApellido : string = '';
  segundoApellido : string = '';
  nombre : string = '';
  departamento : string = '';
  salario:number = 0;


  constructor() { }

  ngOnInit(): void {
  }

}
