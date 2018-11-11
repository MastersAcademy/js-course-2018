let rows = 15, bloks = "#", spaces = " ", count_rows = rows, count_bloks = 4;

for(let i=1; i<=rows; i++){
  console.log(spaces.repeat(count_rows)+bloks.repeat(count_bloks));
  count_rows -= 1;
  count_bloks += 2

};
