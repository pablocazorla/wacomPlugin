var wacomAPI = function(idNode) {
	'use strict';

	var k = function(str) {
		try {
			console.log(str);
		} catch (e) {};
	};

	var idNode = idNode || 'wtPlugin',
		node = document.getElementById(idNode);

	if (node && node.version) {
		k('Wacom Plugin loaded, v.' + node.version);
	} else {
		k('ERROR: Wacom Plugin NOT loaded!');
		return false;
	}

	var api = node.penAPI;

	return {
		get isWacom() {
			return api.isWacom;
		},
		get isEraser() {
			return api.isEraser;
		},
		get pressure() {
			return api.pressure;
		},
		get posX() {
			return api.posX;
		},
		get posY() {
			return api.posY;
		},
		get sysX() {
			return api.sysX;
		},
		get sysY() {
			return api.sysY;
		},
		get tabX() {
			return api.tabX;
		},
		get tabY() {
			return api.tabY;
		},
		get rotationDeg() {
			return api.rotationDeg;
		},
		get rotationRad() {
			return api.rotationRad;
		},
		get tiltX() {
			return api.tiltX;
		},
		get tiltY() {
			return api.tiltY;
		},
		get tangPressure() {
			return api.tangPressure;
		},
		get version() {
			return api.version;
		},
		get pointerType() {
			return api.pointerType;
		},
		get tabletModel() {
			return api.tabletModel;
		},
		get setFocus() {
			return api.setFocus;
		},
		get tabletModelID() {
			return api.tabletModelID;
		},
		get tangentialPressure() {
			return api.tangentialPressure;
		}
	};
};