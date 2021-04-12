import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicantHomePageComponent } from './Features/Applicant/applicant-home-page/applicant-home-page.component';
import { ApplicationComponent } from './Features/Applicant/application/application.component';
import { LoginComponent } from './Features/Authentication/login/login.component';
import { MapComponent } from './Features/Map/map/map.component';
import { SignupComponent } from './Features/Authentication/signup/signup.component';
import { EocDatabaseComponent } from './Features/database/eoc-database/eoc-database.component';
import { VolunteerDatabaseComponent } from './Features/database/volunteer-database/volunteer-database.component';
import { PageNotFoundComponent } from './Features/page-not-found/page-not-found.component';
import { MyNavbarComponent } from './Features/my-navbar/my-navbar.component';
import { DatabaseComponent } from './Features/database/database.component';
import { MyProfileComponent } from './Features/my-profile/my-profile.component';
import { AccountComponent } from './Features/account/account.component';
import { TaskComponent } from './Features/task/task.component';
import { EventComponent } from './Features/event/event.component';
import { ViewEventComponent } from './Features/event/view-event/view-event.component';
import { EditEventComponent } from './Features/event/edit-event/edit-event.component';
import { ValidateApplicationComponent } from './Features/validate-application/validate-application.component';
import { ViewValidateApplicationComponent } from './Features/validate-application/view-validate-application/view-validate-application.component';
import { CreateVolunteerComponent } from './Features/account/create-volunteer/create-volunteer.component';
import { CreateEOCComponent } from './Features/account/create-eoc/create-eoc.component';
import { ViewTaskComponent } from './Features/task/view-task/view-task.component';
import { EditTaskComponent } from './Features/task/edit-task/edit-task.component';
import { CreateTaskComponent } from './Features/task/create-task/create-task.component';
import { EditProfileComponent } from './Features/my-profile/edit-profile/edit-profile.component';
import { CreateEventComponent } from './Features/event/create-event/create-event.component';
import { ViewCreateVolunteerComponent } from './Features/account/create-volunteer/view-create-volunteer/view-create-volunteer.component';
import { ViewStatusComponent } from './Features/Applicant/view-status/view-status.component';
import { MenuComponent } from './Features/Applicant/menu/menu.component';
import { ScheduleComponent } from './Features/Applicant/application/schedule/schedule.component';
import { TestComponent } from './test/test.component';
import { AvailabilityComponent } from './Features/task/availability/availability.component';
import { GeneralMapComponent } from './Features/Map/general-map/general-map.component';
import { ViewProfileComponent } from './Features/my-profile/view-profile/view-profile.component';
import { FirstEOCComponent } from './Features/my-profile/first-eoc/first-eoc.component';
import { DontRouteGuard } from './Guards/dont-route.guard';
import { EditEOCComponent } from './Features/my-profile/edit-eoc/edit-eoc.component';
import { TaskEventComponent } from './Features/event/task-event/task-event.component';
import { VolunteerProfileComponent } from './Features/my-profile/volunteer-profile/volunteer-profile.component';
import { VolunteerScheduleComponent } from './Features/my-profile/volunteer-schedule/volunteer-schedule.component';
import { ChangePasswordComponent } from './Features/Authentication/change-password/change-password.component';
import { DeclinedApplicationComponent } from './Features/validate-application/view-validate-application/declined-application/declined-application.component';
import { ApplicantGuard } from './Guards/applicant.guard';
import { AdminGuard } from './Guards/admin.guard';
import { EOCGuard } from './Guards/eoc.guard';
import { MyvolunteerProfileComponent } from './Features/my-profile/myvolunteer-profile/myvolunteer-profile.component';
import { DeleteEventComponent } from './Dialogs/delete-event/delete-event.component';
import { ReApplyComponent } from './Features/my-profile/re-apply/re-apply.component';
import { PendingApplicationComponent } from './Features/validate-application/pending-application/pending-application.component';
import { ViewReapplyingApplicationComponent } from './Features/validate-application/reapply-application/view-reapplying-application/view-reapplying-application.component';
import { ReapplyApplicationComponent } from './Features/validate-application/reapply-application/reapply-application.component';
import { UpdateReapplyComponent } from './Features/validate-application/reapply-application/update-reapply/update-reapply.component';
import { AuthGuard } from './Guards/auth.guard';
import { ChatComponent } from './Features/chat/chat.component';



const routes: Routes = [
{path:'',component:LoginComponent},
//VolunteerTool
{path:'VolunteerTool', component:MyNavbarComponent,children:[
//Chat
{path:'Chat', component:ChatComponent},
//Map
{path:'Generalmap', component:GeneralMapComponent},
{path:'Map/:id', component:MapComponent},
//MyProfile
{path:'MyProfile',component:MyProfileComponent},
{path:'MyVolunteerProfile',component:MyvolunteerProfileComponent},
{path:'Generalmap/:id',component:ViewProfileComponent},
{path:'MyVolunteerProfile/Edit',component:VolunteerProfileComponent},
{path:'MyVolunteerProfile/Reapply',component:ReApplyComponent},
{path:'MyVolunteerProfile/Edit/Schedule', component:VolunteerScheduleComponent},
{path:'EOCFirst',component:FirstEOCComponent, canDeactivate:[DontRouteGuard]},
{path:'MyProfile/EditEOC', component:EditEOCComponent, canDeactivate:[DontRouteGuard]},

//Task
{path:'Task', component:TaskComponent},
{path:'Task/Event/:Eventid', component:CreateTaskComponent},
{path:'Task/Event', component:TaskEventComponent},
{path:'Task/:id', component:ViewTaskComponent},
{path:'Task/:id/Edit', component:EditTaskComponent},
{path:'Task/:id/Availability', component:AvailabilityComponent},
{path:'Task/:id/Availability/:volunteerId', component:MapComponent},
//Event
{path:'Event', component:EventComponent},
{path:'Event/Create', component:CreateEventComponent},
{path:'Event/:id', component:ViewEventComponent},
{path:'Event/:id/Edit', component:EditEventComponent},
{path:'Event/:id/Delete',component:DeleteEventComponent},
//{path:'Event/:id/Edit', component:EditEventComponent},
//Application
{path:'Application', component:ValidateApplicationComponent},
{path:'Application/PendingApplication', component:PendingApplicationComponent},
{path:'Application/Reapplying', component:ReapplyApplicationComponent},
{path:'Application/Reapplying/:id', component:ViewReapplyingApplicationComponent},
{path:'Application/PendingApplication/:id',component:ViewValidateApplicationComponent},
{path:'Application/PendingApplication/:id/Decline',component:DeclinedApplicationComponent},
{path:'Application/Reapplying/:id/Decline',component:UpdateReapplyComponent},

//Account/Admin
{path:'Account',component:AccountComponent},
{path:'Account/CreateVolunteer',component:CreateVolunteerComponent},
{path:'Account/CreateVolunteer/:id',component:ViewCreateVolunteerComponent},
{path:'Account/CreateEOC',component:CreateEOCComponent},
//Database
{path:'Database', component:DatabaseComponent, canActivate:[AdminGuard, AuthGuard]},
{path:'Database/EOCDatabase', component:EocDatabaseComponent},
{path:'Database/EOCDatabase/:id', component:ViewProfileComponent},
{path:'Database/VolunteerDatabase', component:VolunteerDatabaseComponent},
{path:'Database/VolunteerDatabase/:id', component:ViewProfileComponent},
  ]},


//Applicant
{path:'Applicant', component:MenuComponent,children:[
{path: 'HomePage', component:ApplicantHomePageComponent, },
{path:'HomePage/Application', component:ApplicationComponent,canDeactivate:[DontRouteGuard]},
{path:'HomePage/Application/Schedule', component:ScheduleComponent,canDeactivate:[DontRouteGuard]},
{path:'HomePage/Status', component:ViewStatusComponent},
{path:'HomePage/Application/Schedule', component:ScheduleComponent},
]},

//Confirmation 


//Authentication
{path:'Login', component:LoginComponent},
{path:'Signup', component:SignupComponent},
{path:'ChangePassword', component:ChangePasswordComponent},
{path:'Test', component:TestComponent},











{path:'**', component:PageNotFoundComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
