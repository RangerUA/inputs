let container = document.querySelector('.container');
// console.log(container);

container.addEventListener('click', function createPatern(e){

	let attr = e.target.getAttribute('data-action');
	let patern = `<div class="field">
      <span>${containerCounter()}</span>
      <input type="text" data-name="${containerCounter()}">
      <button data-action="plus">+</button>
      <button data-action="minus">-</button>
    </div>`;
    console.log(containerCounter());
	if(attr == 'plus'){
		container.insertAdjacentHTML('beforeEnd', patern);
	}
	if(attr == 'minus'){
		containerCounter();
		e.target.parentNode.classList.add('opacity');
		setTimeout(function(){
			e.target.parentNode.remove();
		}, 500);
	}

});


function containerCounter(){
	return container.children.length + 1;
}