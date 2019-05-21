import { Component } from '@angular/core';
import { modelGroupProvider } from '@angular/forms/src/directives/ng_model_group';
import { JsonPipe } from '@angular/common';

// const json = require('../assets/plantilla.json');
const json = require('../assets/FINSA_LINK_Capacitación_R2R12_PC_NUEVO.json');
var jsonvar;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'linkBot';
  source:any;
  file:any;
  jsonFilas = json.qnaDocuments;
  // jsonFilas = json.qnaDocuments.filter(d=> d.source=='FINSA_LINK_Capacitación_I2O07_PC_V2.1.pdf');
  imprime(event){
    console.log(JSON.stringify(event));
  }

  filtrado(e:Event){
    console.log(this.source);
    this.jsonFilas = json.qnaDocuments.filter(d=> d.source==this.source);
  }

  searchfile(){
    jsonvar = require(this.file);
    this.jsonFilas = jsonvar.qnaDocuments;
    
  }
}
