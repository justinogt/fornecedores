import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmpresasService } from 'src/app/services/empresas.service';
import { cnpjValidator } from 'src/app/utils';

@Component({
  selector: 'app-modal-new-company',
  templateUrl: './modal-new-company.component.html',
  styleUrls: ['./modal-new-company.component.css']
})
export class ModalNewCompanyComponent implements OnInit {
  companyForm: FormGroup;
  isSaving = false;
  states = [
    'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT',
    'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO',
    'RR', 'SC', 'SP', 'SE', 'TO'
  ];

  constructor(
    public activeModal: NgbActiveModal,
    private empresasService: EmpresasService) { }

  get nomeFantasia() { return this.companyForm.get('nomeFantasia'); }
  get cnpj() { return this.companyForm.get('cnpj'); }
  get uf() { return this.companyForm.get('uf'); }

  ngOnInit() {
    this.companyForm = new FormGroup({
      nomeFantasia: new FormControl('', Validators.required),
      cnpj: new FormControl('', cnpjValidator()),
      uf: new FormControl('SC', Validators.required)
    });
  }

  save() {
    this.isSaving = true;
    this.empresasService.save(this.companyForm.value).subscribe(() => {
      this.isSaving = false;
      this.activeModal.close('refresh');
    });
  }
}
