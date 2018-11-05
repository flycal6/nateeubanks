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

@NgModule({
    declarations: [AppComponent, NavbarComponent, ReviewsComponent, UpcomingShowsComponent, FooterComponent, PastShowsComponent, HomeComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FlexLayoutModule,
        BrowserAnimationsModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatSidenavModule,
        MatCardModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
