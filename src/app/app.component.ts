import { Component } from '@angular/core';
import { TransferenciasService } from './services/transferencias.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';

  constructor(private service: TransferenciasService){

  }

  public transferir($event): void {
    this.service.adicionar($event);
  }
}
