import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AppService } from 'src/app/app.service';


@Component({
  selector: 'app-edit-form',
  templateUrl: './edit.form.component.html',
})
export class EditFormComponent{

  @Output() closeModalEvent = new EventEmitter();
  @Input() livro: any;
  
  constructor(private appService: AppService) {}

  editForm = new FormGroup({
    id: new FormControl(),
    titulo: new FormControl(''),
    categoria: new FormControl(''),
  });

  onSubmit(){
    this.appService.updateBook({
      categoria: this.editForm.value.categoria,
      titulo: this.editForm.value.titulo,
      id: this.livro.tituloId,
    }).subscribe()
  }

  closeModal(){
    this.closeModalEvent.emit(false)
  }
}
