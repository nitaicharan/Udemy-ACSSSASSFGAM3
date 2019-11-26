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
import { StoryComponent } from './container/story/story.component';
import { HomesComponent } from './container/homes/homes.component';
import { GalleryComponent } from './container/gallery/gallery.component';
import { FooterComponent } from './container/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    HeaderComponent,
    SidebarComponent,
    RealtorsComponent,
    FeaturesComponent,
    StoryComponent,
    HomesComponent,
    GalleryComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexModule,
    GridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
