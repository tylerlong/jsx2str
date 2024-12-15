# jsx2str

Convert JSX to string. It does NOT depend on React.
You may use it to replace template engines like Handlebars.js, EJS, Pug, Mustache.js, Nunjucks, Eta, Lit, Twig.js, Marko, Dust.js ... etc.

## Install

```
yarn add jsx2str
```

## Usage

index.tsx:

```tsx
/** @jsx jsx */
import { jsx } from "jsx2str";

const name = "Tyler Liu";
const r = (
  <div>
    Hello, <span color="red">{name}</span>
  </div>
);
console.log(r);
```

Compile and run your code:

```
tsc index.tsx --jsx react
node index.js
```

Output:

```html
<div>Hello, <span color="red">Tyler Liu</span></div>
```

Or you may run it directly using [tsx](https://www.npmjs.com/package/tsx):

```
yarn tsx index.tsx
```

## jsxFrag

`jsxFrag` allows you to use `<></>`.

```tsx
/** @jsx jsx */
/** @jsxFrag jsxFrag */
import { jsx, jsxFrag } from "jsx2str";

const name = "Tyler Liu";
const r = (
  <>
    Hello, <span color="red">{name}</span>
  </>
);
console.log(r);
```

Output:

```
Hello, <span color="red">Tyler Liu</span>
```

## format

You may format output:

```tsx
/** @jsx jsx */
import { jsx, options } from "./index";

options.formatOutput = true;

const name = "Tyler Liu";
const r = (
  <div>
    Hello, <span color="red">{name}</span>
  </div>
);
console.log(r);
```

Output:

```
<div>
  Hello,
  <span color="red">
    Tyler Liu
  </span>
</div>
```

## bun

If you use bun, you will need to create a `tsconfig.json` file with content:

```json
{
  "compilerOptions": {
    "jsx": "react"
  }
}
```

Ref:

- https://github.com/oven-sh/bun/issues/15759
- https://github.com/tylerlong/bun-jsx-without-react-demo

## Known issues

It seems that TypeScript cannot infer `JSX`'s return type is string.

You will need to manually convert `any` to `string`:

```tsx
const r = (<div></div>) as string;
```
