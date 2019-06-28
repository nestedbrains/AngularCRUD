import {Component, OnInit} from '@angular/core';
import {ClientService} from "../../services/client.service";
import {Client} from "../../models/Client";
import {map} from "rxjs/operators";


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients:Client[] = [];
  totalOwed: number = 0;

  constructor(public clientService: ClientService) {
  }

  ngOnInit() {
    this.clientService.getClients().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({key: c.payload.key, ...c.payload.val()})
        )
      )
    ).subscribe(clients => {
      this.clients = clients;
      console.log(clients);

    });

    this.getTotalOwed();
    this.getList()
  }

  getList(){
    this.clients.length
  }

  getTotalOwed() {
    let total = 0;
    for (let i = 0; i < this.clients.length; i++) {
      total += parseFloat(String(this.clients[i].balance))
    }
    this.totalOwed = total;
    console.log("Total " + this.totalOwed)
  }

}
