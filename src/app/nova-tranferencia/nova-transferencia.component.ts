import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']

})

export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  public transferir(): void {
    console.log('Solicitada nova transferência!')
    this.aoTransferir.emit({valor: this.valor, destino : this.destino});
    this.limparCampos();
  }

  private limparCampos(): void{
    this.valor = 0;
    this.destino = 0;
  }

}
