import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNewCompanyComponent } from './modal-new-company.component';

describe('ModalNewCompanyComponent', () => {
  let component: ModalNewCompanyComponent;
  let fixture: ComponentFixture<ModalNewCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalNewCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalNewCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
