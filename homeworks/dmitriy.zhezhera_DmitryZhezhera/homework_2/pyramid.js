;function pyramid(){
    let height=15;
    for(let i=0,total=height+4,q=0;i<total;i++){
       if(i>=4){
           console.log(" ".repeat(total-i-1)+"#".repeat(i+q)
           //,q+1
           );     
           q+=1;
       }
    }
};
pyramid();