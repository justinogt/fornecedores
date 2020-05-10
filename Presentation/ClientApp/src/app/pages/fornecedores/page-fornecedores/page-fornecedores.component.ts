import { Component, OnInit } from '@angular/core';
import { FornecedorListDto, EmpresaListDto } from '../../../models/fornecedores.model';
import { FornecedoresService } from '../../../services/fornecedores.service';
import { Observable, of } from 'rxjs';
import { switchMap, filter } from 'rxjs/operators';
import { STATUS } from 'src/app/models/response.model';
import { Column } from 'src/app/shared/table/table.component';
import { formatColumnBold, formatColumnDate } from 'src/app/shared/table/basic-formaters';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalNewProviderComponent } from '../modal-new-provider/modal-new-provider.component';

@Component({
  selector: 'app-page-fornecedores',
  templateUrl: './page-fornecedores.component.html',
  styleUrls: ['./page-fornecedores.component.css']
})
export class PageFornecedoresComponent implements OnInit {

  columns$: Observable<Column<FornecedorListDto>[]>;
  providers$: Observable<FornecedorListDto[]>;

  companies: EmpresaListDto[] = [];

  constructor(
    private fornecedoresService: FornecedoresService,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.columns$ = of<Column<FornecedorListDto>[]>([
      { header: '#', field: 'id', format: formatColumnBold },
      { header: 'Cadastrado Em', field: 'cadastradoEm', format: formatColumnDate },
      { header: 'Nome', field: 'nome' },
      { header: 'CPF ou CNPJ', field: 'cpfCnpj' },
      { header: 'Empresa', field: 'empresa' }
    ]);

    this.refreshProviders();
  }

  newProvider() {
    const ref = this.modalService.open(ModalNewProviderComponent, { size: 'lg' });
    (ref.componentInstance as ModalNewProviderComponent).companies = this.companies;
    ref.result.then(() => this.refreshProviders());
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
