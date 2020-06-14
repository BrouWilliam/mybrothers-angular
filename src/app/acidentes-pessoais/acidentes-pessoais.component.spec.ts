import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcidentesPessoaisComponent } from './acidentes-pessoais.component';

describe('AcidentesPessoaisComponent', () => {
  let component: AcidentesPessoaisComponent;
  let fixture: ComponentFixture<AcidentesPessoaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcidentesPessoaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcidentesPessoaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
