import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'has-comanda',
  templateUrl: './comanda.component.html',
  styleUrls: ['./comanda.component.css']
})
export class ComandaComponent implements OnInit {

    formComanda: FormGroup;

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formComanda = this.formBuilder.group({
      chopp : this.formBuilder.control(''),
      pizzas : this.formBuilder.control(''),
      recheios : this.formBuilder.control(''),
      pessoas : this.formBuilder.control(''),
      pagaServico : this.formBuilder.control(true)

  })
  }

  onProcessar(){
    
  }

}
