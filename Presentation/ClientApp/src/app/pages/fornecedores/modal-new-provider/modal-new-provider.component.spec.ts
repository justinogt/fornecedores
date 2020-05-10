import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNewProviderComponent } from './modal-new-provider.component';

describe('ModalNewProviderComponent', () => {
  let component: ModalNewProviderComponent;
  let fixture: ComponentFixture<ModalNewProviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalNewProviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalNewProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
