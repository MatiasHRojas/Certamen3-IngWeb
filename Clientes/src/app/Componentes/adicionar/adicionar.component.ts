import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { clientes, Listaclientes } from 'src/app/Interfaces/listaclientes';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.scss']
})
export class AdicionarComponent implements OnInit {

  msgValidacion:boolean=false;
  botonReset:boolean=true;
  formulario:FormGroup;

  constructor(public Form:FormBuilder) {
    this.formulario=Form.group({
      "name":["", [Validators.required, Validators.maxLength(20)]],
      "lastname":["", [Validators.required, Validators.maxLength(20)]],
      "gender":["", Validators.required],
      "country":["", Validators.required],
      "city":["", [Validators.required, Validators.maxLength(20)]]
    })
  }

  ngOnInit(): void {
  }

  // desactivar aviso de validacion y boton "crear otro"
  desactivar(){
    this.msgValidacion=false;
    this.botonReset=true;
  }

  // agregar nuevo cliente al array de clientes
  agregarCliente(){
    this.botonReset=false;
    this.msgValidacion=true;

    let nombre:any = document.getElementById("nombre");
    let apellido:any = document.getElementById("apellido");
    let genero:string;
    let opcion1:any=document.getElementById("hombre");
    let opcion2:any=document.getElementById("mujer");

    if(opcion1.checked) genero="Hombre";
    else if(opcion2.checked) genero="Mujer";
    else genero="Otro";

    let pais:any = document.getElementById("pais");
    let ciudad:any = document.getElementById("ciudad");
    let imgperfil:number = this.setImg(genero);

    let newCliente:Listaclientes = {
      name:nombre.value,
      lastname:apellido.value,
      gender:genero,
      country:pais.value,
      city:ciudad.value,
      img:`${imgperfil}.jpg`
    }

    clientes.push(newCliente);
    let crear:any = document.getElementById("crear");
    crear.disabled = true;
  }

  // asignar imagen según el genero
  setImg(genero:string){
    if(genero === "Hombre")
      return Math.floor(Math.random() * 2) + 1;
    if(genero === "Mujer")
      return Math.floor(Math.random() * 2) + 3;
    return Math.floor(Math.random() * 4) + 1;
  }

}