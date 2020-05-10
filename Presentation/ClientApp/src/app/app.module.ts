import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { EmpresasService } from './services/empresas.service';
import { FornecedoresService } from './services/fornecedores.service';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { PageEmpresasComponent } from './pages/empresas/page-empresas/page-empresas.component';
import { PageFornecedoresComponent } from './pages/fornecedores/page-fornecedores/page-fornecedores.component';
import { ModalNewCompanyComponent } from './pages/empresas/modal-new-company/modal-new-company.component';

@NgModule({
  declarations: [
    AppComponent,
    PageEmpresasComponent,
    PageFornecedoresComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    SharedModule,
    RouterModule.forRoot([
      { path: 'empresas', component: PageEmpresasComponent },
      { path: 'fornecedores', component: PageFornecedoresComponent },
      { path: '', pathMatch: 'full', redirectTo: 'empresas' }
    ])
  ],
  providers: [EmpresasService, FornecedoresService],
  bootstrap: [AppComponent],
  entryComponents: [ModalNewCompanyComponent]
})
export class AppModule { }
