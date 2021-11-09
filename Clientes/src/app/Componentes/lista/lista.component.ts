import { Component, OnInit } from '@angular/core';
import { clientes } from 'src/app/Interfaces/listaclientes';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  listaClientes = clientes
  
  constructor() { }

  ngOnInit(): void {
  }

}
