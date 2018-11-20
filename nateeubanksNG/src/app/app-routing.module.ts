import { HomeComponent } from './home/home.component';
import { UpcomingShowsComponent } from './upcoming-shows/upcoming-shows.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: HomeComponent },
    { path: 'reviews', component: ReviewsComponent },
    { path: 'upcoming-shows', component: UpcomingShowsComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
