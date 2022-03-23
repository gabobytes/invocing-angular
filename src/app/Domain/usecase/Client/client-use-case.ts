import { observable, Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { ClientGateway } from "../../Models/Client/Gateway/client-gateway";
import { Client } from '../../Models/Client/client';

@Injectable({
    providedIn:'root'
})

export class ClientUseCases{
    
    constructor(private _clientGateway: ClientGateway) { }

    getAllClients() : Observable<Array<Client>>{
        return this._clientGateway.getAll();
    }

    getClientById(id:String ) : Observable<Client>{
        return this._clientGateway.getById(id);
    }

    saveNew(_client: Client): Observable<any> {
        return this._clientGateway.saveNew(_client);
     }   

     updateClient(id:String, _client:Client):Observable<any>{
         return this._clientGateway.update(id,_client);
     }
     
     delete(id:string):Observable<any>{
         return this._clientGateway.delete(id);
     }

    
}