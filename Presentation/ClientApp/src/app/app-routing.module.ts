import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageEmpresasComponent } from './pages/empresas/page-empresas/page-empresas.component';
import { PageFornecedoresComponent } from './pages/fornecedores/page-fornecedores/page-fornecedores.component';

const routes: Routes = [
  { path: 'empresas', component: PageEmpresasComponent },
  { path: 'fornecedores', component: PageFornecedoresComponent },
  { path: '', pathMatch: 'full', redirectTo: 'empresas' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
