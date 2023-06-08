import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'frontend';

  modal = false;

  alert = false;

  livros: any[] = [];

  categorias: any[] = [];

  livro:any

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.appService.getBooks().subscribe((livro: any) => {
      this.livros = livro;
    });

    this.appService.getCategories().subscribe((categoria: any) => {
      this.categorias = categoria
      console.log(this.categorias)
    })
  }

  livrosForm = new FormGroup({
    titulo: new FormControl(''),
    categoria: new FormControl(''),
  });

  onSubmit() {
    this.appService
      .addBook(this.livrosForm.value)
      .subscribe();
  }

  showModal() {
    this.modal = true;
  }

  closeModal(value: any) {
    this.modal = value;
  }

  onSelect(item:any){
    this.livro = item
  }

  deleteBook(item: any) {
    const livro = {
      id: item.tituloId
    };
    this.appService.deleteBook(livro).subscribe();
  }

  showAlert(value: any){
    this.alert = value
    setTimeout(() => {
      this.alert = false;
    }, 1000);
  }

  closeAlert() {
    this.alert = false;
  }
  
}
