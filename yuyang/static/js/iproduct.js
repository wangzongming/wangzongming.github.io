$(function() {
	var waves_opt=[];
	for(var i=0;i<20;i++){
		waves_opt.push({
			timeModifier: 1,
			lineWidth: 1,
			amplitude: -80-i*8,
			wavelength: 200+i*10,
			segmentLength: 1,
			type: 'Fibonacci'
		})
	};

	

	var waves = new SineWaves({
		el: document.getElementById('waves'),

		speed: 0.8,
		wavesWidth: '110%',

		ease: 'SineInOut',
	
		waves: waves_opt,
		initialize: function() {

		},

		resizeEvent: function() {
			var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
			gradient.addColorStop(0, "rgba(36, 161, 220, 0)");
			gradient.addColorStop(0.5, "rgba(36, 161, 220, 0.5)");
			gradient.addColorStop(1, "rgba(36, 161, 220, 0)");

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