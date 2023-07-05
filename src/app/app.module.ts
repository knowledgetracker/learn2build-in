import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { CourseListComponent } from './course-list/course-list.component';
import { FeaturesComponent } from './features/features.component';
import { CourseComponent } from './course/course.component';
import { HomeComponent } from './home/home.component';
import { CourseHeaderComponent } from './course-header/course-header.component';
import { RelatedCourseListComponent } from './related-course-list/related-course-list.component';
import { CourseInstructorComponent } from './course-instructor/course-instructor.component';
import { CourseContentComponent } from './course-content/course-content.component';
import { CourseSidebarComponent } from './course-sidebar/course-sidebar.component';
import { CourseDescriptionComponent } from './course-description/course-description.component';
import { CourseReviewsComponent } from './course-reviews/course-reviews.component';
import { CourseFaqComponent } from './course-faq/course-faq.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { ViewCourseComponent } from './view-course/view-course.component';
import { CourseDashboardComponent } from './course-dashboard/course-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CourseDashboardFilterComponent } from './course-dashboard-filter/course-dashboard-filter.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CourseDetailSidebarComponent } from './course-detail-sidebar/course-detail-sidebar.component';
import { ViewArticleComponent } from './view-article/view-article.component';
import { SafePipe } from './safe.pipe';
import { CommonModule } from '@angular/common';
import { CourseSectionContentComponent } from './course-section-content/course-section-content.component';
import { ListProjectsComponent } from './project/list-projects/list-projects.component';
import { ViewProjectComponent } from './project/view-project/view-project.component';
import { ProjectSearchPipe } from './project-search.pipe';
import { SpecializationListComponent } from './course/specialization-list/specialization-list.component';
import { SpecializationCourseListComponent } from './course/specialization-course-list/specialization-course-list.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { ViewUserComponent } from './user/view-user/view-user.component';
import { SearchUserPipe } from './user/search-user.pipe';
import { CurriculumComponent } from './course/curriculum/curriculum.component';
import { TaskBoardComponent } from './project/task-board/task-board.component';
import { ProfileComponent } from './user/profile/profile.component';
import { HomepageComponent } from './marketing/homepage/homepage.component';
import { CourseStatsWidgetComponent } from './course-stats-widget/course-stats-widget.component';
import { CurriculumListComponent } from './curriculum/curriculum-list/curriculum-list.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SlidesListComponent } from './slides/slides-list/slides-list.component';
import { ViewSlideComponent } from './slides/view-slide/view-slide.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    CourseListComponent,
    FeaturesComponent,
    CourseComponent,
    HomeComponent,
    CourseHeaderComponent,
    RelatedCourseListComponent,
    CourseInstructorComponent,
    CourseContentComponent,
    CourseSidebarComponent,
    CourseDescriptionComponent,
    CourseReviewsComponent,
    CourseFaqComponent,
    CourseCardComponent,
    ViewCourseComponent,
    CourseDashboardComponent,
    CourseDashboardFilterComponent,
    CourseDetailComponent,
    CourseDetailSidebarComponent,
    ViewArticleComponent,
    SafePipe,
    CourseSectionContentComponent,
    LoginComponent,
    ListProjectsComponent,
    ViewProjectComponent,
    ProjectSearchPipe,
    SpecializationListComponent,
    SpecializationCourseListComponent,
    UserListComponent,
    ViewUserComponent,
    SearchUserPipe,
    CurriculumComponent,
    TaskBoardComponent,
    ProfileComponent,
    RegisterComponent,
    HomepageComponent,
    CourseStatsWidgetComponent,
    CurriculumListComponent,
    SlidesListComponent,
    ViewSlideComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    NgxSpinnerModule,

    ToastrModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
