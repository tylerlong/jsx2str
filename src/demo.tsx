/** @jsx jsx */
/** @jsxFrag jsxFrag */
import { jsx, jsxFrag, options } from "./index";

options.formatOutput = true;

const name = "Tyler Liu";
const r = (
  <>
    <button>1</button>
    <button>2</button>
    <button>3</button>
    <div>
      Hello, <span color="red">{name}</span>
    </div>
  </>
);
console.log(r);
