#HsDatepicker导航栏组件
该组件是基于element-ui的datepicker进行二次封装的自有组件

###Default
展示默认`hs-datepicker`，根据`dateType`来决定使用哪一种`HsDatepicker`本次封装主要是调整了shortcuts的样式。

<slot name="defalutDemo"></slot>

###hs-date-picker基础配置
`hs-date-picker`已经参考已有业务需求，默认配置了一些属性了，具体如下
```
type="datetimerange"
range-separator="至"
start-placeholder="开始日期"
end-placeholder="结束日期"
placeholder="请选择日期"
style="width: 330px"
default-time=["00:00:00", "23:59:59"]
value-format="yyyy-MM-dd HH:mm:ss"
picker-options={
                  shortcuts: [
                    {
                      text: "上一周",
                      onClick(picker: { $emit: (arg0: string, arg1: Date[]) => void }) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                        picker.$emit("pick", [start, end]);
                      },
                    },
                    {
                      text: "最近一个月",
                      onClick(picker: { $emit: (arg0: string, arg1: Date[]) => void }) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                        picker.$emit("pick", [start, end]);
                      },
                    },
                    {
                      text: "最近三个月",
                      onClick(picker: { $emit: (arg0: string, arg1: Date[]) => void }) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                        picker.$emit("pick", [start, end]);
                      },
                    },
                  ],
                  disabledDate: null,
                  firstDayOfWeek: 7,
                  cellClassName: null,
                  onPick: null,
                }
```
###@change事件
可以通过`@change`获取当前的选择的日期
```
<hs-date-picker
  @change="daterangeHandle"
></hs-date-picker>
methods: {
  daterangeHandle: function (dateVal: string, id: string) {
    // doing someing
  }
}
```
<slot name="demo1"></slot>

<slot name="table"></slot>