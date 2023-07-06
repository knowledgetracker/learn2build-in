import { CurriculumListComponent } from './curriculum/curriculum-list/curriculum-list.component';
import { HomepageComponent } from './marketing/homepage/homepage.component';
import { RegisterComponent } from './auth/register/register.component';
import { TaskBoardComponent } from './project/task-board/task-board.component';
import { CurriculumComponent } from './course/curriculum/curriculum.component';
import { ViewUserComponent } from './user/view-user/view-user.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { SpecializationListComponent } from './course/specialization-list/specialization-list.component';
import { SpecializationCourseListComponent } from './course/specialization-course-list/specialization-course-list.component';
import { ViewProjectComponent } from './project/view-project/view-project.component';
import { ListProjectsComponent } from './project/list-projects/list-projects.component';
import { LoginComponent } from './auth/login/login.component';
import { CourseSectionContentComponent } from './course-section-content/course-section-content.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CourseDashboardComponent } from './course-dashboard/course-dashboard.component';
import { ViewCourseComponent } from './view-course/view-course.component';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { CourseListComponent } from './course-list/course-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './user/profile/profile.component';
import { SlidesListComponent } from './slides/slides-list/slides-list.component';
import { ViewSlideComponent } from './slides/view-slide/view-slide.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'bootcamp', component: HomepageComponent },
  { path: "blog", component: CourseDashboardComponent },
  { path: "courses", component: CourseListComponent },
  { path: "curriculum", component: CurriculumListComponent },
  { path: "blog/:category", component: CourseDetailComponent },
  { path: "blog/:category/:sectionName", component: CourseSectionContentComponent },
  { path: "courses/:id/overview", component: CourseComponent },
  { path: "courses/:id/content", component: ViewCourseComponent },
  { path: "auth/login", component: LoginComponent },
  { path: "auth/register", component: RegisterComponent },
  { path: "slides", component: SlidesListComponent },
  { path: "slides/:id", component: ViewSlideComponent },
  { path: "projects", component: ListProjectsComponent },
  { path: "projects/:id", component: ViewProjectComponent },
  { path: "projects/:id/taskboard", component: TaskBoardComponent },
  { path: 'specializations', component: SpecializationListComponent },
  { path: 'specializations/:id', component: SpecializationCourseListComponent },

  {path:"users", component:UserListComponent},
  { path: "users/:id", component: ProfileComponent },
  { path: "course/:id", component: CurriculumComponent },
  { path: '', pathMatch: 'full', redirectTo: "blog" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
