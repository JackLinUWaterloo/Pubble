var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');

var userKey = '46737798fd81f8e4919216ef9d61aa84';
var get = 'GET';
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

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/categories', function(req, res) {
	request({
		method: get,
		url: url + 'categories',
		headers: { 'user-key': userKey }
	}, function(error, response, body) {
		if(error) {
			 console.error('ERROR: ' + error);
		 }

		 res.send(body);
	});
});

app.get('/cities', function(req, res) {
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
		 }

		 res.send(body);
	});
});

app.get('/collections', function(req, res) {
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
		 }

		 res.send(body);
	});
});

app.get('/cuisines', function(req, res) {
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
		 }

		 res.send(body);
	});
});

app.get('/establishments', function(req, res) {
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
		 }

		 res.send(body);
	});
});

app.get('/geocode', function(req, res) {
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
		 }

		 res.send(body);
	});
});

app.get('/location_details', function(req, res) {
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
		 }

		 res.send(body);
	});
});

app.get('/locations', function(req, res) {
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
		 }

		 res.send(body);
	});
});

app.get('/dailymenu', function(req, res) {
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
		 }

		 res.send(body);
	});
});

app.get('/restaurant', function(req, res) {
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
		 }

		 res.send(body);
	});
});

app.get('/reviews', function(req, res) {
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
		 }

		 res.send(body);
	});
});

app.get('/search', function(req, res) {
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
		 }

		 res.send(body);
	});
});

app.listen(3000, function() {
	console.log('App listening on port 3000');
});
