const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];

function createColorString() {
let arr =  colors.filter((color)=>{
  return color === 'черный'||color === 'красный'||color === 'желтый'
});
    return arr.join('-')
}

console.log(createColorString());
