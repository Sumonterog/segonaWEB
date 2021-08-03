import { EditarPerfilComponent } from './components/esp/esperfilus/editar-perfil/editar-perfil.component';
import { EsperfilusComponent } from './components/esp/esperfilus/esperfilus.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/esp/index/index.component';
import { SobrehealthworldComponent } from './components/esp/sobrehealthworld/sobrehealthworld.component';
import { ContactarComponent } from './components/esp/contactar/contactar.component';
import { EsheaderComponent } from './components/esp/esheader/esheader.component';
import { FooterComponent } from './components/footer/footer.component';
import { EsloginComponent } from './components/esp/eslogin/eslogin.component';







const routes: Routes = [{path: '', pathMatch: 'full', redirectTo: 'index'},
{ path: 'index', component: IndexComponent},
{ path: 'contactar', component: ContactarComponent},
{ path: 'esheader', component: EsheaderComponent},
{ path: 'sobrehealthworld', component: SobrehealthworldComponent},
{ path: 'footer', component: FooterComponent},
{ path: 'eslogin', component: EsloginComponent},
{ path: 'esperfilus', component: EsperfilusComponent},
{ path: 'editarPerfil', component: EditarPerfilComponent},
{ path: '**', redirectTo: 'index'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
