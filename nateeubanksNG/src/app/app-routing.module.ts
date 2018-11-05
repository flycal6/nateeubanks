import { HomeComponent } from './home/home.component';
import { UpcomingShowsComponent } from './upcoming-shows/upcoming-shows.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: HomeComponent },
    {path: 'reviews', component: ReviewsComponent},
    {path: 'upcoming-shows', component: UpcomingShowsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
