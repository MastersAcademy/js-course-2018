for (let i = 500; i < 1000; i++) {
  let newNumber = i.toString().split('').reverse().join('');
        let rev = i.toString();
        
        if (newNumber === rev) {
           console.log(i);
        }
} 