import {Component, OnInit} from '@angular/core';
import {ClientService} from "../../services/client.service";
import {ActivatedRoute, Router, RouterLinkActive} from "@angular/router";
import {FlashMessagesService} from "angular2-flash-messages";
import {Client} from "../../models/Client";

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {

  id: string;
  client: Client;
  hasBalance: boolean = false;
  showBalanceUpdateInput: boolean = false

  constructor(
    public clientService: ClientService,
    public router: Router,
    public route: ActivatedRoute,
    public flashMessagesService: FlashMessagesService,
  ) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id)
    this.clientService.getClient(this.id).subscribe(client => {

      console.log(this.client)
    });

  }

}
