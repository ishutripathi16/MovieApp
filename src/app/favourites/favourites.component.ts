import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../app.service';
import { FavMovie } from '../FavMovie';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css'],
  providers: [MoviesService]
})
export class FavouritesComponent implements OnInit{

	data:any=[];
	displayData: Array<any>;
	constructor(private service: MoviesService) {}

  display() {
		this.service.displayFavourite()
		.subscribe(displayData => { this.displayData = displayData;
		console.log("favourites",this.displayData);})
	}
	ngOnInit() {
		this.display();
	}
	removeFavourite(movieid: number) {
		this.service.delete(movieid);
		var mov = this.displayData.find(f => f.movieid ==  movieid );
		const index = this.displayData.indexOf(mov);
		this.displayData.splice(index,1);
	}
	updateFavourite(mov:FavMovie,review:string){
    console.log(review);
    this.service.updateFavourite(mov,review);
}
}
