import { Component, Input } from '@angular/core';
import { MovieSearchComponent } from '../movie-search/movie-search.component';

@Component({
  selector: 'app-home-of-movies',
  templateUrl: './home-of-movies.component.html',
  styleUrls: ['./home-of-movies.component.css']
})
export class HomeOfMoviesComponent {

	title = 'Movie Time';
	data: any;

  public setdata(data) {
  	this.data = data;
  	console.log(data);
  	console.log(this.data);
   }

   @Input() state: any;

	constructor() {}
	
	ngOnInit() {
		console.log(this.state);
	}

}
