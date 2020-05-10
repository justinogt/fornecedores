import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, AbstractControl, FormControl, Validators } from '@angular/forms';
import { EmpresaListDto } from 'src/app/models/fornecedores.model';
import { FornecedoresService } from 'src/app/services/fornecedores.service';
import { isCpf, isCnpj } from 'src/app/utils';

function cpfOrCnpjValidator(control: AbstractControl): {[key: string]: any} | null  {
  if (control.value.length <= 14 && !isCpf(control.value))
    return { cpfInvalid: true };
  else if (control.value.length > 14 && !isCnpj(control.value))
    return { cnpjInvalid: true };

  return null;
}

@Component({
  selector: 'app-modal-new-provider',
  templateUrl: './modal-new-provider.component.html',
  styleUrls: ['./modal-new-provider.component.css']
})
export class ModalNewProviderComponent implements OnInit {
  providerForm: FormGroup;
  isSaving = false;
  companies: EmpresaListDto[] = [];

  cpfCnpjMask = '000.000.000-000';

  constructor(
    public activeModal: NgbActiveModal,
    private fornecedoresService: FornecedoresService) { }

  get empresa() { return this.providerForm.get('empresa'); }
  get nome() { return this.providerForm.get('nome'); }
  get cpfCnpj() { return this.providerForm.get('cpfCnpj'); }
  get rg() { return this.providerForm.get('rg'); }
  get dataNascimento() { return this.providerForm.get('dataNascimento'); }

  ngOnInit() {
    this.providerForm = new FormGroup({
      empresa: new FormControl(this.companies.length > 0 ? this.companies[0].id : 0),
      nome: new FormControl('', Validators.required),
      cpfCnpj: new FormControl('', cpfOrCnpjValidator),
      rg: new FormControl('', Validators.required),
      dataNascimento: new FormControl('')
    });

    this.cpfCnpj.valueChanges.subscribe(value => this.cpfCnpjMask = value.length > 14 ?
      '00.000.000/0000-00' : '000.000.000-000');
  }

  isPessoaFisica() {
    return isCpf(this.cpfCnpj.value);
  }

  save() {
    this.isSaving = true;
    // this.empresasService.save(this.providerForm.value).subscribe(() => {
    //   this.isSaving = false;
    //   this.activeModal.close();
    // });
  }
}
