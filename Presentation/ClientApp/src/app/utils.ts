import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { isValid } from 'date-fns/esm';
import { parse } from 'date-fns';

export const isCpf = (value: string) => value.match(/\d{3}\.\d{3}\.\d{3}-\d{2}/) != null;
export const isCnpj = (value: string) => value.match(/\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}/) != null;

export const cnpjValidator = (sizeTrigger = 0): ValidatorFn =>
  (control: AbstractControl): ValidationErrors | null =>
    control.value.length > sizeTrigger && !isCnpj(control.value) ? { cnpjInvalid: true } : null;

export const cpfValidator = (control: AbstractControl): ValidationErrors | null => {
  return control.value.length <= 14 && !isCpf(control.value) ?
    { cpfInvalid: true } : null;
};

export const dateValidator = (control: AbstractControl): ValidationErrors | null => {
  return isValid(parse(control.value, 'dd/MM/yyyy', new Date())) ? null : { dateInvalid: true };
};
