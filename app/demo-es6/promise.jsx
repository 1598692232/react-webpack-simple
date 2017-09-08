
/**
 * Created by EX-pengzhiliang001 on 2017-09-08.
 */
// var promise = new Promise(function(resolve, reject) {
// 	// ... some code
//
// 	if (/* 异步操作成功 */){
// 		resolve(value);
// 	} else {
// 		reject(error);
// 	}
// });

// promise.then(function(value) {
// 	// success
// }, function(error) {
// 	// failure
// });

function timeout(ms) {
	return new Promise((resolve, reject) => {
		setTimeout(resolve, ms, 'done');
	});
}

timeout(100).then((value) => {
	console.log(value);
});


var getJSON = function(url) {
	var promise = new Promise(function(resolve, reject){
		var client = new XMLHttpRequest();
		client.open("GET", url);
		client.onreadystatechange = handler;
		client.responseType = "json";
		client.setRequestHeader("Accept", "application/json");
		client.send();

		function handler() {
			if (this.readyState !== 4) {
				return;
			}
			if (this.status === 200) {
				resolve(this.response);
			} else {
				reject(new Error(this.statusText));
			}
		};
	});

	return promise;
};
//
// getJSON("http://www.baidu.com").then(function(json) {
// 	console.log('Contents: ' + json);
// }, function(error) {
// 	console.error('出错了', error);
// });

var p1 = new Promise(function (resolve, reject) {
	setTimeout(() => reject(new Error('fail')), 3000)
})

var p2 = new Promise(function (resolve, reject) {
	setTimeout(() => resolve(p1), 1000)
})

p2
  .then(result => console.log(result))
  .catch(error => console.log(error))



var promise = new Promise(function(resolve, reject) {
	a
});
promise.catch(function(error) {
	console.log(error);
});


var someAsyncThing = function() {
	return new Promise(function(resolve, reject) {
		// 下面一行会报错，因为x没有声明
		resolve(x + 2);
	});
};

someAsyncThing().then(function() {
	return someOtherAsyncThing();
}).catch(function(error) {
	console.log('oh no', error);
	// 下面一行会报错，因为y没有声明
	y + 2;
}).then(function() {
	console.log('carry on');
}).catch(function(error) {
	console.log('carry on', error);
});




const p3 = new Promise((resolve, reject) => {
	resolve('hello');
})
  .then(result => result)
  .catch(e => e);

const p4 = new Promise((resolve, reject) => {
	throw new Error('报错了');
})
  .then(result => result)
  .catch(e => e);

Promise.all([p3, p4])
  .then(result => console.log(result))
  .catch(e => console.log(e));




const p = Promise.race([
	fetch('/resource-that-may-take-a-while'),
	new Promise(function (resolve, reject) {
		setTimeout(() => reject(new Error('request timeout')), 5000)
	})
]);
p.then(response => console.log(response, 2222));
p.catch(error => console.log(error, 3333));



let thenable = {
	then: function(resolve, reject) {
		resolve(42);
	}
};

let p5 = Promise.resolve(thenable);
p5.then(function(value) {
	console.log(value);  // 42
});


// var p6= Promise.reject('出错了');
// 等同于
var p6 = new Promise((resolve, reject) => reject('出错了'))

p6.then(null, function (s) {
	console.log(s, 'p6p6p6p6')
});
// 出错了