export function h(
  tag: string | ((props: any) => string),
  props: Record<string, any> = {},
  ...children: any[]
): string {
  if (typeof tag === "function") {
    return tag({ ...props, children });
  }
  const propsString = Object.entries(props ?? {})
    .map(([key, value]) => {
      if (typeof value === "boolean") {
        return value ? key : ""; // Boolean attributes
      }
      return `${key}="${String(value).replace(/"/g, "&quot;")}"`;
    })
    .filter(Boolean) // Remove empty attributes
    .join(" ");
  const childrenString = children.flat().join("");
  return `<${tag}${
    propsString ? ` ${propsString}` : ""
  }>${childrenString}</${tag}>`;
}

export function jsxFrag(...children: any[]): string {
  return children.flat().join("");
}
