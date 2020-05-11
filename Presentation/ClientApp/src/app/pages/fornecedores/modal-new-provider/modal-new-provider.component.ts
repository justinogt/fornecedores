import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators, ValidatorFn, ValidationErrors, AbstractControl, FormArray } from '@angular/forms';
import { FornecedoresService } from 'src/app/services/fornecedores.service';
import { cpfValidator, cnpjValidator, isCpf, dateValidator } from 'src/app/utils';
import { Subscription, BehaviorSubject, of } from 'rxjs';
import { MaskApplierService } from 'ngx-mask';
import { filter, switchMap } from 'rxjs/operators';
import { parse, differenceInYears } from 'date-fns';
import { EmpresaSimple } from 'src/app/models/empresas.model';

const companyPrProviderShouldBeAdult = (companies: EmpresaSimple[]): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.parent) return null;

    const empresaId = Number(control.parent.get('empresaId').value);
    const company = companies.find(item => item.id === empresaId);
    if (!company) return null;

    const birthday = parse(control.value, 'dd/MM/yyyy', new Date());

    if (company.uf === 'PR' && differenceInYears(new Date(), birthday) < 18)
      return { shouldBeAdult: true };

    return null;
  };
};

@Component({
  selector: 'app-modal-new-provider',
  templateUrl: './modal-new-provider.component.html',
  styleUrls: ['./modal-new-provider.component.css']
})
export class ModalNewProviderComponent implements OnInit, OnDestroy {
  providerForm: FormGroup;
  isSaving = false;
  companies: EmpresaSimple[] = [];

  cpfCnpjKeyUp$ = new BehaviorSubject<string>('');

  private lastCpfCnpjValue: string;
  private subs: Subscription[] = [];

  constructor(
    public activeModal: NgbActiveModal,
    private fornecedoresService: FornecedoresService,
    private maskService: MaskApplierService) { }

  get empresaId() { return this.providerForm.get('empresaId'); }
  get nome() { return this.providerForm.get('nome'); }
  get cpfCnpj() { return this.providerForm.get('cpfCnpj'); }
  get rg() { return this.providerForm.get('rg'); }
  get dataNascimento() { return this.providerForm.get('dataNascimento'); }
  get telefones() { return this.providerForm.get('telefones') as FormArray; }

  ngOnInit() {
    this.providerForm = new FormGroup({
      empresaId: new FormControl(this.companies.length > 0 ? this.companies[0].id : null, Validators.required),
      nome: new FormControl('', Validators.required),
      cpfCnpj: new FormControl('', [cpfValidator, cnpjValidator(14)]),
      rg: new FormControl('', Validators.required),
      dataNascimento: new FormControl('', [dateValidator, companyPrProviderShouldBeAdult(this.companies)]),
      telefones: new FormArray([new FormControl()])
    });

    this.subs.push(
      this.cpfCnpjKeyUp$
        .pipe(
          switchMap((ev: any) => of(ev.target?.value.replace(/\.|-|\//g, ''))),
          filter((value: string) => value !== this.lastCpfCnpjValue)
        ).subscribe((value: string) => {
          const mask = value.length > 11 ? '00.000.000/0000-00' : '000.000.000-00';
          this.lastCpfCnpjValue = this.maskService.applyMask(value, mask);
          this.cpfCnpj.setValue(this.lastCpfCnpjValue);
        })
    );
  }

  ngOnDestroy() {
    for (const sub of this.subs)
      sub.unsubscribe();
  }

  isPessoaFisica() {
    return isCpf(this.cpfCnpj.value);
  }

  isFormValid() {
    if (this.isPessoaFisica())
      return this.providerForm.valid;

    return this.empresaId.valid && this.nome.valid && this.cpfCnpj.valid;
  }

  save() {
    this.isSaving = true;

    const value = this.providerForm.value;
    // Ignore empty telefones
    value.telefones = value.telefones.filter(item => item);

    this.fornecedoresService.save(this.providerForm.value).subscribe(() => {
      this.isSaving = false;
      this.activeModal.close('refresh');
    });
  }

  addTelefone() {
    this.telefones.push(new FormControl());
  }
  removeTelefone(i: number) {
    this.telefones.removeAt(i);
  }
}
