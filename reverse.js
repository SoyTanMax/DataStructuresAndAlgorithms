function reverse(string){
    if(!string || string.length < 2 || typeof string !== 'string'){
      return 'Invalid input'
    }
    const backwards = [];
  
    for(let i = string.length - 1; i = 0; i--){
      backwards.push(string[i])
    }
  
    console.log(backwards);
  
    return backwards.join('')
  }
  
reverse('Hi my name is Max')