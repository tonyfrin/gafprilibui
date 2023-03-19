export const addClass = (element: string, className: string): void => {
  const input = document.getElementById(element);

  if (input && input.classList && !input.classList.contains(className)) {
    input.classList.add(className);
  }
};

export const removeClass = (element: string, className: string): void => {
  const input = document.getElementById(element);

  if (input && input.classList && input.classList.contains(className)) {
    input.classList.remove(className);
  }
};

export const validationSelect = (
  value: string,
  componentId: string,
  className: string
): boolean => {
  if (value === '') {
    addClass(componentId, className);
    return false;
  } else {
    removeClass(componentId, className);
    return true;
  }
};
