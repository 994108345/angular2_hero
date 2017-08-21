import { Component } from '@angular/core';

@Component({
  selector: 'top-root',//选择器，在最终的html页面上加载该标签
  templateUrl: './top.component.html',//第一种：L引用外部html文件
  /*template:'<h1>第二种写法，直接把页面写在这里</h1>'*/
  styleUrls: ['./top.component.css']//导入css文件
})
export class TopComponent {
  title = 'app';
}
