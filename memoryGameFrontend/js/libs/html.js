export const div = (attributes, parent) => {
  return createElement("div", attributes, parent);
};
export const button = (attributes, parent) => {
  return createElement("button", attributes, parent);
};
export const p = (attributes, parent) => {
  return createElement("p", attributes, parent);
};
export const span = (attributes, parent) => {
  return createElement("span", attributes, parent);
};
export const img = (attributes, parent) => {
  return createElement("img", attributes, parent);
};
export const form = (attributes, parent) => {
  return createElement("form", attributes, parent);
};
export const input = (attributes, parent) => {
  return createElement("input", attributes, parent);
};

export const createElement = (type, attributes, parent) => {
  let element = document.createElement(type);
  for (const attribute in attributes) {
    element[attribute] = attributes[attribute];
  }
  parent.appendChild(element);
  return element;
};
