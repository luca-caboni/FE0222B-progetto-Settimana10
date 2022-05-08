import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/app/interface/todo';
import * as TaskService from '../../service/task.service';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';


@Component({
    templateUrl: './da-completare.component.html',
    styleUrls: ['./da-completare.component.scss']
})
export class DaCompletareComponent implements OnInit {

    faCheck = faCheck;                        //Variabili per FontAwesome
    faClipboardList = faClipboardList;        //



    listaDaFare: ToDo[] = [];
    cosaDaAggiungere: string = '';           // ho inizializzato le variabili
    i = 0;
    caricamento = true;
    vuoto = false;
    pieno = false;




    constructor() {
        setTimeout(() => {
            this.caricamento = false;
            this.listaDaFare = TaskService.recupera();
            if (this.listaDaFare.length != 0) {
                this.pieno = true
            }
            else {
                this.vuoto = true
            }
        }, 2000);
    }

    aggiungi(cosaDaAggiungere: string): void {
        if (cosaDaAggiungere == '') {
            alert('riempi il campo');
        }
        setTimeout(() => {
            if (cosaDaAggiungere != '') {
                this.vuoto = false;
                this.pieno = true;

                let task: ToDo = {
                    id: this.i,
                    title: cosaDaAggiungere,
                    completed: false
                };

                this.listaDaFare = TaskService.aggiungi(task);
                this.i++;
            }
        }, 2000);


    }


    reset(event: any): void {           // ogni volta che si clicca sull'input cancella quello scritto in precedenza
        event.target.value = '';
    }


    completato(index: number): void {
        setTimeout(() => {
            TaskService.aggiungiFatto(this.listaDaFare[index]);

            (this.listaDaFare).splice(index, 1);
            if (this.listaDaFare.length == 0) {
                this.pieno = false;
                this.vuoto = true;
            };
        }, 2000);

    }



    ngOnInit(): void { }

}
