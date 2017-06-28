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
    let currentNode = list;
    let count = 0;

    while(currentNode.next && count < index) {
      currentNode = currentNode.next;
      count++;
    }
    if(currentNode.next === null && count < index){
      return false;
    }

    return currentNode;
  }


  function remove(index){
    let currentNode = list;
    let count = 0;
    let previousNode = currentNode;

    if(index === 0){
      list = currentNode.next;
    }

    while(currentNode.next && count < index){
      previousNode = currentNode;
      currentNode = currentNode.next;
      count++;
    }

    previousNode.next = currentNode.next;

    if(currentNode.next === null && count < index){
      return false;
    }

  }

  function insert(value, index){

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

