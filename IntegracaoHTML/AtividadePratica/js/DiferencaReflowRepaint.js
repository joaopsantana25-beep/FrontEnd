/*
Enunciado: Se você mudar apenas a cor do texto de um parágrafo, o navegador
executará um Reflow ou um Repaint? Justifique com base no peso para a performance
*/


/*
O navegador executará um repaint porque a cor do texto
não altera as dimensões do botão, então como nada é recalculado
não será executado o reflow e sim o repaint.
*/
