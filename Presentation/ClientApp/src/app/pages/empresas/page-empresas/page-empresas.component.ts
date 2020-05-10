import { Component, OnInit } from '@angular/core';
import { EmpresasService } from 'src/app/services/empresas.service';
import { EmpresaListDto } from '../../../models/empresas.model';

@Component({
  selector: 'app-page-empresas',
  templateUrl: './page-empresas.component.html',
  styleUrls: ['./page-empresas.component.css']
})
export class PageEmpresasComponent implements OnInit {

  companies: EmpresaListDto[] = [];

  constructor(private empresasService: EmpresasService) { }

  ngOnInit() {
    this.empresasService.getAll().subscribe(response => this.companies = response.data.empresas);
  }

}
