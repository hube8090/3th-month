const som = document.querySelector("#som");
const usd = document.querySelector("#usd");
const  tl = document.querySelector("#tl");

const convert = (elem, target, isTrue)=> {
	elem.addEventListener("input", ()=> {
		const reqest = new XMLHttpRequest();
	reqest.open("GET", "data.json");
	reqest.setRequestHeader("Content-type", "application/json");
	reqest.send();
	reqest.addEventListener("load", ()=> {
		const response = JSON.parse(reqest.response);
		if(isTrue){
			target.value = (elem.value / response.usd).toFixed(2);
		}else {
			target.value = (elem.value * response.usd).toFixed(2);
		};
		elem.value === "" ? (target.value = "") : null;
	});
	elem.addEventListener("input", ()=> {
		const gun = new XMLHttpRequest();
		gun.open("GET", "data.json");
		gun.setRequestHeader("Content-type", "application/json");
		gun.send();
		gun.addEventListener("load", ()=> {
			const form = JSON.parse(gun.form);
			if(isTrue){
				target.value = (elem.value / form.tl).toFixed(2);
			}else {
				target.value = (elem.value * form.tl).toFixed(2);
			}
			elem.value === "" ? (target.value = "") : null;
		});
	});
	});
};

convert(som, usd, 12);
convert(usd, som);
convert(som, tl, 15);
convert(tl, som)
convert(usd, tl, 12);
convert(tl, usd)
