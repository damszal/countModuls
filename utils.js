// get query 
function getQuery(className){
    return document.querySelector(className)
  }
  // get query all
  function getQueryAll(className){
    return document.querySelectorAll(className)
  }
  
  // get element by id
  function getElemId(id){
    return document.getElementById(id)
  }
  
  // change an element style
  function changeStyle(className,styleName,value) {
    getQuery(className).style[styleName] = value
  }
  
  // change an element style all
  function changeStyleAll(className,styleName,value) {
    document.querySelectorAll(className).forEach(el=>el.style[styleName] = value)
  }
  
  // create an element
  function createElement(tagName){
    return document.createElement(tagName);
  }
  
  // create HTML element with class, id, inner text
  function createFullElement(tagName, className,id,innerText){
    let newElement = document.createElement(tagName);
    (className!==undefined || null)
      ?newElement.classList.add(className)
      :null;
    (id!==undefined || null)
      ?newElement.setAttribute('id',id)
      :null;
    (innerText!==undefined || null)
      ?newElement.innerText = innerText
      :null;
    return newElement
  }
  // delete an element
  function delElem(element){
    element.remove()
  }
  
  // toggle class
  function toggleClass(elem,className){
    elem.classList.toggle(className);
  }