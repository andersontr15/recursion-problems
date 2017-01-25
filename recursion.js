const print = message => console.log(message);

// RECURSIVE PROBLEMS FOR PRACTICE

// 1. factorial

const factorial = n => {
	if(n === 1) {
		return n 
	}
	else {
		return n * factorial(n - 1)
	} 
}

//print(factorial(5))


//  2. sum 

const sum = arr => {
	if(arr.length < 2) {
		return arr[0]
	}
	else {
		return arr[0] + sum(arr.slice(1))
	}
}

//print(sum([1,2,3,4,5]))

// const isEven = (n) => {
// 	if(n % 2 === 0) {
// 		return true; 
// 	}
// 	else 
// }

// 4. sumBelow

const sumBelow = n => {
	if(n === 0) {
		return n 
	}
	else {
		return n - 1 + sumBelow(n - 1)
	}
};	

//print sumBelow(7) ==> 21

// 5. Range 

const range = (x, y) => {
	if(y - x === 1) {
		return []
	}
	else {
		return [++x].concat(range(x,y))
	}
};

let result = range(2,9);

// print(result);


const exponent = (base, exp) => {
	if(exp === 1) {
		return base;
	}
	else {
		return base * exponent(base, --exp)
	}
}

// let ans = exponent(3,3);
// print(ans);

const reverse = word => {
	if(word.length === 1) {
		return word;
	}
	else {
		return reverse(word.substr(1, word.length - 1)) + word[0]
	}
}

let word = reverse('hello');

// 
	
// recursive compare 

const recursiveCompare = (word1, word2) => {
	if(word1.length === 1 && word2.length === 1) {
		return word1 === word2
	}
	else {
		return word1 === word2 ? recursiveCompare(word1.substr(1, word1.length), word2.substr(1, word2.length) ) : false
	}
};


// print(recursiveCompare('monkeys', 'monkeys'));

const createArray = str => {
	if(str.length === 1) {
		return str[0]
	}
	else {
		return [str[0]].concat(createArray(str.substr(1, str.length - 1)))
	}
};

// print(createArray('hello'))

const reverseArray = arr => {
	if(arr.length === 1) {
		return arr
	}
	else {
		return [arr.pop()].concat(reverseArray(arr))
	}
};

// print(reverseArray([1,2,3,4,5]))

const buildList = (value, length) => {
	if(length === 1) {
		return value;
	}
	else {
		return [value].concat(buildList(value, length-=1))
	}
};

// print(buildList(7,3))

const capitalizeWords = array => {
	if(array.length < 2) {
		return array.toUpperCase();
	}
	else {
		return [array[0].toUpperCase()] + capitalizeWords(array.slice(1))
	}
};

// print(capitalizeWords('hello'))

const capitalizeFirst = array => {
	if(array.length < 2) {
		return array[0][0].toUpperCase() + array[0].slice(1)
	}
	else {
		return [array[0][0].toUpperCase() + array[0].slice(1)].concat(capitalizeFirst(array.slice(1)))
	}
};

// print(capitalizeFirst(['the', 'dogs', 'are', 'walking']));

const recursiveMap = (array, callback) => {
	return array.length === 1 ? callback(array) : [callback(array[0])].concat(recursiveMap(array.slice(1), callback))
}

// print(recursiveMap([1,2,3], function(val) {
// 	return val * 2
// }));

const recursiveFilter = (array, callback) => {
	return array.length === 1 ? callback(array) : [callback(array[0]) === true ? array[0] : null].concat(recursiveFilter(array.slice(1), callback))
}

print(recursiveFilter([1,2,3,4], function(val) {
	return val > 2
})); 
