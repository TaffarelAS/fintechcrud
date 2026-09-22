import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component'; 
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { AjudaComponent } from './pages/ajuda/ajuda.component';

export const routes: Routes = [
    /*teste*/ 
    { path: '',component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'sobre', component: SobreComponent },
    { path: 'clientes', component:  ClientesComponent},
    { path: 'ajuda', component: AjudaComponent }
];
