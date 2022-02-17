/*Trolls are attacking your comment section!
A common way to deal with this situation is to remove all of the 
vowels from the trolls' 
comments, neutralizing the threat.
Your task is to write a function that takes a string and 
return a new string with all vowels removed.
For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!". */

let vowels = ["a","A","e","E","i","I","o","O","u","U"]
function disemvowel(str) {
    for (i=0;i< str.length;i++){
        console.log(str[i])
        for (j=0;j< vowels.length;j++){
            console.log(vowels[j])
        }
        if(str[i] == vowels[j]){
            
        }
    }
    
    
  }
  console.log(disemvowel("hi"))
