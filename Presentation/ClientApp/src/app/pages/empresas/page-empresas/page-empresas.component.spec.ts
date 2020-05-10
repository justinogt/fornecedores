import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEmpresasComponent } from './page-empresas.component';

describe('PageEmpresasComponent', () => {
  let component: PageEmpresasComponent;
  let fixture: ComponentFixture<PageEmpresasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageEmpresasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
