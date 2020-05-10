import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFornecedoresComponent } from './page-fornecedores.component';

describe('PageEmpresasComponent', () => {
  let component: PageFornecedoresComponent;
  let fixture: ComponentFixture<PageFornecedoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PageFornecedoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFornecedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
