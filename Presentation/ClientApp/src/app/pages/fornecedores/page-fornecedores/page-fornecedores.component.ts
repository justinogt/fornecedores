import { Component, OnInit } from '@angular/core';
import { FornecedoresService } from '../../../services/fornecedores.service';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { switchMap, filter, tap } from 'rxjs/operators';
import { STATUS } from 'src/app/models/response.model';
import { Column, FilterData, formatField, filterTable } from 'src/app/shared/table/table.component';
import { formatColumnBold, formatColumnDate } from 'src/app/shared/table/basic-formaters';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalNewProviderComponent } from '../modal-new-provider/modal-new-provider.component';
import { FornecedorListItem } from 'src/app/models/fornecedores.model';
import { EmpresaSimple } from 'src/app/models/empresas.model';

@Component({
  selector: 'app-page-fornecedores',
  templateUrl: './page-fornecedores.component.html',
  styleUrls: ['./page-fornecedores.component.css']
})
export class PageFornecedoresComponent implements OnInit {

  columns$: Observable<Column<FornecedorListItem>[]>;
  providers$ = new BehaviorSubject<FornecedorListItem[]>([]);

  companies: EmpresaSimple[] = [];

  private rawColumns: Column<FornecedorListItem>[] = [];
  private rawProviders: FornecedorListItem[] = [];

  constructor(
    private fornecedoresService: FornecedoresService,
    private modalService: NgbModal) { }

  async ngOnInit() {
    this.rawColumns = [
      { header: '#', field: 'id', format: formatColumnBold },
      { header: 'Cadastrado Em', field: 'criadoEm', format: formatColumnDate },
      { header: 'Nome', field: 'nome' },
      { header: 'CPF ou CNPJ', field: 'cpfCnpj' },
      { header: 'Empresa', field: 'empresa' }
    ];
    this.columns$ = of<Column<FornecedorListItem>[]>(this.rawColumns);

    await this.refreshProviders();
    this.rawProviders = this.providers$.value;
  }

  newProvider() {
    const ref = this.modalService.open(ModalNewProviderComponent, { size: 'lg' });
    (ref.componentInstance as ModalNewProviderComponent).companies = this.companies;

    ref.result
      .then(result => result === 'refresh' && this.refreshProviders())
      .catch(() => {});
  }

  async filter(filterData: FilterData<FornecedorListItem>) {
    const data = filterTable(filterData, this.rawColumns, this.rawProviders, this.providers$.value);
    if (this.providers$.value.length !== data.length)
      this.providers$.next(data);
  }

  refreshProviders() {
    return this.fornecedoresService.getAll().pipe(
      filter(res => res.status === STATUS.SUCCESS),
      tap(res => this.providers$.next(res.data.fornecedores))
    ).toPromise();
  }
}
