var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');

var get = 'GET';

//Zomato variables
var userKey = '46737798fd81f8e4919216ef9d61aa84';
var url = 'https://developers.zomato.com/api/v2.1/';
var q = 'waterloo';
var query = '';
var lat = '';
var lon = '';
var city_id = '89';
var count = '';
var entity_id = '';
var entity_type = ''; // this must be city, subzone, zone, landmark, metro, group
var res_id = '16782899';
var start = '';
var radius = '';
var cuisines = '';
var establishment_type = '';
var collection_id = '';
var category = '';
var sort = ''; // this must be cost, rating, or real_distance
var order = '' // this must be asc, desc

//XE variables
var xeUrl = 'https://xecdapi.xe.com/v1/';
var xeAccId = 'hackthenorth057'
var xeApiKey = 'Waterloo25936';
var auth = "Basic " + new Buffer(xeAccId + ":" + xeApiKey).toString("base64");
var isoFrom = 'CAD';
var isoTo = 'USD';
var amount = '110.23';

var app = express();

var getRestaurantCategories = function(callback) {
	request({
		method: get,
		url: url + 'categories',
		headers: { 'user-key': userKey }
	}, function(error, response, body) {
		if(error) {
			 console.error('ERROR: ' + error);
	 	} else if(typeof callback === 'function') {
			callback(body);
		}
	});
};

var getRestaurantCities = function(callback) {
	request({
		method: get,
		url: url + 'cities',
		headers: {
			'user-key': userKey
		},
		qs: {
			q: q,
			lat: lat,
			lon: lon,
			city_id: city_id
		}
	}, function(error, response, body) {
		if(error) {
			 console.error('ERROR: ' + error);
		} else if(typeof callback === 'function') {
 			callback(body);
 		}
	});
};

var getRestaurantCollections = function(callback) {
	request({
		method: get,
		url: url + 'collections',
		headers: {
			'user-key': userKey
		},
		qs: {
			city_id: city_id
		}
	}, function(error, response, body) {
		if(error) {
			 console.error('ERROR: ' + error);
		} else if(typeof callback === 'function') {
 			callback(body);
 		}
	});
};

var getRestaurantCuisines = function(callback) {
	request({
		method: get,
		url: url + 'cuisines',
		headers: {
			'user-key': userKey
		},
		qs: {
			lat: lat,
			lon: lon,
			city_id: city_id,
			count: count
		}
	}, function(error, response, body) {
		if(error) {
			 console.error('ERROR: ' + error);
	 	} else if(typeof callback === 'function') {
			callback(body);
		}
	});
};

var getRestaurantEstablishments = function(callback) {
	request({
		method: get,
		url: url + 'establishments',
		headers: {
			'user-key': userKey
		},
		qs: {
			lat: lat,
			lon: lon,
			city_id: city_id,
		}
	}, function(error, response, body) {
		if(error) {
			 console.error('ERROR: ' + error);
	  } else if(typeof callback === 'function') {
			callback(body);
		}
	});
};

var getRestaurantGeoCode = function(callback) {
	request({
		method: get,
		url: url + 'geocode',
		headers: {
			'user-key': userKey
		},
		qs: {
			lat: lat,
			lon: lon,
			city_id: city_id,
		}
	}, function(error, response, body) {
		if(error) {
			 console.error('ERROR: ' + error);
		} else if(typeof callback === 'function') {
			callback(body);
		}
	});
};

var getRestaurantLocationDetails = function(callback) {
	request({
		method: get,
		url: url + 'location_details',
		headers: {
			'user-key': userKey
		},
		qs: {
			entity_id: entity_id,
			entity_type: entity_type,
		}
	}, function(error, response, body) {
		if(error) {
			 console.error('ERROR: ' + error);
		} else if(typeof callback === 'function') {
			callback(body);
		}
	});
};

var getRestaurantLocation = function(callback) {
	request({
		method: get,
		url: url + 'locations',
		headers: {
			'user-key': userKey
		},
		qs: {
			query: query,
			lat: lat,
			lon: lon,
			count: count,
		}
	}, function(error, response, body) {
		if(error) {
			 console.error('ERROR: ' + error);
		} else if(typeof callback === 'function') {
			callback(body);
		}
	});
};

var getRestaurantDailyMenu = function(callback) {
	request({
		method: get,
		url: url + 'dailymenu',
		headers: {
			'user-key': userKey
		},
		qs: {
			res_id: res_id,
		}
	}, function(error, response, body) {
		if(error) {
			 console.error('ERROR: ' + error);
		} else if(typeof callback === 'function') {
			callback(body);
		}
	});
};

var getRestaurant = function(callback) {
	request({
		method: get,
		url: url + 'restaurant',
		headers: {
			'user-key': userKey
		},
		qs: {
			res_id: res_id,
		}
	}, function(error, response, body) {
		if(error) {
			 console.error('ERROR: ' + error);
		} else if(typeof callback === 'function') {
			callback(body);
		}
	});
};

var getRestaurantReview = function(callback) {
	request({
		method: get,
		url: url + 'reviews',
		headers: {
			'user-key': userKey
		},
		qs: {
			start: start,
			res_id: res_id,
			count: count,
		}
	}, function(error, response, body) {
		if(error) {
			 console.error('ERROR: ' + error);
		} else if(typeof callback === 'function') {
			callback(body);
		}
	});
};

var getRestaurantSearch = function(callback) {
	request({
		method: get,
		url: url + 'search',
		headers: {
			'user-key': userKey
		},
		qs: {
			entity_id: entity_id,
			entity_type: entity_type,
			q: q,
			start: start,
			count: count,
			lat: lat,
			lon: lon,
			radius: radius,
			cuisines: cuisines,
			establishment_type: establishment_type,
			collection_id: collection_id,
			category: category,
			sort: sort,
			order: order,

		}
	}, function(error, response, body) {
		if(error) {
			 console.error('ERROR: ' + error);
		} else if(typeof callback === 'function') {
			callback(body);
		}
	});
};

//XE functions
var getXEcurrenciesList = function(callback) {
	request({
		method: get,
		url: xeUrl + 'currencies.json',
		headers: {
      authorization: auth
    },
    qs: {
    }
	}, function(error, response, body) {
		if(error) {
			 console.error('ERROR: ' + error);
		} else if(typeof callback === 'function') {
			callback(body);
		}
	});
};

var getXEconvertFrom = function(callback) {
	request({
		method: get,
		url: xeUrl + 'convert_from.json',
		headers: {
      authorization: auth
    },
    qs: {
      from: isoFrom,
      to: isoTo,
      amount: amount
    }
	}, function(error, response, body) {
		if(error) {
			 console.error('ERROR: ' + error);
		} else if(typeof callback === 'function') {
			callback(body);
		}
	});
};

var getXEconvertTo = function(callback) {
	request({
		method: get,
		url: xeUrl + 'convert_to.json',
		headers: {
      authorization: auth
    },
    qs: {
      to: isoTo,
      from: isoFrom,
      amount: amount
    }
	}, function(error, response, body) {
		if(error) {
			 console.error('ERROR: ' + error);
		} else if(typeof callback === 'function') {
			callback(body);
		}
	});
};

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
	res.send('Hello World!');
});

//Zomato API endpoints
app.get('/categories', function(req, res) {
	getRestaurantCategories(function(body){
		res.send(body);
	});
});

app.get('/cities', function(req, res) {
	getRestaurantCities(function(body){
		res.send(body);
	});
});

app.get('/collections', function(req, res) {
	getRestaurantCollections(function(body){
		res.send(body);
	});
});

app.get('/cuisines', function(req, res) {
	getRestaurantCuisines(function(body){
		res.send(body);
	});
});

app.get('/establishments', function(req, res) {
	getRestaurantEstablishments(function(body){
		res.send(body);
	});
});

app.get('/geocode', function(req, res) {
	getRestaurantGeoCode(function(body){
		res.send(body);
	});
});

app.get('/location_details', function(req, res) {
	getRestaurantLocationDetails(function(body){
		res.send(body);
	});
});

app.get('/locations', function(req, res) {
	getRestaurantLocation(function(body){
		res.send(body);
	});
});

app.get('/dailymenu', function(req, res) {
	getRestaurantDailyMenu(function(body){
		res.send(body);
	});
});

app.get('/restaurant', function(req, res) {
	getRestaurant(function(body){
		res.send(body);
	});
});

app.get('/reviews', function(req, res) {
	getRestaurantReview(function(body){
		res.send(body);
	});
});

app.get('/search', function(req, res) {
	getRestaurantSearch(function(body){
		res.send(body);
	});
});

//XE API endpoints
app.get('/currencies-list', function(req, res) {
	getXEcurrenciesList(function(body){
		res.send(body);
	});
});

app.get('/convert-from', function(req, res) {
	getXEconvertFrom(function(body){
		res.send(body);
	});
});

app.get('/convert-to', function(req, res) {
	getXEconvertTo(function(body){
		res.send(body);
	});
});

app.listen(3000, function() {
	console.log('App listening on port 3000');
});