import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Transferencia } from '../models/transferencia.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciasService {

  listaTransferencia: any[];
  private url = 'http://localhost:3000/transferencias';

constructor(private httpClient: HttpClient) {
  this.listaTransferencia = []
}

get transferencias(){
  return this.listaTransferencia
}

public todas(): Observable<Transferencia[]>{
  return this.httpClient.get<Transferencia[]>(this.url);
}

public adicionar(transferencia: Transferencia): Observable<Transferencia>{
  this.hidratar(transferencia);
  return this.httpClient.post<Transferencia>(this.url, transferencia);
}

hidratar(transferencia: any){
  transferencia.data = new Date();
}

}
