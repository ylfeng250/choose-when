## choose-when

`choose-when` 是一个轻量级的 `React` 组件包，用于在 `React` 应用程序中实现条件渲染， 替代三元表达式的嵌套。通过简单的 `Choose`, `When`, 和 `Otherwise` 组件，可以方便地根据不同的条件来渲染对应的内容，主要是为了提升代码可读性和可维护性。

减少项目中这类代码的出现：

```jsx
{condition1 ? (
  <div>Condition 1</div>
) : condition2 ? (
  <div>Condition 2</div>
) : condition3 ? (
  <div>Condition 3</div>
) : (
  <div>Else</div>
)}
```

通过`choose-when`提供的组件可转换为简洁的`jsx`代码:

```jsx
<Choose>
  <When condition={condition1}>
    <div>Condition 1</div>
  </When>
  <When condition={condition2}>
    <div>Condition 2</div>
  </When>
  <When condition={condition3}>
    <div>Condition 3</div>
  </When>
  <Otherwise>
    <div>Else</div>
  </Otherwise>
</Choose>
```


## 安装

通过npm或yarn进行安装：

```bash
npm install choose-when
```
或者

```bash
yarn add choose-when
```

## 使用

### `Choose` 组件

`Choose` 组件用于嵌套 `When` 和 `Otherwise` 组件，提供一个简洁的条件渲染方式。优先渲染第一个条件为`true` 的 `When` 组件，如果所有的 `When` 条件都不满足，则渲染 `Otherwise` 组件中的内容。

可以理解为是`switch/case/default` 的`jsx`语法糖。

```jsx
import { Choose, When, Otherwise } from 'choose-when';

function Example1() {
  return (
    <Choose>
      <When condition={true}><div>显示内容</div></When>
      <Otherwise><div>所有条件不满足的时候展示</div></Otherwise>
    </Choose>
  );
}

```

如果不使用组件，写法

```jsx
function Example2({condition}) {
  return condition ? <div>显示内容</div> : <div>所有条件不满足的时候展示</div>;
}

function Example3({condition}) {
  switch (condition) {
    case true:
      return <div>显示内容</div>;
    default:
      return <div>所有条件不满足的时候展示</div>;
  }
}
```

### `When` 组件

`When` 组件用于定义条件渲染内容。通过 `condition` 属性判断是否显示其子组件。如果单独使用`When`组件，则在 `condition` 为 `false` 且提供了 `fallback` 的时候，渲染 fallback 的内容。

```jsx
import { When } from 'choose-when';

function Example4() {
 return <div>
  <When condition={true}>显示的内容</When>
  <When condition={false}>不会显示的内容</When>
  <When condition={false} fallback={<div>这是兜底内容</div>}>不会显示的内容</When>
 </div>
}

```

如果不使用`When`组件，条件表单式写法
```jsx
const condition = true;
return condition ? <div>显示的内容</div> : <div>不会显示的内容</div>;
return !condition && <div>不会显示的内容</div>;
return !condition && <div>这是兜底内容</div>;
```

### `Otherwise` 组件

`Otherwise` 组件是嵌套在`Choose`组件中使用，用于在所有 `When` 条件都不满足的情况下渲染。无法单独使用必须嵌套在 `Choose` 组件中。

```jsx
import { Choose, When, Otherwise } from 'choose-when';

function Example1() {
  return (
    <Choose>
      <When condition={true}><div>显示内容</div></When>
      <Otherwise><div>所有条件不满足的时候展示</div></Otherwise>
    </Choose>
  );
}
```

## Demo

```jsx
import React from 'react';
import { Choose, When, Otherwise } from 'choose-when';

function App() {
  const isLoggedIn = false;

  return (
    <Choose>
      <When condition={isLoggedIn}>
        <h1>欢迎回来!</h1>
      </When>
      <Otherwise>
        <h1>请先登录</h1>
      </Otherwise>
    </Choose>
  );
}

export default App;
```

## React 中常见的条件渲染

### 1. 三元运算符

```jsx
{condition ? <ComponentA /> : <ComponentB />}
```

### 2. 短路运算符

```jsx
{condition && <ComponentA />}
```

### 3. if 判断

```jsx
function MyComponent() {
  if (condition) {
    return <ComponentA />;
  }
  return <ComponentB />;
}
```
