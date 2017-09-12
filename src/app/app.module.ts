import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { AppComponent }  from './app.component';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { MovieListComponent } from './movie-list/movie-list.component';
import { PopularMovieComponent } from './popular-movie/popular-movie.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { DetailsComponent } from './details/details.component';
import { HomeOfMoviesComponent } from './home-of-movies/home-of-movies.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  imports: [ BrowserModule, FormsModule, NgxPaginationModule, HttpModule, RouterModule.forRoot([
  	// {
  	// 	path: '',
  	// 	redirectTo: 'home',
  	// 	pathMatch: 'full'
  	// },
    {
      path: 'Login',
      component: LoginpageComponent
    },
    {
      path: 'signup',
      component: SignupComponent
    },
    {
        path: 'Home',
        component: HomeOfMoviesComponent
    },
  	{
  		path: 'search',
  		component: MovieSearchComponent
  	},
    {
      path:'favourites',
      component: FavouritesComponent
    },
  	// {
  	// 	path:'Upcoming',
  	// 	component:PopularMovieComponent
  	// },
    {
      path: 'list',
      component: MovieListComponent
    }
  	])
],
  declarations: [ AppComponent, MovieListComponent, PopularMovieComponent, MovieSearchComponent, FavouritesComponent, DetailsComponent, HomeOfMoviesComponent, LoginpageComponent, SignupComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
