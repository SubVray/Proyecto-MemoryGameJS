export const div = (attributes, parent) => {
  return createElement("div", attributes, parent);
};
export const button = (attributes, parent) => {
  return createElement("button", attributes, parent);
};
export const p = (attributes, parent) => {
  return createElement("p", attributes, parent);
};

export const createElement = (type, attributes, parent) => {
  let element = document.createElement(type);

  for (const attribute in attributes) {
    element[attribute] = attributes[attribute];
  }
  parent.appendChild(element);
  return element;
};
