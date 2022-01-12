#### 一、命名规范
##### 标签名称使用小写字母，且不同单词用中划线隔开如： `hs-table`
#### 二、代码风格定义
##### 每个层级依次缩进2个空格如：
```
<div class="container">
..<header>
....<div class="title">我是标题区</div>
..</header>
..<section>
....<div class="section">
......<span>我是内容区</span>
......<div>
........<span>我是子内容区</span>
......</div>
....</div>
..</section>
..<footer>
....<div class="footer">我是底部区</div>
..</footer>
<div class="container">
```
##### 若组件标签需要使用多个（5个以上）时候，可换行,切prop在前，事件在后：
```
<div class="container">
..<header>
....<div class="title">我是标题区</div>
..</header>
..<section>
....<div class="section">
......<span>我是内容区</span>
......<div>
........<hs-table
........:id="id"
........:name="name"
........@click="click"
........@dbclick="dbclick"
........>
........</hs-table>
......</div>
....</div>
..</section>
..<footer>
....<div class="footer">我是底部区</div>
..</footer>
<div class="container">
```
#### 三、代码模块化
##### 编码前，应当做根据业务，层级，将代码进行分模块开发，普通界面使用`hs-frame`组件进行分模块开发,[布局](#/rule/contain/index)
```
<hs-frame @on-query="onQuery" @on-reset="onReset" :more="!1">
  <template slot="query">
    <el-form ref="form" :model="form" label-width="98px" :inline="true">
      <el-form-item label="所属中心代码">
        <hs-input size="mini" v-model="form.centerCode" placeholder="请输入所属中心代码" ></hs-input>
      </el-form-item>
      <el-form-item label="所属中心名称">
        <hs-input size="mini" v-model="form.centerName" placeholder="请输入所属中心名称" ></hs-input>
      </el-form-item>
      <el-form-item label="所属中心状态">
        <dict-select :isInit="!0" :val.sync="form.status" constant-group-name="status"></dict-select>
      </el-form-item>
      <el-form-item label="业务类型">
        <dict-select :val.sync="form.businessId" constant-group-name="businessType"></dict-select>
      </el-form-item>
    </el-form>
  </template>
  <template>
    <simple-table
    :columnable="!1"
    :index="!0"
    :isCheckbox="!1"
    :data="tableData"
    :columns="columns"
    :loading="loading"
    :pagination.sync="pagination"
    :dicts="['schoolState']"
    @query="onQuery">
      <template slot="operator" slot-scope="{ scope }">
        <hs-button
          @click.native.prevent="showDetail(scope.row)"
          type="text"
          size="small">
          详情
        </hs-button>
      </template>
    </simple-table>
  </template>
  <detail-dialog title="详情" :data="detailData" :visible.sync="visible"  :dicts="['status', 'business']"></detail-dialog>
</hs-frame>
```