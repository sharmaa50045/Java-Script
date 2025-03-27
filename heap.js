let orginal={name:"anuj",score:[100,98,69]}
let shallowcopy={...orginal}
shallowcopy.name="khushi";
shallowcopy.score[0]=60;
console.log(orginal);
console.log(shallowcopy);