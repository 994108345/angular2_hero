import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SuccessComponent} from "./base/success.component";
import {ErrorComponent} from "./base/error.component";
import {LeftComponent} from "./home/left.component";
import {TopComponent} from "./home/top.component";
import {IndexComponent} from "./home/index.component";
const appRoutes: Routes = [
  { path: 'app/success',
    component: SuccessComponent },
  { path: 'app/error',
    component: ErrorComponent },
  { path: 'app/left',
    component: LeftComponent },
  { path: 'app/top',
    component: TopComponent },
  { path: 'app/index',
    component: IndexComponent },
  /*{
    path: 'heroes',
    component: HeroListComponent,
    data: {
      title: 'Heroes List'
    }
  },
  { path: '', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent }*///当浏览器找不到我们的路劲的时候，就会匹配这个路劲，一般用在显示404
];
export const appRoutingProviders: any[] = [
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
