import { Routes } from '@angular/router';
import { EditClientComponent } from './clients/edit-client/edit-client.component';
import { NewClientComponent } from './clients/new-client/new-client.component';
import { ListClientComponent } from './clients/list-client/list-client.component'
import { SchedulesMonthComponent } from './schedules/schedules-month/schedules-month.component';

export const routes: Routes = [
    { path: 'clients/edit-client/:id', component: EditClientComponent, data: { title: 'Atualizar Cliente' } },
    { path: 'clients/new-client', component: NewClientComponent, data: { title: 'Cadastrar Cliente' } },
    { path: 'clients/list', component: ListClientComponent, data: { title: 'Clientes Cadastrados' } },
    { path: 'schedules/month', component: SchedulesMonthComponent, data: { title: 'Agendamentos' } },
    { path: '**', redirectTo: 'schedules/month' }
];
