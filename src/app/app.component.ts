import {Component, OnInit} from '@angular/core';
import {until} from "selenium-webdriver";
import titleContains = until.titleContains;
import {isNumber} from "util";
import {Hero} from "./hero/hero-detail.component";
import {HEROES} from "./hero/mock-heroes";
import {HeroService} from "./hero/hero.service";

@Component({
  selector: 'app-root',//选择器，在最终的html页面上加载该标签
  templateUrl: './app.component.html',//第一种：L引用外部html文件
  /*template:'<h1>第二种写法，直接把页面写在这里</h1>'*/
  styleUrls: ['./app.component.css'],//导入css文件
  providers: [HeroService]//注册service提供商
})
export class AppComponent implements OnInit{
  title="Tour of Hreos";
  hero="WindStorm";
  why:string;
  values="";
  click1(){
    this.why="点击显示成功";
  }
  /*输入什么数，显示什么数*/
  onKey(event:any){
    this.values = event.target.value;
  }
  /*创建对象hero*/
  hero1 : Hero = {
    id: 1,
    name: 'Windstorm'
  };
  selectedHero: Hero;
  heroes: Hero[];
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  constructor(private heroService: HeroService) { }/*服务需要再创建对象的时候，创建*/

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);/*使用承诺*/
  }
  ngOnInit(): void {/*生命周期钩子，只是为了不让构造函数包含太多的业务逻辑！！*/
    this.getHeroes();
  }
}
