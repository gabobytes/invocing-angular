import { environment } from 'src/environments/environment';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/Domain/Models/Client/client';
import { ClientGateway } from 'src/app/Domain/Models/Client/Gateway/client-gateway';

@Injectable({
  providedIn: 'root'
})
export class ClientApiService  extends ClientGateway{

  constructor(private http: HttpClient) {super(); }

  private _url = environment.baseUrl+environment.urlClients;

  getAll(): Observable<Client[]> {
    return this.http.get< Array<Client>>(this._url);
  }

  getById(id: String): Observable<Client> {
   return this.http.get<Client>(this._url+id);
  }
  saveNew(_client: Client): Observable<any> {
     return this.http.post(this._url, _client);
  }
  
}
