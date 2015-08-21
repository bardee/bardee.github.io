function enter(){
	var user_input, head_style, box_style, i=0, len, shadDepth, x=0,y=0, shadAlign, shadProp, str;
	
	head_style = document.getElementsByTagName("HEADER")[0];
		user_input = document.getElementsByName("head_bgcolor")[0].value;
		head_style.style.backgroundColor = "#" + user_input;
		user_input = document.getElementsByName("head_font")[0].value;
		head_style.style.fontFamily = user_input;
		user_input = document.getElementsByName("head_fontcolor")[0].value;
		head_style.style.color = "#" + user_input;
		user_input = document.getElementsByName("head_fontsize")[0].value;
		head_style.style.fontSize = user_input;
		
	main_style = document.getElementsByTagName("MAIN")[0];
		user_input = document.getElementsByName("main_bgcolor")[0].value;
		main_style.style.backgroundColor = "#" + user_input;
		user_input = document.getElementsByName("main_font")[0].value;
		main_style.style.fontFamily = user_input;
		user_input = document.getElementsByName("main_fontcolor")[0].value;
		main_style.style.color = "#" + user_input;
		user_input = document.getElementsByName("main_fontsize")[0].value;
		main_style.style.fontSize = user_input;
			
	box_style = document.getElementsByClassName("box");
		len = box_style.length;
		shadDepth = document.getElementsByName("box_shaddepth")[0].value;
		shadAlign = document.getElementsByName("box_shadalign")[0].value;
		
		while(i < len){
		user_input = document.getElementsByName("box_bgcolor")[0].value;
		box_style[i].style.backgroundColor = "#" + user_input;
		user_input = document.getElementsByName("box_font")[0].value;
		box_style[i].style.fontFamily = user_input;
		user_input = document.getElementsByName("box_fontcolor")[0].value;
		box_style[i].style.color = "#" + user_input;
		user_input = document.getElementsByName("box_fontsize")[0].value;
		box_style[i].style.fontSize = user_input;
		/*ALTERS TITLE BOX'S SHADOW*/
		user_input = document.getElementsByName("box_shadcolor")[0].value;
			if(shadAlign == "top-left"){
				x = -1, y = -0.5; shadProp = "";
				while(shadDepth != 0){	
					str = x + "px " + y + "px #" + user_input + ", ";
					shadProp = shadProp.concat(str);
					shadDepth--; x--; y--;
				}
				shadProp="-8px -7.5px #000000";
				box_style[i].style.boxShadow =shadProp;
			}
			if(shadAlign == "top-right"){
				
			}
			if(shadAlign == "bottom-right"){
				
			}
		
		i++;
		}
}

function loop(num){
	var i = 1;	
	while(i <= num){
		document.write(i + ",");
		i++;
	}
	return true;
}

function change(){
	var value;
	value = confirm("Are you sure you want to make these changes?");
	if(value == true){
		enter();
	}
}

/*
			<script language="javascript" type="text/javascript">
				loop(15);
			</script> */