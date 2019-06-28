import {Injectable} from '@angular/core';

import {Client} from "../models/Client";
import {AngularFireDatabase, AngularFireList} from "@angular/fire/database";
import {FirebaseObjectObservable} from "@angular/fire/database-deprecated";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private dbPath = '/clients';

  clients: AngularFireList<Client> = null;
  client;

  constructor(public db: AngularFireDatabase) {
    this.clients = db.list(this.dbPath);
  }

  getClients(): AngularFireList<Client> {
    return this.clients;
  }

  newClient(client: Client) {
    this.clients.push(client);
  }

  getClient(id: string) {
    this.client = this.db.object('user/'+id).snapshotChanges().pipe(
      map(res => res.payload.val())
    );
    return this.client
  }
}
