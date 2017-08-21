import { BrowserModule } from '@angular/platform-browser';//每个angular库的名字都带有@angular前缀
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ErrorComponent} from "./base/error.component";
import {SuccessComponent} from "./base/success.component";
import {appRoutingProviders, routing} from "./app.routing";
import {TopComponent} from "./home/top.component";
import {LeftComponent} from "./home/left.component";
import {IndexComponent} from "./home/index.component";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {HeroDetailComponent} from "./hero/hero-detail.component";
import {HeroesComponent} from "./hero/heroes.component";
import {HeroService} from "./hero/hero.service";

@NgModule({
  declarations: [             //装饰器
    AppComponent,
    ErrorComponent,
    SuccessComponent,
    TopComponent,
    LeftComponent,
    HeroDetailComponent,
    HeroesComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,//浏览器模块
    routing,
    FormsModule,
    HttpModule
  ],
  providers: [
    appRoutingProviders,
    HeroService
  ],              //提供者
  bootstrap: [AppComponent]   //引导器！只有根模块才能设置bootstrap
})
export class AppModule {
  /*根模块不需要导出任何东西，因为其它组件不需要导入根模块*/
}
