
Stamplay.init('yourAppId');

function rateFive(){
	var objectInstance = new Stamplay.Cobject('objectModel').Model;
	objectInstance.fetch('id').then(function(){
    	return objectInstance.rate(5).then(function(){
    		alert('rated 5!');
    	});
    });
}

function rateFour(){
	var objectInstance = new Stamplay.Cobject('objectModel').Model;
	objectInstance.fetch('id').then(function(){
    	return objectInstance.rate(4).then(function(){
    		alert('rated 4!');
    	});
    });
}

function rateThree(){
	var objectInstance = new Stamplay.Cobject('objectModel').Model;
	objectInstance.fetch('id').then(function(){
    	return objectInstance.rate(3).then(function(){
    		alert('rated 3!');
    	});
    });
}

function rateTwo(){
	var objectInstance = new Stamplay.Cobject('objectModel').Model;
	objectInstance.fetch('id').then(function(){
    	return objectInstance.rate(2).then(function(){
    		alert('rated 2!');
    	});
    });
}

function rateOne(){
	var objectInstance = new Stamplay.Cobject('objectModel').Model;
	objectInstance.fetch('id').then(function(){
    	return objectInstance.rate(1).then(function(){
    		alert('rated 1!');
    	});
    });
}
