const textarea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function btnEncriptar() {
	const textoEncriptado = Encriptar(textarea.value)
	mensagem.value = textoEncriptado;
	textarea.value = "";
}


function Encriptar(stringEncriptada){

	let matrizcodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
	stringEncriptada = stringEncriptada.toLowerCase();

	for(let i = 0; i < matrizcodigo.length; i++) {
		if(stringEncriptada.includes(matrizcodigo[i][0])){
			stringEncriptada = stringEncriptada.replaceAll(matrizcodigo[i][0], matrizcodigo[i][1]);
		}
	}
	return stringEncriptada;
}



function btnDesencriptar() {
	const textoDesencriptado = Desencriptar(textarea.value)
	mensagem.value = textoDesencriptado;
	textarea.value = "";
}


function Desencriptar(stringDesencriptada){

	let matrizcodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
	stringDesencriptada = stringDesencriptada.toLowerCase();

	for(let i = 0; i < matrizcodigo.length; i++) {
		if(stringDesencriptada.includes(matrizcodigo[i][1])){
			stringDesencriptada = stringDesencriptada.replaceAll(matrizcodigo[i][1], matrizcodigo[i][0]);
		}
	}
	return stringDesencriptada;
}
