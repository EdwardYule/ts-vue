# ts-vue

## 项目结构

``` text
--src
  |--api api接口
  |--assets 需要被打包的静态资源
  |--components 全局组件
  |--plugins 全局插件
  |--router 路由
  |--store 全局状态管理(Vuex)
  |--types 类型声明文件
  |--utils 工具
  |--views 页面
```

## TODOS

1. 国际化
2. 动态侧边栏
3. 动态面包屑
4. 接口防抖节流
5. 接口loading
6. 接口取消
7. 错误页面(401、404)
8. 日期时间工具函数
9. 全局指令
10. 全局枚举
11. 全局过滤器
12. 全局常用mixin
13. 全局样式

## 项目规范

### 杂项

1. 统一使用两个空格的缩进

### 组件

1. 组件文件名以大写开头，除了index.vue
2. 组件名与文件名保持一致
3. 组件根节点的类名要与组件名保持一致，但是改为kebab-case风格
4. computed取名，如果只是对一个变量做简单的代理，可以在该变量前加下划线，如value -> _value
5. 引入的组件变量使用大驼峰，注册到Vue中也使用大驼峰，在模板中也使用大驼峰
6. vue对象的各个属性应该按照一定的顺序：

``` javascript
// 组件本质是一个函数，因此我们关心的是它怎么用，它向外暴露了哪些api，以及当我们修改它时，首先关心它引用了什么，因此原则就是：
// 对于对外的属性，或者引用的内容，都应该尽可能早地展示，也就是将它们放到靠上的位置，对于以下示例中没有提到的内容，也都应该遵循这样的原则
// 以下是一个例子：
import Temp from "./temp";
Vue.extend({
  name: 'Template', // 第一行标明组件名
  components: { Temp }, // 第二行标明用到哪些组件
  mixins: [  ], // 如果用到了mixin，也应该尽早的展示
  render: () => (), // 如果有的话，就把模板放在这里
  // 下面三行表示的是组件所拥有的数据
  props: {  }, // props表示的是组件对外的api，因此第一个展示
  data(){  }, // 需要注册到实例中的数据，才注册进去
  computed: {  }, // computed是依赖于props和data的数据，因此放在他们二者下面
  // 以下表示的是组件的行为
  watch: {  }, // watch观察的是该组件的所有数据，也就是上面三行，所以放在他们三者下面
  beforeCreate(){  }, // 从这里开始，以生命周期的执行顺序为顺序，放置生命周期函数
  activated(){  }, // keep-alive的钩子也应该放在这里
  methods: {  }, // 由于methods一般是代码量最多的一个对象，同时可以通过点击跳转过来看，因此放在最后面，不影响阅读其他部分代码
})
```

### JS/TS

1. 常量名全大写
2. 变量名使用小驼峰风格
3. 私有变量使用下划线前缀，不要使用$前缀
4. 对于公有的工具函数，必须写清楚函数签名，包括函数功能描述、示例、入参、入参类型、出参、出参类型，后期考虑所有的公有工具函数都应该加上单元测试
5. 关于类型转换，在足够了解的前提下，可以使用抽象相等，但不要对0, '', false使用抽象相等，因为它们容易引起误解，如果不够了解，则请只使用严格相等

### 样式

1. 类名使用kebab-case风格

### 路由
