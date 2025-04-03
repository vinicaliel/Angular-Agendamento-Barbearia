import { InjectionToken } from "@angular/core";
import { IClientService } from "./api-client/clients/iclients.servicer";

export const SERVICES_TOKEN = {
    HTTP:{
        CLIENT: new InjectionToken<IClientService>("SERVICES_TOKEN.HTTP.CLIENT")
        //SCHEDULE: new InjectionToken<IClientService>("SERVICE_TOKEN.HTTP.SCHEDULE")
    }
}