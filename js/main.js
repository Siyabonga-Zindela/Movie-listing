/*const url = 'https://streaming-availability.p.rapidapi.com/shows/%7Btype%7D/%7Bid%7D';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '345a38d621msh2c6a1b8a80b1364p14faefjsn4fde8af0a9a1',
		'x-rapidapi-host': 'streaming-availability.p.rapidapi.com',
		'Content-Type': 'application/json'
	}
};

fetch(url,options)
	.then((response => {
		response.json
		console.log(response);
	}))
*/	
const url = 'https://streaming-availability.p.rapidapi.com/shows/%7Btype%7D/%7Bid%7D';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '345a38d621msh2c6a1b8a80b1364p14faefjsn4fde8af0a9a1',
		'x-rapidapi-host': 'streaming-availability.p.rapidapi.com',
		'Content-Type': 'application/json'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}