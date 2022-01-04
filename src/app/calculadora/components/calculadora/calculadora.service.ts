import { Injectable } from '@angular/core';
import { ICalculadora } from './operation.interface';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  constructor() { }
  
  NewCalculadora(): ICalculadora {
    return {
      firstValue: 0,
      seccondValue: 0,
      result: 0,
      operator: undefined
    };
  }
  
  Calcular(values: ICalculadora): number | undefined {
    if(!this.CheckValues(values)) { return undefined; }
    switch(values.operator){
      case "+": return values.firstValue + values.seccondValue;
      case "-": return values.firstValue - values.seccondValue;
      case "/": return values.firstValue / values.seccondValue;
      case "*": return values.firstValue * values.seccondValue;
      case "%": return values.firstValue % values.seccondValue;
      default:
        return undefined;
    }
  }

  private CheckValues(values: ICalculadora): boolean{
    let retorno = true;
    retorno = values.firstValue == 0 ? false : true;
    retorno = values.seccondValue == 0 ? false : true;
    return retorno;
  }

}
