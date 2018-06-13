var piceX = (canvas.width-30)/2;
var piceY = 0;

var rightPressed = false;
var leftPressed = false;
document.addEventListener("keydown", keyDownHandler, false);
var courant=1;

listeCase=[
[0,0,0,0,0,0,0],
[0,0,0,0,0,0,0],
[0,0,0,0,0,0,0],
[0,0,0,0,0,0,0],
[0,0,0,0,0,0,0],
[0,0,0,0,0,0,0]
];

function drawScreen(){
	ctx.fillStyle = "#0095DD";
    ctx.fillRect(0, 0, 550, 490);
    x=68;
    y=75;
    for(let ligne=1;ligne<8;ligne++){
		for(let colonne=1;colonne<7;colonne++){
			ctx.beginPath();
			ctx.arc(ligne*x, colonne*y, 30, 0, Math.PI*2);	
			ctx.fillStyle = "white";
			ctx.fill();
		}
	}
	ctx.beginPath();
	 ctx.strokeStyle="white";
	 ctx.lineCap="round";
	 ctx.lineWidth=20; 
	 ctx.moveTo(30,1);
	 ctx.lineTo(520,1);
	 ctx.stroke(); 
}
let mouve=1;

function keyDownHandler(e) {
        if(e.keyCode == 39) {
            rightPressed = true;
            if (mouve<7){mouve++;}
        }
        else if(e.keyCode == 37) {
            if (mouve>1){mouve--;}
        }
        else if(e.keyCode == 13) {
            for (ligne=5;ligne>=0;ligne--){
				if (listeCase[ligne][mouve-1]==0){
					if (courant==1){
						listeCase[ligne][mouve-1]=1;
						console.log("appelle")
						effet(1,ligne,mouve-1);
						courant=2;
						console.log("courant=2");
					}else{
						listeCase[ligne][mouve-1]=2;
						effet(2,ligne,mouve-1);
						courant=1;
						console.log("courant=1");
					}
					//break;
					return;
				}
				console.log(listeCase[ligne][mouve-1]);
			}
        }
}



function drawCurseur(){
	console.log(courant+"est la");
	if (courant==1){
		console.log("=1");
		ctx.beginPath();
		ctx.fillStyle = "red";
		ctx.arc(mouve*x, 30, 30, 0, Math.PI*2);
		ctx.fill();
		ctx.beginPath();
		ctx.fillStyle = "#ff4d4d";
		ctx.arc(mouve*x, 30, 25, 0, Math.PI*2);
		ctx.fill();
	}else{
		console.log("=1");
		ctx.beginPath();
		ctx.fillStyle = "#ffd633";
		ctx.arc(mouve*x, 30, 30, 0, Math.PI*2);
		ctx.fill();
		ctx.beginPath();
		ctx.fillStyle = "#ffeb99";
		ctx.arc(mouve*x, 30, 25, 0, Math.PI*2);
		ctx.fill();
	}
}

function drawCurseur2(y){
	console.log(courant+"est la");
	if (courant==1){
		console.log("=1");
		ctx.beginPath();
		ctx.fillStyle = "red";
		ctx.arc(mouve*x, y, 30, 0, Math.PI*2);
		ctx.fill();
		ctx.beginPath();
		ctx.fillStyle = "#ff4d4d";
		ctx.arc(mouve*x, y, 25, 0, Math.PI*2);
		ctx.fill();
	}else{
		console.log("=1");
		ctx.beginPath();
		ctx.fillStyle = "#ffd633";
		ctx.arc(mouve*x, y, 30, 0, Math.PI*2);
		ctx.fill();
		ctx.beginPath();
		ctx.fillStyle = "#ffeb99";
		ctx.arc(mouve*x, y, 25, 0, Math.PI*2);
		ctx.fill();
	}
}

function drawPoint(){
	x=68;
    y=75;
    for(let ligne=0;ligne<6;ligne++){
		for(let colonne=0;colonne<7;colonne++){
			if (listeCase[ligne][colonne]==1){
					ctx.beginPath();
					ctx.fillStyle = "red";
					ctx.arc((colonne+1)*x,(ligne+1)*y , 30, 0, Math.PI*2);
					ctx.fill();
					ctx.beginPath();
					ctx.fillStyle = "#ff4d4d";
					ctx.arc((colonne+1)*x,(ligne+1)*y , 25, 0, Math.PI*2);
					ctx.fill();
			}else if(listeCase[ligne][colonne]==2){
					ctx.beginPath();
					ctx.fillStyle = "#ffd633";
					ctx.arc((colonne+1)*x,(ligne+1)*y , 30, 0, Math.PI*2);
					ctx.fill();
					ctx.beginPath();
					ctx.fillStyle = "#ffeb99";
					ctx.arc((colonne+1)*x,(ligne+1)*y , 25, 0, Math.PI*2);
					ctx.fill();
			}else{
				ctx.beginPath();
				ctx.arc((colonne+1)*x,(ligne+1)*y , 30, 0, Math.PI*2);	
				ctx.fillStyle = "white";
				ctx.fill();
			} 
		}
	}
	
	
	ctx.beginPath();
	ctx.fillStyle = "red";
	ctx.arc(mouve*x, 30, 30, 0, Math.PI*2);
	ctx.fill();
	ctx.beginPath();
	ctx.fillStyle = "#ff4d4d";
	ctx.arc(mouve*x, 30, 25, 0, Math.PI*2);
	ctx.fill();
}


function draw(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawScreen();
	//console.log("draw")
	drawPoint();
	drawCurseur();
	checkWin();
}

function checkWin(){
	for(let ligne=0;ligne<6;ligne++){
		for(let colonne=0;colonne<7;colonne++){
			if (listeCase[ligne][colonne]==1){
					var commencer=true;
					//if (verifLigne(verifLigne,ligne,colonne)==true 	){alert("GG")}
					
					//alert("GG");
		}
	}
}
}

function verifLigne(verifLigne,posY,posX){
	for (let verfifLigne=posY;verfifLigne<posX+3;verfifLigne++){
						if(listeCase[verfifLigne][posX]){
							console.log("je verifie")
							if (verfifLigne<7){
								commencer=false;
								return false;
							}
						}
					}
	return true;
}
a=30;
function effet(color,ligne,col){
	//clearInterval(draw);
	console.log("nann");
	setTimeout(drawEff(),1000,color,ligne,col);


}

function drawEff(color,ligne,col){
	if(a<a*col){
		console.log("ouii");
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		drawScreen();
		drawPoint();
		drawCurseur2(a);
		checkWin();
		a+=1;
	}else{a=30}
}
setInterval(draw,100);