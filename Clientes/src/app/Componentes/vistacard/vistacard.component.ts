import { Component, OnInit } from '@angular/core';
import { clientes } from 'src/app/Interfaces/listaclientes';

@Component({
  selector: 'app-vistacard',
  templateUrl: './vistacard.component.html',
  styleUrls: ['./vistacard.component.scss']
})
export class VistacardComponent implements OnInit {

  listaClientes = clientes
  constructor() { }

  ngOnInit(): void {
  }

}
