function marqueefy(m) {
	function go() {
		i = i < width ? i + step : 1;
		m.style.marginLeft = -i + 'px';
	}
	var i = 0,
		step = 3,
		space = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';

	var t = m.innerHTML; //text
	m.innerHTML = t + space;

	m.style.position = 'absolute'; // http://stackoverflow.com/questions/2057682/determine-pixel-length-of-string-in-javascript-jquery/2057789#2057789
	var width = (m.clientWidth + 1);
	m.style.position = '';
	m.innerHTML = t + space + t + space + t + space + t + space + t + space + t + space + t + space;
	m.addEventListener('mouseenter', function () {
		step = 0;
	}, true);
	m.addEventListener('mouseleave', function () {
		step = 3;
	}, true);
	var x = setInterval(go, 50);
};