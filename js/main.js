const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '345a38d621msh2c6a1b8a80b1364p14faefjsn4fde8af0a9a1',
		'x-rapidapi-host': 'imdb236.p.rapidapi.com',
		'Content-Type': 'application/json'
	}
};


function fetchMovieData(){
	let eachMovieHTML= "";
	fetch("https://imdb236.p.rapidapi.com/api/imdb/cast/nm0000190/titles",options)
		.then((response => response.json()))
		.then((data => {
		const movieData = data;
		
		if(movieData){
			movieData.forEach(movie => {
				if(movie.primaryImage || movie.description){
					eachMovieHTML += `
				 <div class="movie-card">
          				<div class="image-container">
           					 <img src="${movie.primaryImage}" alt="Movie cover" />
            				<div class="movie-description">
								<p>
									${movie.description}
								</p>
              				      <div class="card-btn-wrapper"><button>Watch movie</button></div>
           				     </div>
          				</div>
        		 </div>
				`;
				}
				
			});
			
		}
		else{
			alert("Unable to fetch movie data.");
		}
		
		let moviesWrapper = document.querySelector(".movies-wrapper");

		if(moviesWrapper){
		moviesWrapper.innerHTML = eachMovieHTML;
		}
		
	}))

	
}
fetchMovieData();

	
	
