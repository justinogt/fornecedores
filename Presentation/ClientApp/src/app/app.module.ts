import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { EmpresasService } from './services/empresas.service';
import { FornecedoresService } from './services/fornecedores.service';

import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PageEmpresasComponent } from './pages/empresas/page-empresas/page-empresas.component';
import { PageFornecedoresComponent } from './pages/fornecedores/page-fornecedores/page-fornecedores.component';
import { ModalNewCompanyComponent } from './pages/empresas/modal-new-company/modal-new-company.component';


@NgModule({
  declarations: [
    AppComponent,
    PageEmpresasComponent,
    PageFornecedoresComponent,
    ModalNewCompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SharedModule
  ],
  providers: [EmpresasService, FornecedoresService],
  bootstrap: [AppComponent],
  entryComponents: [ModalNewCompanyComponent]
})
export class AppModule { }
