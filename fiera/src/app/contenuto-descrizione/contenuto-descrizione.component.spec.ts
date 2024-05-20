import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenutoDescrizioneComponent } from './contenuto-descrizione.component';

describe('ContenutoDescrizioneComponent', () => {
  let component: ContenutoDescrizioneComponent;
  let fixture: ComponentFixture<ContenutoDescrizioneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContenutoDescrizioneComponent]
    });
    fixture = TestBed.createComponent(ContenutoDescrizioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
