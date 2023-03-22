function mergeSortedArrays(array, array2){

    const mergedArray = []
  
    let arrayItem1 = array[0]
    let arrayItem2 = array2[0]
    let i = 1;
    let j = 1;
    
    if(!array.length){
      return array2
    }
    if(!array2.length){
      return array
    }
  
    while(arrayItem1 || arrayItem2){
      if(!arrayItem2 || arrayItem1 < arrayItem2){
        mergedArray.push(arrayItem1)
        arrayItem1 = array[i]
        i++
      }else{
        mergedArray.push(arrayItem2)
        arrayItem2 = array2[j]
        j++
      }
    }
    
    for(i = 0; i <= array.length - 1; i++){
      
    }
  
    console.log(mergedArray)
  }
  
  mergeSortedArrays([0,3,4,31], [4,6,30])
  
  //[0,3,4,4,6,30,31]