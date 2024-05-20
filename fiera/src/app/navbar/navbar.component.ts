import {Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Subscriber, fromEvent } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{

@ViewChild('navbarrista') navbar!:ElementRef<HTMLElement>;
  
@HostListener('window:scroll')
navbarScroll(){
  if(window.scrollY>0){
    this.navbar.nativeElement.classList.remove('box-shadow-inset');
    this.navbar.nativeElement.classList.add('navbar-scroll');
  }else{
    this.navbar.nativeElement.classList.add('box-shadow-inset');
    this.navbar.nativeElement.classList.remove('navbar-scroll');
  }
}


}
