import { Component, OnInit} from '@angular/core';
import { ToDo } from 'src/app/interface/to-do-model';
import * as TaskService from '../../service/task.service';


@Component({
  selector: 'app-completati',
  templateUrl: './completati.component.html',
  styleUrls: ['./completati.component.scss']
})
export class CompletatiComponent implements OnInit {

  caricamento = true;
  vuoto = false;
  pieno = false;
  listaFatti: ToDo[] = [];


  constructor() {
    setTimeout(() => {
      this.caricamento = false;
      this.listaFatti = TaskService.recuperaFatti();
      if (this.listaFatti.length != 0){
        this.pieno = true
      }
      else {
        this.vuoto = true
      }
    }, 2000);
  };









  ngOnInit(): void {

  }

}
