function WildcardCharacters(str) { 

  const strArray = str.split(" ");
  let pattern = [...strArray[0]];
  let characters = [...strArray[1]];
  let globalStrIndex = 0;
  let result = true;
  let limit = 3;

  pattern.forEach((element, index) => {

    if (element === "*") {
      
      if (/[{]/.test(pattern[index+1])) limit = parseInt(pattern[index+2]);
			      
      const subchars = characters.slice(globalStrIndex, globalStrIndex+limit);
      globalStrIndex += subchars.length;            
      if (!subchars.every((element) => element == subchars[0])) result = false;
      if (characters[globalStrIndex-1] == characters[globalStrIndex]) result = false;
      if (limit > subchars.length) result = false;
                 
    }    
        
    if (element === "+") {
      if ((characters[globalStrIndex] === characters[globalStrIndex-1]) || (characters[globalStrIndex] === characters[globalStrIndex+1])) result = false;
      globalStrIndex++;
    } 
    
  })
	return result;
}
   
// keep this function call here 
console.log(WildcardCharacters("+++++* abcdemmmmmm"));
// let other = "**+*{2} mmmrrrkbb";