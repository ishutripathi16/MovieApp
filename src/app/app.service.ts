import { Injectable } from '@angular/core';
import { Http,Response,Headers } from '@angular/http';
import { FavMovie } from './FavMovie';
import 'rxjs/add/operator/map';

@Injectable()
export class MoviesService {

	myUrl='http://localhost:64990/api/values';

	favmovie: FavMovie = { movieid:0, posterpath: "abc", daterelease: "xyz", moviename: "ghi", overview: "jdj"};

	constructor (private http:Http) {}
	

	show(temp:string) {
		return this.http.get('https://api.themoviedb.org/3/search/movie?api_key=6bdcee6144d0ba0fe7f1da4c4175b340&query='+temp)
		.map(response =>response.json());
	}
	popularmovie() {
		return this.http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=6bdcee6144d0ba0fe7f1da4c4175b340')
		.map(response => response.json());
	}
	addtofav(fm:any) {
		delete this.favmovie.movieid;
		console.log(fm.release_date);
		this.favmovie.posterpath =  "https://image.tmdb.org/t/p/w300/"+fm.poster_path;
		this.favmovie.daterelease = fm.release_date;
		this.favmovie.moviename = fm.original_title;
		this.favmovie.overview = fm.overview;
		this.favmovie.movieid = fm.movie_id;
		this.http.post('http://localhost:64990/api/values',this.favmovie, {headers: new Headers({'Content-Type' : 'application/json'})}).subscribe();
		console.log(this.favmovie);
	}
	displayFavourite() {
		const myUrl = this.myUrl;
		return this.http.get(myUrl)
		.map(response => response.json());
	}
	delete(del: any) {
		console.log(del);
		return this.http.delete('http://localhost:64990/api/values/'+del,
		{headers: new Headers({'Content-Type' : 'application/json'})}).subscribe();
	}
	updateFavourite(mov,review)
	{
    	mov.overview=review;
    	return this.http.put('http://localhost:64990/api/values/'+mov.movieid,mov,
       	{headers: new Headers({'Content-Type':'application/json'})
    	}).subscribe();
	}
	private handleError(error: any) : Promise<any>{
		console.error('An error occured', error);
		return Promise.reject(error.message || error);
	}
}