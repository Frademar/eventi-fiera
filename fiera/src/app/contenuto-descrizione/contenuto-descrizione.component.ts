import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-contenuto-descrizione',
  templateUrl: './contenuto-descrizione.component.html',
  styleUrls: ['./contenuto-descrizione.component.css']
})
export class ContenutoDescrizioneComponent {

  constructor(public activeModal : NgbActiveModal){}

  @Input() descrizione !: string;
}
