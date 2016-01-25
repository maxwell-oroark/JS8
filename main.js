var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];


// PROBLEM ONE

for (i = 0; i < 4; i++){
	console.log (animals[i]);
}

// PROBLEM TWO

for (i = 0; i < 4; i+=2){
	console.log (animals[i]);
}

// PROBLEM THREE

for (i=4; i >= 0; i--){
	console.log(animals[i])
}

// PROBLEM FOUR


for (i = 0; i < 5; i++){
	if (i === 0 || i === 4){
	console.log(animals[i])
	} else {
	   console.log(animals[i])
	   console.log(animals[i])
	}

}
