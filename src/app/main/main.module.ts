import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { ViewAppliedComponent } from './view-applied/view-applied.component';


@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    AboutComponent,
    CoursesComponent,
    GalleryComponent,
    CourseDetailsComponent,
    ProfileComponent,
    ViewAppliedComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class MainModule { }
