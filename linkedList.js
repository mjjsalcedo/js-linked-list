/*jshint esversion: 6 */


/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){

  let list = null;

  function getHead(){

    return list;
  }

  function getTail(){
    let currentNode = list;

    while(currentNode !== null && currentNode.next !== null){

      currentNode = currentNode.next;
    }
    return currentNode;

  }

  function add(value){
    let newNode = {
      value : value,
      next : null
    };

    let currentNode = list;

    if( list === null) {
      list = newNode;
      return newNode;
    }


    while(currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;

    return newNode;


  }

  function get(index){
    let findNode = list;
    for(let i = 0; i < index; i++) {
      if(findNode.next === null)
        return false;
      findNode = findNode.next;
    }

    return findNode;
  }

  function remove(index){
    let findNode = list;

    let prevNode = null;

    for(let i = 0; i < index; i++) {
      if(findNode.next === null)
        return false;
      prevNode = findNode;
      findNode = findNode.next;
    }

      prevNode.next = findNode.next;
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

