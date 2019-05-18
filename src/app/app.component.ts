import { Component } from '@angular/core';
import { modelGroupProvider } from '@angular/forms/src/directives/ng_model_group';
import { JsonPipe } from '@angular/common';

// const json = require('../assets/plantilla.json');
// const json = require('C://Users//José Catalán O//Downloads//bot isa.json');
const json = require('../assets/2007 capacitacion.json');
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'linkBot';
  jsonFilas = json.qnaDocuments.filter(d=> d.source=='FINSA_LINK_Capacitación_I2O07_PC_V2.1.pdf');
  imprime(event){

    console.log(JSON.stringify(event));

  }

  filtrado(elfiltro:any){

  }
}
