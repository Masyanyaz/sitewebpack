export const scroll = Element => {
  event.preventDefault();
  Element = document.getElementById(Element);
  let selectedPosX = 0;
  let selectedPosY = 0;
  while (Element != null) {
    selectedPosX += Element.offsetLeft;
    selectedPosY += Element.offsetTop;
    Element = Element.offsetParent;
  }
  window.scrollTo(selectedPosX, selectedPosY);
}