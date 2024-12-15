export const options = {
  formatOutput: false, // Toggle for formatted output
};

const camelCaseKeys = new Set([
  "viewBox",
  "markerWidth",
  "markerHeight",
  "refX",
  "refY",
]);
function toKebabCase(key: string): string {
  if (camelCaseKeys.has(key)) return key; // Skip kebab-casing for specific keys
  return key.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
}

export function jsx(
  tag: string | ((props: any) => string),
  props: Record<string, any> = {},
  ...children: any[]
): string {
  const indent = (str: string, level: number): string => {
    if (!options.formatOutput) return str; // Skip indentation if formatting is disabled
    const spaces = "  ".repeat(level); // Adjust the number of spaces per indent
    return str
      .split("\n")
      .map((line) => spaces + line)
      .join("\n");
  };

  function toIndentedString(
    tag: string | ((props: any) => string),
    props: Record<string, any>,
    children: any[],
    level: number
  ): string {
    if (typeof tag === "function") {
      return tag({ ...props, children });
    }

    const propsString = Object.entries(props ?? {})
      .map(([key, value]) => {
        key = toKebabCase(key);
        if (value === undefined) {
          return ""; // Remove attribute if the value is undefined
        }
        return `${key}="${String(value).replace(/"/g, "&quot;")}"`;
      })
      .filter(Boolean) // Remove empty attributes
      .join(" ");

    const childrenString = children
      .flat()
      .map((child) =>
        typeof child === "string" ? indent(child, level + 1) : child
      )
      .join(options.formatOutput ? "\n" : "");

    const startTag = `<${tag}${propsString ? ` ${propsString}` : ""}>`;
    const endTag = `</${tag}>`;

    if (childrenString.trim()) {
      return options.formatOutput
        ? `${startTag}\n${childrenString}\n${indent(endTag, level)}`
        : `${startTag}${childrenString}${endTag}`;
    }
    return `${startTag}${endTag}`; // Single-line for empty tags
  }

  return toIndentedString(tag, props, children, 0);
}

export function jsxFrag(...children: any[]): string {
  return children.map((c) => c.children.join("\n")).join("");
}
