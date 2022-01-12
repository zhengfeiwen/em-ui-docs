#### 一、命名规范
##### 业务标签类名或者组件类名都用小写加中划线如： `hs-table`, `student-info`，组件内部类名追加下划线形式，如：`hs-table_inner`, `student-info_title`
#### 二、样式类模块化
##### 相同的UI体现应当做样式复用，不同业务UI应做样式隔离,如：
`bad`
```
<div class="student-info">
a.scss
div.student-info{
  width: 200px;
  border: 1px solid #dedede;
  font-size: 12px;
  color: red;
}

<div class="student-info">
b.scss
div.student-info{
  width: 200px;
  border: 1px solid #dedede;
  font-size: 16px;
  color: yellow;
}

<div class="student-info">
c.scss
div.student-info{
  width: 300px !import;
  border: 1px solid #dedede;
  font-size: 14px;
  color: yellow;
}
```
`good`
```
common.scss
div.student-info{
  width: 200px;
  border: 1px solid #dedede;
}

<div class="student-info student-a">
a.scss
div.student-a{
  font-size: 12px;
  color: red;
}

<div class="student-info student-b">
b.scss
div.student-b{
  font-size: 16px;
  color: yellow;
}

<div class="student-info student-c">
c.scss
div.student-c{
  width: 300px;
  font-size: 14px;
  color: yellow;
}

```