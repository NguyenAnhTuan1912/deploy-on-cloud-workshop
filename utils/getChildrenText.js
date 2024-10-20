export function getChildrenText(children) {
  if (typeof children === "string") return children;
  return children.props.children;
}
