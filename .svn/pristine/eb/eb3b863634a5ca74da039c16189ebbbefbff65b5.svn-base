$(function() {
	
	/*
	var waves_opt=[];
	for(var i=0;i<20;i++){
		waves_opt.push({
			timeModifier: 1,
			lineWidth: 1,
			amplitude: 150+i*15,
			wavelength: 250+i*5,
			segmentLength: 1,
			type: 'Fibonacci'
		})
	};
	speed: 0.5,
	wavesWidth: '110%',
	*/

	var waves = new SineWaves({
		el: document.getElementById('waves'),

		speed: 1,


		wavesWidth: '110%',

		ease: 'SineInOut',
	
		waves: [{
			timeModifier: 1,
			lineWidth: 3,
			amplitude: 150,
			wavelength: 200,
			segmentLength: 1,
			type: 'Fibonacci',
		}, {
			timeModifier: 1,
			lineWidth: 2,
			amplitude: -75,
			wavelength: 100,
			segmentLength: 1,
			type: 'Fibonacci',
		},{
			timeModifier: 1,
			lineWidth: 3,
			amplitude: 200,
			wavelength: 100,
			segmentLength: 1,
			type: 'Fibonacci',
		}],
		initialize: function() {

		},

		resizeEvent: function() {
			var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
			gradient.addColorStop(0, "rgba(0, 0, 0, 0)");
			gradient.addColorStop(0.5, "rgba(255, 255, 255, 0.5)");
			gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

			var index = -1;
			var length = this.waves.length;
			while(++index < length) {
				this.waves[index].strokeStyle = gradient;
			}

			// Clean Up
			index = void 0;
			length = void 0;
			gradient = void 0;
		}
	});
});
