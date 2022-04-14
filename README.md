# libs

常用内容的封装

## 项目介绍

1. 项目采用`pnpm`进行安装，支持`js`以及`ts`两个版本的使用和更改
2. 项目中的所有封装模块或者自定义内容全部来自可使用的项目
3. 代码复制后只需安装对应依赖或者更新依赖即可

## 主要模块

### Axios请求封装

> 路径 `/client`

#### 主要特点

1. 采用`class`写法避免重复生成实例和低利用率
2. 使用`query-string`进行`get`请求参数转化和处理
3. 支持用`cancelToken`进行请求处理
4. 支持对于各个不同的请求进行拦截和自定义
5. 支持`js`和`ts`两个版本


### Storage封装

> 路径 `/storage`

#### 主要特点

1. 采用`class`写法避免重复生成实例和低利用率
2. 支持使用前缀
3. 支持`sessionStorage`和`localStorage`
