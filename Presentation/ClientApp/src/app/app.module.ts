import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EmpresasService } from './services/empresas.service';
import { FornecedoresService } from './services/fornecedores.service';

import { SharedModule } from './shared/shared.module';
import { NgxMaskModule } from 'ngx-mask';
import { LaddaModule } from 'angular2-ladda';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PageEmpresasComponent } from './pages/empresas/page-empresas/page-empresas.component';
import { PageFornecedoresComponent } from './pages/fornecedores/page-fornecedores/page-fornecedores.component';
import { ModalNewCompanyComponent } from './pages/empresas/modal-new-company/modal-new-company.component';
import { ModalNewProviderComponent } from './pages/fornecedores/modal-new-provider/modal-new-provider.component';

@NgModule({
  declarations: [
    AppComponent,
    PageEmpresasComponent,
    PageFornecedoresComponent,
    ModalNewCompanyComponent,
    ModalNewProviderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgxMaskModule.forRoot(),
    LaddaModule.forRoot({
      style: 'zoom-in',
      spinnerSize: 32,
      spinnerColor: 'white',
      spinnerLines: 12
  }),
  ],
  providers: [EmpresasService, FornecedoresService],
  bootstrap: [AppComponent],
  entryComponents: [ModalNewCompanyComponent, ModalNewProviderComponent]
})
export class AppModule { }
