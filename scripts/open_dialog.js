(function () {
	// Находим элемент диалога
	const dialog = document.getElementById('memory-dialog');
	if (!dialog) return;

	// Находим все кнопки для открытия
	const openButtons = document.querySelectorAll('.js-open-dialog');
	// Находим все кнопки для закрытия (обычно это кнопка "ОК" внутри диалога)
	const closeButtons = document.querySelectorAll('.js-close-dialog');

	// Открытие диалога (модальное окно с backdrop)
	openButtons.forEach(btn => {
		btn.addEventListener('click', () => {
			dialog.showModal();
		});
	});

	// Закрытие диалога
	closeButtons.forEach(btn => {
		btn.addEventListener('click', () => {
			dialog.close();
		});
	});

	// Закрытие при клике на backdrop (фон)
	dialog.addEventListener('click', (e) => {
		if (e.target === dialog) {
			dialog.close();
		}
	});
})();