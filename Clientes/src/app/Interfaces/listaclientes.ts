export interface Listaclientes {
    name:string;
    lastname:string;
    gender:string;
    country:string;
    city:string;
    img:string;
}

export let clientes:Array<Listaclientes>=[{
    name:"Pepita",
    lastname:"Cruz",
    gender:"Mujer",
    country:"Chile",
    city:"Valparaíso",
    img:"4.jpg"
},{
    name:"Juan",
    lastname:"Totto",
    gender:"Hombre",
    country:"Chile",
    city:"Metropolitana",
    img:"1.jpg"
},{
    name:"Pedro",
    lastname:"Tijuana",
    gender:"Hombre",
    country:"Chile",
    city:"Metropolitana",
    img:"2.jpg"
},{
    name:"Juana",
    lastname:"de Arco",
    gender:"Mujer",
    country:"Chile",
    city:"Valparaíso",
    img:"3.jpg"
}]