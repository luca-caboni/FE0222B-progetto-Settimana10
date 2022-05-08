import { Component, OnInit} from '@angular/core';
import { ToDo } from 'src/app/interface/todo';
import * as TaskService from '../../service/task.service';
import { faCircleCheck} from '@fortawesome/free-solid-svg-icons';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-completati',
  templateUrl: './completati.component.html',
  styleUrls: ['./completati.component.scss']
})
export class CompletatiComponent implements OnInit {

  faCircleCheck = faCircleCheck;           //Variabili per FontAwesome
  faListCheck = faListCheck;               //

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
