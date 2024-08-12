btnElement = document.querySelector(".btn");
resElement = document.querySelector(".res");
finum = document.querySelector('[name="finum"]');
senum = document.querySelector('[name="senum"]');

btnElement.addEventListener("click", function(){
    resElement.textContent = parseInt(finum.value) * parseInt(senum.value);
});