import { Component, OnInit } from '@angular/core';
import { EmpresasService } from 'src/app/services/empresas.service';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Column, FilterData, filterTable } from 'src/app/shared/table/table.component';
import { filter, switchMap, tap } from 'rxjs/operators';
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
  companies$ = new BehaviorSubject<EmpresaSimple[]>([]);

  private rawColumns: Column<EmpresaSimple>[] = [];
  private rawCompanies: EmpresaSimple[] = [];

  constructor(
    private empresasService: EmpresasService,
    private modalService: NgbModal) { }

  async ngOnInit() {
    this.rawColumns = [
      { header: 'Nome Fantasia', field: 'nomeFantasia' },
      { header: 'CNPJ', field: 'cnpj' },
      { header: 'UF', field: 'uf' }
    ];
    this.columns$ = of<Column<EmpresaSimple>[]>(this.rawColumns);

    await this.refreshCompanies();
    this.rawCompanies = this.companies$.value;
  }

  newCompany() {
    this.modalService.open(ModalNewCompanyComponent, { size: 'lg' }).result
      .then(result => result === 'refresh' && this.refreshCompanies())
      .catch(() => {});
  }

  async filter(filterData: FilterData<EmpresaSimple>) {
    const data = filterTable(filterData, this.rawColumns, this.rawCompanies, this.companies$.value);
    if (this.companies$.value.length !== data.length)
      this.companies$.next(data);
  }

  refreshCompanies() {
    return this.empresasService.getAll()
      .pipe(
        filter(res => res.status === STATUS.SUCCESS),
        tap(res => this.companies$.next(res.data.empresas))
      ).toPromise();
  }
}
