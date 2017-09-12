import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../app.service';


@Component({
  selector: 'app-popular-movie',
  templateUrl: './popular-movie.component.html',
  styleUrls: ['./popular-movie.component.css'],
  providers: [MoviesService]

})
export class PopularMovieComponent {
	p: number = 1;
	another='';
	constructor(private service: MoviesService) {}
	popularshow(){
		console.log("ishu tripathi");
		this.service.popularmovie().subscribe(another=>(	
		this.another=another));
		console.log(this.another);
	}
	// ngOnInit() {
	// 	this.popularshow();
	// }
}