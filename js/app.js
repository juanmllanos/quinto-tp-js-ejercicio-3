const $agregarTarea = document.getElementById('nuevaTarea');
const $botonAgregar = document.getElementById('botonAgregar');
const $listaTareas = document.getElementById('tareas');
const $botonEliminarTarea = document.getElementById('eliminarTarea');
const $borrarTareaNumero = document.getElementById('borrarTareaNumero');

$botonAgregar.onclick = function (e) {
	const $tareaNueva = document.createElement('li');
	$tareaNueva.innerText = `${$agregarTarea.value}`;
	$tareaNueva.className = 'tarea text-danger fw-bolder fs-1 ms-3 mx-3';
	$listaTareas.appendChild($tareaNueva);
	$agregarTarea.value = '';
	e.preventDefault();
};

$botonEliminarTarea.onclick = function () {
	if ($borrarTareaNumero.value > $listaTareas.children.length || $borrarTareaNumero.value <= 0) {
		if ($borrarTareaNumero.value === '') {
			alert(`No ingresaste ningun numero.`)
		} else {
			alert(`No existe la tarea numero ${$borrarTareaNumero.value}`);
			$borrarTareaNumero.value = '';
		};
	} else {
		const pregunta = confirm(`Queres borrar la tarea ${$borrarTareaNumero.value}: "${$listaTareas.children[$borrarTareaNumero.value - 1].innerText}"?`);
		if (pregunta) {
			$listaTareas.removeChild($listaTareas.children[$borrarTareaNumero.value - 1]);
			$borrarTareaNumero.value = '';
		} else {
			alert('La tarea no se borro.')
			$borrarTareaNumero.value = '';
		};
	};
};