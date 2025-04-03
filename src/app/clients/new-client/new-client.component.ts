import { Component, Inject, inject, OnDestroy } from '@angular/core';
import { SERVICES_TOKEN } from '../../services/service.token';
import { IClientService } from '../../services/api-client/clients/iclients.servicer';
import { ClientsService } from '../../services/api-client/clients/clients.service';
import { ClientFormComponent } from "../components/client-form/client-form.component";
import { ClientModelForm } from '../client.models';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-client',
  imports: [ClientFormComponent],
  templateUrl: './new-client.component.html',
  styleUrl: './new-client.component.scss',

  providers: [
    {
      provide: SERVICES_TOKEN.HTTP.CLIENT, useClass: ClientsService
    }
  ]
})
export class NewClientComponent implements OnDestroy{

  private httpSubscription?: Subscription
onSubimitClient(value: ClientModelForm) {
  const{id, ...request} = value
  this.httpService.save(request).subscribe(_=>{

    this.router.navigate(["clients/list"])

  })
}

  constructor(@Inject(SERVICES_TOKEN.HTTP.CLIENT) private readonly httpService: IClientService, 
              private readonly router: Router){



  }
  ngOnDestroy(): void {
    if(this.httpSubscription) {
      this.httpSubscription.unsubscribe()
    }
  }

}
