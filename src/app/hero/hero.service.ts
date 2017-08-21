import { Injectable } from '@angular/core';
import {HEROES} from "./mock-heroes";
import {Hero} from "./hero-detail.component";

@Injectable()/*依赖注入*/
export class HeroService {
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);/*使用承诺，只是为了防止异步调用超时带来的问题*/
  }
}
