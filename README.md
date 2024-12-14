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
/** @jsx h */
import { h } from "jsx2str";

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

## notes

bun doesn't support JSX without React: https://github.com/oven-sh/bun/issues/15759, which is not good.
But you can use [tsx](https://www.npmjs.com/package/tsx) with bun: `bun tsx index.tsx`
