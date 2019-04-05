//Comentários de linha

/*
Comentário
de
múltiplas
linhas
*/

	//Pode se incorporar o código JS dentro do head, pra que ele seja iniciado antes da página em si
	//Caso seja colocado dentro do Body é necessário colocar no lugar certo para que funcione corretamente
	<script type="text/javascript" src="nome_script.js">
		
	//Se mais funcional pode ser colocado um código diretamente no HTML, sem precisar criar uma página de script
		</script>
		

//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\

	var nomeVariavel //Cria uma variável qualquer
	var numeroVariavel = 10		//Cria uma variável numérica com valor 10
	var numeroVariavel = 14.6 	//Cria uma variável numérica com valor 14,6
	var boolVariavel = false 	//Cria uma variável com valor False
	var stringVariavel = 'Uma variável qualquer' //Cria uma variável com uma String de caracteres
	var variavelNull = null 	//Cria uma variável com o valor null
	var variavelUndefined 		//Cria uma variável com valor indefinido
	

	/*
	* ESCOPOS DE VARIÁVEIS
	*
	*	Global -> Variável válida para todo o programa
	*	Função -> Variável válida somente dentro daquela função, e em nenhum outro lugar (não sofre elevação para escopo global)
	*	Bloco  -> Variável criada dentro de um item, válida para todo o programa (sofre elevação para escopo global)
	*/

//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\

	console.log(algumaCoisa) //Escreve algo ou alguma variável dentro do console para função de DEBUG
	alert('something') //Create an alert to the user
	document.write('<h1>Algum texto H1 qualquer</h1>') //Escreve algo dentro do <body> por HardCode
	prompt('Digite alguma coisa:') //Cria uma caixa de texto para que o usuário possa interagir com a aplicação 
		//Pode ser usado com TAG HTML 

	var variavel = parseInt(variavel) 	//Faz com que a variavel seja transformada em int
	var variavel = parseFloat(variavel)	//Faz com que a variavel seja transformada em floar
	var variavel.toString()				//Faz com que a variavel seja transformada em string


//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
	
	var primeiro
	var segundo

	primeiro + segundo	//Soma
	primeiro - segundo	//Subtração
	primeiro * segundo	//Multiplicação
	primeiro / segundo	//Divisão
	primeiro % segundo	//Resto
	primeiro++	//Incremento
	primeiro--	//Decremento
	primeiro*=	//Incremento de multiplicação
	primeiro/+	//Incremento de divisão

	primeiro == segundo		//Igual a
	primeiro === segundo	//Identico a
	primeiro != segundo		//Diferente de
	primeiro !== segundo	//Não identico a
	primeiro < segundo		//Menor que
	primeiro > segundo		//Maior que
	primeiro <= segundo		//Menor ou igual a
	primeiro >= segundo		//Maior ou igual a

	primeiro == segundo && segundo < primeiro	
	segundo > primeiro || segundo < primeiro
	!primeiro > segundo 


	if(condicao){
		//Alguma coisa
	}else(condicao){
		//Alguma outra coisa
	}


	primeiro >= segundo ? <verdadeiro> : <falso>

//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\

	switch (variavel){
		//Caso o valor seja definido por prompt é necessario
		//Usar parseInt() dentro da declaração do switch ou colocar as opções do case como Strings
		case 1:
			//trecho
			break;
		case 2:
			//trecho
			break;
		default:
			//trecho
			break;
	}	


	var i = 0

	for(var x=0; x<10; x++){
		//algo
	}

	do(algo){
		//algo
		
		i++
	}while(i<10)

	while(i<10){
		//algo
		i++
	}

//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\

	function /*void*/ nomeDaFuncao(valor1, valo2){
		
		/*
		* Caso sejam passados mais parâmetros do que o esperado, estes serão desconsiderados
		* Caso sejam passado menos parâmetros do que o esperado, estes serão undefined
		* Caso não sejam passados parâmetros, todos serão undefined
		* Em nenhum caso a aplicação irá quebrar, só poderá não funcionar corretamente 
		*	valor2 === undefined ? 0 : valor2
		*		Isso pode ser um jeito de DEBUG para evitar que a função não seja executada corretamente por falta de informações 
		*/

		//Faz alguma coisa
		return valor1+valor2
	}

	
	//Chamada da function dentro do script

		nomeDaFuncao(10,20);

	


	/*FUNÇÃO ANÔNIMA*/
	var funcaoAnonima = function(valor){
		//Alguma coisa
	}


	/*FUNÇÃO CALLBACK*/
	function algumaFuncao (id, callbackSucesso, callbackErro){
			/*
			* Cria um mecanismo para verificar algum possível erro na execução de uma função
			* CallbackSucesso será executado caso não haja erro
			* CallbackErro será executado caso haja algum erro
			*/
		if(true){
			//Se não ouver erro chame Sucesso
			callbackSucesso()
		}else{
			//Se houver algum erro chame Erro
			callbackErro()
		}
	}

	var callbackSucesso = function(valor1, valor2){
		/*
		* Define uma função anônima para variável de mesmo nome
		* Fazendo isso não é necesserário escrever a função dentro da declaração de parâmetros de algumaFuncao
		*/
		document.write(valor1)
		document.write(valor2)
	}

	var callbackErro = function(erro){
		/*
		* Define uma função anônima para variável de mesmo nome
		* Fazendo isso não é necesserário escrever a função dentro da declaração de parâmetros de algumaFuncao
		*/
		document.write(erro)
	}

	algumaFuncao(1, callbackSucesso, callbackErro)

//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\

	/*FUNÇÕES NATIVAS PARA MANIPULAR STRING*/
	var umaString = 'Uma String qualquer'

	umaString.lenght() //Conta a quantidade de caracteres dentro da String
	umaString.charAt(<numero>) //Mostra qual o caractere está na posição 
	umaString.indexOf('s') //Mosrta qual a posição da 1º ocorrência do caractere especificado
								//Se não houver o caractere dentro da String, retorna -1
	umaString.replace('Uma String', 'Alguma Frase') //Faz a substituição da primeira String pela segunda
	umaString.substr(3,5) //Retorna um trecho da String, começando no 1º valor indo até o 2º valor
	umaString.toLowerCase() //Transforma todos os caracteres em minúsculos
	umaString.toUpperCase() //Transforma todos os caracteres em maiúsculos
	umaString.trim() //Retira os espaços em branco do começo e do final da frase

	/*FUNÇÕES NATIVAS PARA MANUPULAÇÃO MATEMÁTICA*/

	var umValor = 10.380

	umValor = Math.ceil()  //Arredonda o valor pra cima (11)
	umValor = Math.floor() //Arredonda o valor pra baixo (9)
	umValor = Math.round() //Arredonda o valor matematicamente (1-4 < ; 5-9 >)
	umValor = Math.ramdon()//Retorna um valor aleatório entre 0 e 1
	umValor = Math.abs() //Retorna o valor absoluto (10)
	umValor = Math.exp(3) //Retorna o valor elevado ao número (10^3)
	umValor = Math.pow(x,y) //Retorna o valor x elevado a y
	umValor = Math.sqrt(x) //Retorna a raiz quadrada de x

	umValor = Math.sin(x) //Retorna o Seno de x
	umValor = Math.cos(x) //Retorna o Cosseno de x
	umValor = Math.tan(x) //Retorna a Tangente de x
	umValor = Math.log(xE) //Retorna o Logarítimo de E na base x
	umValor = Math.PI //Retorna o valor de PI

	umValor = Math.max(x, y, z) //Retorna o maior valor dentre todos
	umValor = Math.min(x, y, z) //Retorna o menor valor dentre todos


	/*FUNÇÕES DE MANUPULAÇÃO DE DATA*/

	var date = new Date
	var data = new Date(ano, mes, dia, hora, inuto, segundo, milisegundos)
	var data = new Date("01 de Março de 2019, 11:23:00")

	data.getDate() //Recupera o dia em números 1-31
	data.getMonth() //Recupera o mes em número 0-11
	data.getFullYear() //Recipera o ano em número yyyy
	data.getHours() //Recupera a hora 0-23
	data.getMinutes()  //Recupera os minutos 0-59
	data.getTime() //Recupera os milissegundos desde 1 de janeiro de 1970
	Date.now()

	data.toDateString()
	
	/*
	* ISO Date -> '2019-23-03'
	* Short Date -> '03/23/2019'
	* Long Date -> 'Mar 23 2019' or '23 Mar 2019'
	* 
	* 
	* 
	* 
	* 
	*/

//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\

	ARRAY

	var newArray = Array();
	newArray[1] = 'Something';
	newArray[2] = 'Another something';
	newArray['x'] = 'Other something';

	vay newArray = Array('Something', 'Another something', 'Other something');

	var newArray = ['Something', 'Another something', 'Other something'];


	var newArray = Array() 
	newArray['First  Colum'] = Array('1st item', '2nd item', '3rd item');
	newArray['Second Colum'] = Array('1st item', '2nd item', '3rd item');


	newArray.push('Another element') //Create a new element at the END of the array
	newArray.unshift('Another element') //Create a new element at the BEGGINING of the array
	newArray.pop() //Delete the LAST element of the array
	newArray.shift() //Delete the FIRST element od the array

	newArray['First Colum'].push('New Element');   
	newArray['Second Colum'].unshift('New Element');

	newArray.indexOf('Element') //Will return the index of the element. If there's no element will return -1
	newArray.sort() //Sort the elements and indexs in alphabetical oder 
			function sortNumbers(a,b){
				return a-b;

				// <0 - a before b
				// >0 - b before a
				// =0 - keep the oder 
			}

	The lenght of the array, using console.log(newArray) may not bt exactly the same as the original array
			If the 1st item starts with the index of 10, the lenght will be shown with 10 empity places 
//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\

	while(var i<10){
		something;
		i++;
	}

	for(var i=0; i<10; i++){
		something   
	}


//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\

	EVENTS 
		NOT SUPPORTED BY ALL THE HTML ELEMENTS, CHECK W3SCHOOL FOR DOCUMENTATION
		https://www.w3schools.com/tags/ref_eventattributes.asp
		Some events have preferences over others actions


	MOUSE

	onclick  		-		Click over the element
	ondblclick  	-		Double click over the element
	onmouseup  		-		Release the mouse click on the element
	onmouseover  	-		Put the mouse over the element
	onmouseout  	-		The mouse leave the element


	KEYBOARD

	onkeydown		-		Any key is typed		Only actioned when the key is related to an caracter 
	onkeypress		-		Any key is pressed		
	onkeyup			-		Any key is released


	WINDOW

	onresize		-		When the window is resized
	oncroll			-		When the window is scrolled


	FORM

	onfocus			-		When the div if focoused by the mouse
	onblur			-		When the div loses the focous  
	onchange		-		When the div is changed somehow

//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
	DOM
	
	<input
		type = "text"
		placeholder = "Type something"
		id = "id"
		class = "input_class"
		name = "something"
	/>

	getElementById() 			"id"
	getElementsByTagName()		"input"
	getElementsByClassName()	"input_class"
	getElementsByName()			"something"

	use .value to return the value inside the element
			document.getElementById("main").value
				Can be assigned to an variable to keep this info or can be changed
	use .style to change the style of some element	
			document.getElementById("main").style.backgroundColor = #000
	use .className to change the defined class of the element
			document.getElementById("main").className = 'newStyle'

//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\

	DOM SCREEN
		Display some information about the screen that is been used to show the application

	availHeight		Returns the height of the screen without including the Windows Taskbar
	availWidth		Returns the width  of the screen without including the Window Taskbar
	colorDepth		Returns	the bit depth of the color used to display images
	pixelDepth		Returns the color resolution (bits per pixels) of the screen
	height			Returns the total height
	width			Returns the total width


	use window.screen

	var height = window.screen.availHeight
	var width = window.screen.availWidth

//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\

	DOM LOCATION
		Display some information about the current URL 

	hash			Sets or returns the anchor part of an page
	host			Sets or returns the host and port number of a URL
	hostname		Sets or returns the host name of a URL
	href			Sets or returns the entire URL
	origin			Returns the host, port and protocol number of a URL
	pathname		Sets or returns the path name of a URL
	port			Sets or returns the port number of a URL
	protocol		Sets or returns the protocol of a URL 
	search			Sets or return the querystring part of a URL


	assign()		Loads a new document
	reload()		Reloads the current document
	replace()		Replace the current document with a new one

	use window.location

	window.location.href('https://www.google.com')

//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\

	BOM TIMING
		Do some stuff time based
	
	setTimeout(action, timeMiliseconds)		Sets the time of some action after been actioned
	clearTimeout()							

	setInterval(action, timeMiliseconds)	Sets a time for an action to happens
	clearInterval()

//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\




//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\




//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\



