// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, element) {
  // document.body, element.childNodes, and element.classList
  var currentElement = element || document.body;
  var matchingElements = [];

  // if current element has matching className
  if (currentElement.classList.contains(className)) {
    // push className into matching elements
    matchingElements.push(currentElement);
  }

  // if current element does not have child nodes
  if (currentElement.childNodes.length === 0) {
    // then return matching elements array
    return matchingElements;
  }

  // if current element has child nodes
  if (currentElement.childNodes) {
    // iterate child nodes by passing each child node through the recursive function
    for (var i = 0; i < currentElement.children.length; i++) {
      var child = currentElement.children[i]
      matchingElements = matchingElements.concat(getElementsByClassName(className, child));
    }
  }

  return matchingElements;
};
