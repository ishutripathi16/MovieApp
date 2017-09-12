import { Component,Output,EventEmitter } from '@angular/core';
import { MoviesService } from '../app.service';
import { FavMovie } from '../FavMovie';

@Component({
	selector: 'app-movie-search',
	templateUrl: './movie-search.component.html',
	styleUrls: ['./movie-search.component.css'],
	providers: [MoviesService]
})
export class MovieSearchComponent {
	p: number = 1;
	temp='';
	first='';
	displayData: FavMovie;
	constructor(private service: MoviesService) {}
	
	@Output() event: EventEmitter<any> = new EventEmitter();
	show(){
		if (this.temp != '' && this.temp != undefined) {
			this.service.show(this.temp).subscribe(first=>{
				this.event.emit(first);
				// console.log(first)
				this.first=first});
		}
		else
		{
			alert("Please enter any word for your movie");
		}
	}
	
	// display() {
		// 	this.service.displayFavourite()
		// 	.subscribe(displayData => { this.displayData = displayData;
			// 	console.log(this.displayData);})
			// }
		}