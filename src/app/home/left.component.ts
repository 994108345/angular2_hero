import { Component } from '@angular/core';

@Component({
  selector: 'left-root',//选择器，在最终的html页面上加载该标签
  templateUrl: './left.component.html',//第一种：L引用外部html文件
  /*template:'<h1>第二种写法，直接把页面写在这里</h1>'*/
  styleUrls: ['./left.component.css']//导入css文件
})
export class LeftComponent {
  title = 'app';
}
