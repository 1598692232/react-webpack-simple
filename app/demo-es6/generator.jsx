/**
 * Created by EX-pengzhiliang001 on 2017-09-08.
 */
function* helloWorldGenerator() {
	yield 'hello';
	yield 'world';
	return 'ending';
}

var hw = helloWorldGenerator();
console.log(hw.next())
console.log(hw.next())
console.log(hw.next())
console.log(hw.next())


function* gen() {
	yield  123 + 456;
}
console.log(gen().next())


function* f() {
	console.log('执行了！')
}

var generator = f();

setTimeout(function () {
	generator.next()
}, 2000);


var arr = [1, [[2, 3], 4], [5, 6]];

var flat = function* (a) {
	var length = a.length;
	for (var i = 0; i < length; i++) {
		var item = a[i];
		if (typeof item !== 'number') {
			yield* flat(item);
		} else {
			yield item;
		}
	}
};

for (var f of flat(arr)) {
	console.log(f);
}


function* foo(x) {
	var y = 2 * (yield (x + 1));
	var z = yield (y / 3);
	return (x + y + z);
}

var a = foo(5);
a.next() // Object{value:6, done:false}
a.next() // Object{value:NaN, done:false}
a.next() // Object{value:NaN, done:true}

var b = foo(5);
b.next() // { value:6, done:false }
b.next(12) // { value:8, done:false }
b.next(13) // { value:42, done:true }



function* fibonacci() {
	let [prev, curr] = [0, 1];
	for (;;) {
		[prev, curr] = [curr, prev + curr];
		yield curr;
	}
}

for (let n of fibonacci()) {
	if (n > 1000) break;
	console.log(n);
}
