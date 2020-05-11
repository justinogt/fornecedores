import { Component, OnInit } from '@angular/core';
import { FornecedoresService } from '../../../services/fornecedores.service';
import { Observable, of } from 'rxjs';
import { switchMap, filter } from 'rxjs/operators';
import { STATUS } from 'src/app/models/response.model';
import { Column } from 'src/app/shared/table/table.component';
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
  providers$: Observable<FornecedorListItem[]>;

  companies: EmpresaSimple[] = [];

  constructor(
    private fornecedoresService: FornecedoresService,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.columns$ = of<Column<FornecedorListItem>[]>([
      { header: '#', field: 'id', format: formatColumnBold },
      { header: 'Cadastrado Em', field: 'criadoEm', format: formatColumnDate },
      { header: 'Nome', field: 'nome' },
      { header: 'CPF ou CNPJ', field: 'cpfCnpj' },
      { header: 'Empresa', field: 'empresa' }
    ]);

    this.refreshProviders();
  }

  newProvider() {
    const ref = this.modalService.open(ModalNewProviderComponent, { size: 'lg' });
    (ref.componentInstance as ModalNewProviderComponent).companies = this.companies;

    ref.result
      .then(result => result === 'refresh' && this.refreshProviders())
      .catch(() => {});
  }

  refreshProviders() {
    this.providers$ = this.fornecedoresService.getAll()
      .pipe(
        filter(response => response.status === STATUS.SUCCESS),
        switchMap(response => {
          this.companies = response.data.empresas;
          return of(response.data.fornecedores);
        })
      );
  }
}
