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
    if (list === null) {
      return list;
    }
  }

  function add(value){

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