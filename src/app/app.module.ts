import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FlexModule } from '@angular/flex-layout/flex';
import { GridModule } from '@angular/flex-layout/grid';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { HeaderComponent } from './container/header/header.component';
import { SidebarComponent } from './container/sidebar/sidebar.component';
import { RealtorsComponent } from './container/realtors/realtors.component';
import { FeaturesComponent } from './container/features/features.component';
import { HomesComponent } from './container/homes/homes.component';
import { GalleryComponent } from './container/gallery/gallery.component';
import { FooterComponent } from './container/footer/footer.component';
import { FeatureComponent } from './container/features/feature/feature.component';
import { StoryPicturesComponent } from './container/story-pictures/story-pictures.component';
import { StoryContentComponent } from './container/story-content/story-content.component';
import { HomeComponent } from './container/homes/home/home.component';
import { CustomBreakPointsProvider } from './custom-breakpoints.service';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    HeaderComponent,
    SidebarComponent,
    RealtorsComponent,
    FeaturesComponent,
    HomesComponent,
    GalleryComponent,
    FooterComponent,
    FeatureComponent,
    StoryPicturesComponent,
    StoryContentComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexModule,
    FlexLayoutModule.withConfig({addOrientationBps: true}),
    GridModule
  ],
  providers: [CustomBreakPointsProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
