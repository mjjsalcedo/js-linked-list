/*jshint esversion: 6 */


/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){

  let list = {
    value: null,
    next: null,
  }

  function getHead(){
    return list.value;
  }

  function getTail(){
    let currentNode = list;

    while(currentNode.next !== null){

      currentNode = currentNode.next;
    }
    return currentNode.value;

  }

  function add(value){
    let newNode =
    { value: value,
      next: null };

    let currentNode = list;

    while(currentNode.next !== null){
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
    return newNode;
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