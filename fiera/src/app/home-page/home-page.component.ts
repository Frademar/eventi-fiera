import { Component } from '@angular/core';
import { FieraService } from '../services/fiera.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ContenutoDescrizioneComponent } from '../contenuto-descrizione/contenuto-descrizione.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  title = 'fiera';
  listaFiere : any;
  constructor(private service : FieraService, private modalService : NgbModal ){
    this.service.estraiFiere().subscribe(data=>{
      this.listaFiere = data;
    });
  }

  open(i : number){
    // Da questa classe ng-bootstrap possiamo creare il collegamento con u naltro componente capace di comparire interattivamente in una modale
    const modalRef = this.modalService.open(ContenutoDescrizioneComponent,{centered:true});
    // Con la proprieta di modalRef componentInstance allochiamo il contenuto della descrizione in modo che possa essere richiamata dalla modale
    modalRef.componentInstance.descrizione = this.listaFiere[i].descrizione;
  }
}
