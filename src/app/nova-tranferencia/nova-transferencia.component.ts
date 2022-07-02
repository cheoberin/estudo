import { Component, EventEmitter, Output } from "@angular/core";
import { Transferencia } from "../models/transferencia.model";
import { TransferenciasService } from '../services/transferencias.service';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']

})

export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  constructor(private service: TransferenciasService){

  }

  public transferir(): void {
    console.log('Solicitada nova transferência!')
    const valorEmitir: Transferencia = {valor: this.valor, destino : this.destino}
    this.service.adicionar(valorEmitir).subscribe(resultado => {
      console.log(resultado);
      this.limparCampos();
    }, error => console.log(error));
  }

  private limparCampos(): void{
    this.valor = 0;
    this.destino = 0;
  }

}
