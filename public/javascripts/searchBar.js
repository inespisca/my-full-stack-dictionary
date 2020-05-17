const search_input = document.getElementById('search');

search_input.addEventListener('input', e => {
	var search_term = e.target.value.toLowerCase();

	document.querySelectorAll('ul#wordzone').forEach(item => {
		if (item.innerText.toLowerCase().indexOf(search_term) === -1) {
			item.style.display = 'none';
		} else {
			item.style.display = '';
		}
	});
});