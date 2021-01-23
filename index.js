const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const new_collection = Array.isArray(collection) ? collection : Object.values(collection)
      new_collection.forEach(n => callback(n))
      return collection
    },

    map: function(collection, callback) {
      const new_collection = Array.isArray(collection) ? collection : Object.values(collection)
      return new_collection.map(n => callback(n))
    },

    reduce: function(collection, callback, acc = 0) {
      if (!acc) {
        acc = collection[0]
        collection = collection.slice(1)
      } 
      return collection.reduce((total, ele) => callback(total, ele), acc)
    },

    find: function(collection, predicate) {
      return collection.find(n => predicate(n))
    },

    filter: function(collection, predicate) {
      return collection.filter(n => predicate(n))
    },

    size: function(collection) {
      return Object.values(collection).length;
    },

    first: function(array, n = 1) {
      return n == 1 ? array[0] : array.slice(0, n)
    },

    last: function(array, n = 1) {
      let k = array.length - n
      return n === 1 ? array[array.length-1] : array.splice(k, n)
    },

    compact: function(array) {
      return array.filter(ele => !!ele === true)
    },

    sortBy: function(array, callback) {
      let arr = []
      array.map(n => arr.push(callback(n)))
      console.log(arr)
    },

    flatten: function(array, arg) {
      return arg === true ? array.flat(1) : array.flat(Infinity)
    },

    uniq: function(array, isSorted, callback) {
      let arr = []
      if (isSorted) {
        array.forEach(e => {
          if (!arr.includes(e)) {
            arr.push(e)
          }
        })
      } else {
        arr.push(array[0])
        for (let i = 0; i < array.length; i++) {
          if (array[i] != array[i-1]) {
            arr.push(array[i])
          }
        }
      }
      return arr
    }



  }
})()

 const unsortedIntArr = [3, 8, 5, 1, 9, 11, 8]

 function sortArrFunction(val) { return val }

 console.log(fi.sortBy(unsortedIntArr, sortArrFunction).sort())
// console.log(fi.last([1,2,3,4], 3))
// console.log(fi.compact([0, 1, false, 2, '', 3]))



console.log(unsortedIntArr.map(n => n + 1))
