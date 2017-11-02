let container = document.querySelector('.container');

container.addEventListener('click', function createPatern(e){

	let attr = e.target.getAttribute('data-action');
	let elemPrev = e.target.parentNode.previousElementSibling;
	let elemNext = e.target.parentNode.nextElementSibling;
	let patern = `<div class="field">
      <span>${containerCounter()}</span>
      <input type="text" data-name="${containerCounter()}">
      <button data-action="plus">+</button>
      <button data-action="minus">-</button>
    </div>`;
    console.log(elemNext);

	if(attr == 'plus'){
		container.insertAdjacentHTML('beforeEnd', patern);
	}
	if(attr == 'minus' && elemNext != null || elemPrev != null){
		containerCounter();
		e.target.parentNode.classList.add('opacity');
		setTimeout(function(){
			e.target.parentNode.remove();
			console.log(containerCounter() - 1);
		}, 500);
	}

	return;

});

function containerCounter(){
	return container.children.length + 1;
}