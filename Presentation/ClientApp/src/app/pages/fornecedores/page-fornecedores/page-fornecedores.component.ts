import { Component, OnInit } from '@angular/core';
import { FornecedorListDto } from '../../../models/fornecedores.model';
import { FornecedoresService } from '../../../services/fornecedores.service';

@Component({
  selector: 'app-page-fornecedores',
  templateUrl: './page-fornecedores.component.html',
  styleUrls: ['./page-fornecedores.component.css']
})
export class PageFornecedoresComponent implements OnInit {

  providers: FornecedorListDto[] = [];

  constructor(private fornecedoresService: FornecedoresService) { }

  ngOnInit() {
    this.fornecedoresService.getAll().subscribe(providers => this.providers = providers.data.fornecedores);
  }

}
