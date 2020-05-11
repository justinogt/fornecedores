import { Component, OnInit } from '@angular/core';
import { EmpresasService } from 'src/app/services/empresas.service';
import { Observable, of } from 'rxjs';
import { Column } from 'src/app/shared/table/table.component';
import { filter, switchMap } from 'rxjs/operators';
import { STATUS } from 'src/app/models/response.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalNewCompanyComponent } from '../modal-new-company/modal-new-company.component';
import { EmpresaSimple } from 'src/app/models/empresas.model';

@Component({
  selector: 'app-page-empresas',
  templateUrl: './page-empresas.component.html',
  styleUrls: ['./page-empresas.component.css']
})
export class PageEmpresasComponent implements OnInit {

  columns$: Observable<Column<EmpresaSimple>[]>;
  companies$: Observable<EmpresaSimple[]>;

  constructor(
    private empresasService: EmpresasService,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.columns$ = of<Column<EmpresaSimple>[]>([
      { header: 'Nome Fantasia', field: 'nomeFantasia' },
      { header: 'CNPJ', field: 'cnpj' },
      { header: 'UF', field: 'uf' }
    ]);

    this.refreshCompanies();
  }

  newCompany() {
    this.modalService.open(ModalNewCompanyComponent, { size: 'lg' }).result
      .then(result => result === 'refresh' && this.refreshCompanies())
      .catch(() => {});
  }

  refreshCompanies() {
    this.companies$ = this.empresasService.getAll()
      .pipe(
        filter(response => response.status === STATUS.SUCCESS),
        switchMap(response => of(response.data.empresas))
      );
  }
}
