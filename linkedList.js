/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){

  var list = {
    value: null,
    next: null,
  };

  function getHead(){
    return list.value;
  }

  function getTail(){
    let currentNode = list;
    while (currentNode.next  !== null){
        // traverse the list
        // set curNode to the next node, if it exists
        currentNode = curNode.next;
    }

    return currentNode.value;

  }

  function add(){

  }

  function get(){

  }

  function remove(){

  }

  function insert(){

  }

    return {
    getHead: getHead,
    getTail: getTail,
    add: add,
    get: get,
    remove: remove,
    insert: insert,
  };

}


/*console.log(linkedListGenerator.getHead());
console.log(linkedListGenerator.getHead());
console.log(linkedListGenerator.getHead());
console.log(linkedListGenerator.getHead());
console.log(linkedListGenerator.getHead());
console.log(linkedListGenerator.getHead());*/