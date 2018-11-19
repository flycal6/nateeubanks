import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule, MatIconModule, MatButtonModule, MatSidenavModule, MatCardModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { UpcomingShowsComponent } from './upcoming-shows/upcoming-shows.component';
import { FooterComponent } from './footer/footer.component';
import { PastShowsComponent } from './past-shows/past-shows.component';
import { HomeComponent } from './home/home.component';

// twitter timeline
import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';
import { GalleryComponent } from './gallery/gallery.component';
import { NotFoundComponent } from './not-found/not-found.component';

// services
import { PerformanceService } from './performance.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [AppComponent, NavbarComponent, ReviewsComponent, UpcomingShowsComponent, FooterComponent, PastShowsComponent, HomeComponent, GalleryComponent, NotFoundComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FlexLayoutModule,
        BrowserAnimationsModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatSidenavModule,
        MatCardModule,
        NgxTwitterTimelineModule.forRoot()
    ],
    providers: [
        PerformanceService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
