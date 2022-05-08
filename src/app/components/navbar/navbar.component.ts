import { Component, OnInit, Input } from '@angular/core';
import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  faClipboardCheck = faClipboardCheck;    //Variabili per FontAwesome
  faList = faList;                        //


  constructor() { }

  @Input() message!: string;



  ngOnInit(): void {
  }

}
