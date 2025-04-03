import { Component, Inject } from '@angular/core';
import { SERVICES_TOKEN } from '../../services/service.token';
import { ClientsService } from '../../services/api-client/clients/clients.service';
import { IClientService } from '../../services/api-client/clients/iclients.service';

@Component({
  selector: 'app-list-client',
  imports: [],
  templateUrl: './list-client.component.html',
  styleUrl: './list-client.component.css' ,
  providers: [
    {
      provide: SERVICES_TOKEN.HTTP.CLIENT, useClass: ClientsService
    }
  ]
})

export class ListClientComponent {



  constructor(@Inject(SERVICES_TOKEN.HTTP.CLIENT) private readonly httpService: IClientService){

  }
}
