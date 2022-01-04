import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from './calculadora.service';
import { ICalculadora } from './operation.interface';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  calculadora: ICalculadora = {} as ICalculadora;

  constructor(
    private calculadoraService: CalculadoraService
  ) { }

  ngOnInit(): void {
    this.calculadora = this.calculadoraService.NewCalculadora();
  }

  onClear(): void {
    this.calculadora = this.calculadoraService.NewCalculadora();
  }

  onClearLastValue(): void {
    if(this.calculadora.operator != null) { 
      this.calculadora.seccondValue = 0; 
    }

    else if (
      this.calculadora.operator != undefined && 
      this.calculadora.firstValue > 0
    ) { this.calculadora.operator = undefined;}

    else if(
      this.calculadora.operator == null && 
      this.calculadora.firstValue > 0
    ) { this.calculadora.firstValue = 0;}
  }

  onResult(): void {
    if(
      this.calculadora.firstValue == 0 || 
      this.calculadora.seccondValue == 0
    ) { return; }
    this.calculadora.result = this.calculadoraService.Calcular(this.calculadora);
  }

  setOperation(operator: string): void {
    if(this.calculadora.firstValue == 0) {
      return;
    }
    this.calculadora.operator = operator;
  }

  setNumber(number: number): void {
    if(this.calculadora.operator == undefined) {
      this.calculadora.firstValue = 
        this.calculadora.firstValue == 0 ? number : this.calculadora.firstValue*10 + number;
      return;
    }
    this.calculadora.seccondValue = 
        this.calculadora.seccondValue == 0 ? number : this.calculadora.seccondValue*10 + number;
  }

  showMessage() {
    console.log(`Made with ♥ by @vbianchidev`);
  }
}
