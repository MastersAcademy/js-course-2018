let classes = ['header', 'menu', 'menu_item', 'tabs',
    'tab_item', 'menu', 'link', 'tabs', 'tab_item', 'menu',
    'menu_item', 'menu', 'menu_item'];

function foo (arr) {
  const a ={};
  arr.map((item) => {
    if (item in a) {
      a[item] += 1;
      }
    else {
      a[item] = 1;
    }
    })
    return a;
}


console.log(foo(classes));