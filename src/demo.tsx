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
