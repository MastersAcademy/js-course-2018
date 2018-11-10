 1  function pyramid(n) {
 2       
 3        for(let i=2; i<= n; i++){
 4  
 5          let str = ' '.repeat(n-i);
 6  
 7          let str2 = '#'. repeat(i*2)
 8       
 9          console.log(str + str2 + str);
10        }
11      } 
