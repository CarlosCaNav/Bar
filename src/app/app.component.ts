import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Bar';

  refrescos= [
    ["Cocacola",     "2,5€"],
    ["Fanta",    "1€"],
    ["Sweps Rosa",    "1,2€"],
    ["Sweps Limón",    "1,2€"],
  ];

  cervezas = [
    ["Milnueve",     "2,5€"],
    ["Alhambra",    "2,5€"],
    ["San Miguel",    "1,2€"],
    ["Mahou",    "1,2€"],
    ["Calatrava",    "1,2€"],
  ];

  copas = [
    ["Ron Cocacola",     "2,5€"],
    ["Vodka",    "2,5€"],
    ["Wisky",    "1,2€"],
    ["Crema de Orujo",    "1,2€"],
  ];

  cafes = [
    ["Café con leche",     "2,5€"],
    ["Capuchino",    "2,5€"],
    ["Café con hielo",    "1,2€"],
  ];

  raciones = [
    ["Calamares", "7€", []],
    ["Patatas", "8€", ["lactosa"]],
    ["Cianuro", "12€", []],
  ];

  desplegados: Record <string, boolean> = {};
/* 

  desplegado: Record <string, boolean> = {
    "raciones": false,
    "cervezas": false,
    "refrescos": false,
  } */
/* 
productosVar = [this.refrescos, this.cervezas, this.copas, this.cafes, this.raciones];
productos = ["Refrescos", "Cervezas", "Copas", "Cafés", "Raciones"]; */

  desplegar(seccion: string){
    this.desplegados[seccion] = !this.desplegados[seccion]


    /* 
    this.productos[seccion] = !this.desplegado[seccion];
    console.log(this.desplegado[seccion]); */
    

  }
}
