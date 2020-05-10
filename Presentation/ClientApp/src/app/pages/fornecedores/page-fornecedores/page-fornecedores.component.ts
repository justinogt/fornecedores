import { Component, OnInit } from '@angular/core';
import { FornecedorListDto } from '../../../models/fornecedores.model';
import { FornecedoresService } from '../../../services/fornecedores.service';
import { Observable, of } from 'rxjs';
import { switchMap, filter } from 'rxjs/operators';
import { STATUS } from 'src/app/models/response.model';
import { Column } from 'src/app/shared/table/table.component';
import { formatColumnBold, formatColumnDate } from 'src/app/shared/table/basic-formaters';

@Component({
  selector: 'app-page-fornecedores',
  templateUrl: './page-fornecedores.component.html',
  styleUrls: ['./page-fornecedores.component.css']
})
export class PageFornecedoresComponent implements OnInit {

  columns$: Observable<Column<FornecedorListDto>[]>;
  providers$: Observable<FornecedorListDto[]>;

  constructor(private fornecedoresService: FornecedoresService) { }

  ngOnInit() {
    this.columns$ = of<Column<FornecedorListDto>[]>([
      { header: '#', field: 'id', format: formatColumnBold },
      { header: 'Cadastrado Em', field: 'cadastradoEm', format: formatColumnDate },
      { header: 'Nome', field: 'nome' },
      { header: 'CPF ou CNPJ', field: 'cpfCnpj' },
      { header: 'Empresa', field: 'empresa' }
    ]);
    this.providers$ = this.fornecedoresService.getAll()
      .pipe(
        filter(response => response.status === STATUS.SUCCESS),
        switchMap(response => of(response.data.fornecedores))
      );
  }
}
