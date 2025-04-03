import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ClientModelForm } from '../../client.models';
import { FormsModule, NgForm } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';
import {MatInputModule} from '@angular/material/input'
import { MatButtonModule} from '@angular/material/button'
import {MatFormFieldModule} from '@angular/material/form-field'

@Component({
  selector: 'app-client-form',
  imports: [
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    NgxMaskDirective,
    MatButtonModule
  ],
  templateUrl: './client-form.component.html',
  styleUrl: './client-form.component.scss'
})
export class ClientFormComponent {


  @Input() client: ClientModelForm = {id:0, name: "", email:"", phone: ""}

  @Output() clientSubmited = new EventEmitter<ClientModelForm>

  onSubmit(_: NgForm) {

    this.clientSubmited.emit(this.client)

  }

}
