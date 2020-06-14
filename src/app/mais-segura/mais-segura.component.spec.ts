import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaisSeguraComponent } from './mais-segura.component';

describe('MaisSeguraComponent', () => {
  let component: MaisSeguraComponent;
  let fixture: ComponentFixture<MaisSeguraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaisSeguraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaisSeguraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
