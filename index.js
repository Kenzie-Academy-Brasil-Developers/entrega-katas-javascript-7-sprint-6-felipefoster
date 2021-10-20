//newForEach, newMap, newFilter, 
const arr = [55, 121, 33, 444, -55, 366, 277, 88]
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

//1. [forEach()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

function newForEach(brigadeiro, array) {
    for (let i = 0; i < array.length; i++){
        brigadeiro(array[i])
        }
}



// 2. [map()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

function newMap(callback, array){
    let result = []
    for(let i = 0; i < array.length; i++){
        result.push (callback(array[i], i, array))
    }
    return result
}



// 3. [filter()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filtro) 
function newFilter(callback, array){
    let result = []
    for(let i = 0; i < array.length; i++){
        callback(array[i], i, array)
        result.push (callback(array[i]))
        }
        return result
}


// 4. [find()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

function newFind(callback, array){
    let result = 0
    for(let i = 0; i < array.length; i++){
        callback(array[i], i, array)
        if (callback(array[i]) === true){
        result = array[i]
        break
    }
}
return result
}

// 5. [findIndex()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
//
function newFindIndex(callback, array){
    let result = 0
    for(let i = 0; i < array.length; i++){
        callback(array[i], i, array)
        if (callback(array[i]) === true){
        result = array[i]
    }
}
return result
}



// 6. [reduce()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
//
function newReduce(callback, array){
    let result = 0
    for(let i = 0; i < array.length; i++){
        
        result = callback(array[i], result)
}
return result
}




// 7. [some()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
//, 
function newSome(callback, array){
    
    for(let i = 0; i < array.length; i++){
        callback(array[i], i, array)
        if (callback(array[i]) === true){
            return true
        }
}
return false
}

// 8. [every()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
//, ,
function newEvery(callback, array){
  
    for(let i = 0; i < array.length; i++){
        callback(array[i], i, array)
        if (callback(array[i]) === false){
            return false
        }
}
return true

}

// 9. [fill()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/fill)
// newFill, 
function newFill(value, array){
  let result = []
    for(let i = 0; i < array.length; i++){
        result.push(value)
        }
        return result
}


// 10. [includes()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/contains)
//newIncludes, 
function newIncludes(value, array){
    for(let i = 0; i < array.length; i++){
        if (array[i] === value){
            return true
        }
}
return false

}

// 11. [indexOf()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
//newIndexOf, 
function newIndexOf(value, array){
    for(let i = 0; i < array.length; i++){
        if (array[i] === value){
            return i
        }
}


}
// 12. [concat()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)
//newConcat, 
function newConcat(array1, array2){
    let result = []
    for(let i = 0; i < array1.length; i++){
        result.push(array1[i])
        }
    for (let j = 0; j < array2.length;j++){
        result.push(array2[j])
    }
        return result
}


// 13. [join()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
//newJoin
function newJoin(text, array){
    let string = ''
    if (text === ''){
    string = array.toString().replaceAll(/,/g, ',')
    } else {
    string = array.toString().replaceAll(/,/g, text)
    }

return string
}






