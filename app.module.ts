/*Angular Material*/
import {MatSortModule} from '@angular/material/sort';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule} from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatDividerModule} from '@angular/material/divider';
/*Angular Material*/

/*@angular*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations' ;
import {FormsModule} from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import {ReactiveFormsModule} from '@angular/forms'
import {CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import {AuthenticationService} from './Services/authentication.service'
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

//App
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EOCGuard } from './Guards/eoc.guard';
import { AdminGuard } from './Guards/admin.guard';
import { AuthGuard } from './Guards/auth.guard';
import { MapComponent } from './Features/Map/map/map.component';
import { ApplicantHomePageComponent } from './Features/Applicant/applicant-home-page/applicant-home-page.component';
import { ApplicationComponent } from './Features/Applicant/application/application.component';
import { LoginComponent } from './Features/Authentication/login/login.component';

import { ScheduleComponent } from './Features/Applicant/application/schedule/schedule.component';
import { MenuComponent } from './Features/Applicant/menu/menu.component';
import { SignupComponent } from './Features/Authentication/signup/signup.component';
import { TaskComponent } from './Features/task/task.component';
import { AccountComponent } from './Features/account/account.component';
import { DatabaseComponent } from './Features/database/database.component';
import { MyNavbarComponent } from './Features/my-navbar/my-navbar.component';
import { VolunteerDatabaseComponent } from './Features/database/volunteer-database/volunteer-database.component';
import { EocDatabaseComponent } from './Features/database/eoc-database/eoc-database.component';
import { MyProfileComponent } from './Features/my-profile/my-profile.component';
import { PageNotFoundComponent } from './Features/page-not-found/page-not-found.component';
import { TokenInterceptorService } from './Services/token-interceptor.service';
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
import { TestComponent } from './test/test.component';
import { AvailabilityComponent } from './Features/task/availability/availability.component';
import { GeneralMapComponent } from './Features/Map/general-map/general-map.component';
import { ViewProfileComponent } from './Features/my-profile/view-profile/view-profile.component';
import { DialogSignupComponent } from './Dialogs/dialog-signup/dialog-signup.component';
import { DialogLoginComponent } from './Dialogs/dialog-signup/dialog-login/dialog-login.component';
import { FirstEOCComponent } from './Features/my-profile/first-eoc/first-eoc.component';
import { EOCFirstDialogComponent } from './Dialogs/eocfirst-dialog/eocfirst-dialog.component';
import { EOCFirstDialog2Component } from './Dialogs/eocfirst-dialog2/eocfirst-dialog2.component';
import { EditEOCComponent } from './Features/my-profile/edit-eoc/edit-eoc.component';
import { CreateDialogComponent } from './Dialogs/create-dialog/create-dialog.component';
import { DeleteDialogComponent } from './Dialogs/delete-dialog/delete-dialog.component';
import { UpdateDialogComponent } from './Dialogs/update-dialog/update-dialog.component';
import { TaskEventComponent } from './Features/event/task-event/task-event.component';
import { EventTaskDialogComponent } from './Dialogs/event-task-dialog/event-task-dialog.component';
import { ApplicationdialogComponent } from './Dialogs/applicationdialog/applicationdialog.component';
import { VolunteerProfileComponent } from './Features/my-profile/volunteer-profile/volunteer-profile.component';
import { VolunteerScheduleComponent } from './Features/my-profile/volunteer-schedule/volunteer-schedule.component';
import { DeleteeventdialogComponent } from './Dialogs/deleteeventdialog/deleteeventdialog.component';
import { ChangePasswordComponent } from './Features/Authentication/change-password/change-password.component';
import { AcceptedDialogComponent } from './Dialogs/accepted-dialog/accepted-dialog.component';
import { DeclinedApplicationComponent } from './Features/validate-application/view-validate-application/declined-application/declined-application.component';
import { MyvolunteerProfileComponent } from './Features/my-profile/myvolunteer-profile/myvolunteer-profile.component';
import { AccountCreatedDialogComponent } from './Dialogs/account-created-dialog/account-created-dialog.component';
import { DuplicateDialogComponent } from './Dialogs/duplicate-dialog/duplicate-dialog.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { DeleteEventComponent } from './Dialogs/delete-event/delete-event.component';
import { VolunteerUpdateDialogComponent } from './Dialogs/volunteer-update-dialog/volunteer-update-dialog.component';
import { ReApplyComponent } from './Features/my-profile/re-apply/re-apply.component';
import { ReapplyApplicationComponent } from './Features/validate-application/reapply-application/reapply-application.component';
import { ViewReapplyingApplicationComponent } from './Features/validate-application/reapply-application/view-reapplying-application/view-reapplying-application.component';
import { PendingApplicationComponent } from './Features/validate-application/pending-application/pending-application.component';
import { UpdateReapplyComponent } from './Features/validate-application/reapply-application/update-reapply/update-reapply.component';
import { ViewStatusDialogComponent } from './Dialogs/view-status-dialog/view-status-dialog.component';
import { EOCCreatedialogComponent } from './Dialogs/eoccreatedialog/eoccreatedialog.component';
import { NotvalidTimeComponent } from './Dialogs/notvalid-time/notvalid-time.component';
import { ResetUserpasswordComponent } from './Features/Authentication/reset-userpassword/reset-userpassword.component';
import { ChatComponent } from './Features/chat/chat.component';
import { PictureUploadedComponent } from './Dialogs/picture-uploaded/picture-uploaded.component';




@NgModule({
  declarations: [
    //Dialogs
    DialogLoginComponent,
    DialogSignupComponent,
    EOCFirstDialogComponent,
    EOCFirstDialog2Component,
    CreateDialogComponent,
    DeleteDialogComponent,
    UpdateDialogComponent,
    EventTaskDialogComponent,
      //Dialogs
    AppComponent,
    MapComponent,
    ApplicantHomePageComponent,
    ApplicationComponent,
    LoginComponent,
    SignupComponent,
    ScheduleComponent,
    MenuComponent,
    TaskComponent,
    AccountComponent,
    DatabaseComponent,
    MyNavbarComponent,
    VolunteerDatabaseComponent,
    EocDatabaseComponent,
    MyProfileComponent,
    PageNotFoundComponent,
    EventComponent,
    ViewEventComponent,
    EditEventComponent,
    ValidateApplicationComponent,
    ViewValidateApplicationComponent,
    CreateVolunteerComponent,
    CreateEOCComponent,
    ViewTaskComponent,
    EditTaskComponent,
    CreateTaskComponent,
    EditProfileComponent,
    CreateEventComponent,
    ViewCreateVolunteerComponent,
    ViewStatusComponent,
    TestComponent,
    AvailabilityComponent,
    GeneralMapComponent,
    ViewProfileComponent,
    DialogLoginComponent,
    FirstEOCComponent,
    EOCFirstDialogComponent,
    EOCFirstDialog2Component,
    EditEOCComponent,
    CreateDialogComponent,
    DeleteDialogComponent,
    UpdateDialogComponent,
    TaskEventComponent,
    EventTaskDialogComponent,
    ApplicationdialogComponent,
    VolunteerProfileComponent,
    VolunteerScheduleComponent,
    DeleteeventdialogComponent,
    ChangePasswordComponent,
    AcceptedDialogComponent,
    DeclinedApplicationComponent,
    MyvolunteerProfileComponent,
    AccountCreatedDialogComponent,
    DuplicateDialogComponent,
    DeleteEventComponent,
    VolunteerUpdateDialogComponent,
    ReApplyComponent,
    ReapplyApplicationComponent,
    ViewReapplyingApplicationComponent,
    PendingApplicationComponent,
    UpdateReapplyComponent,
    ViewStatusDialogComponent,
    EOCCreatedialogComponent,
    NotvalidTimeComponent,
    ResetUserpasswordComponent,
    ChatComponent,
    PictureUploadedComponent,

 

  ],
  entryComponents:[EventTaskDialogComponent,DialogSignupComponent,DialogLoginComponent,EOCFirstDialogComponent,EOCFirstDialog2Component, CreateDialogComponent, DeleteDialogComponent, UpdateDialogComponent
                ,ApplicationdialogComponent,DeleteeventdialogComponent, AcceptedDialogComponent, AccountCreatedDialogComponent, DuplicateDialogComponent, VolunteerUpdateDialogComponent, ViewStatusDialogComponent
                ,EOCCreatedialogComponent,NotvalidTimeComponent,PictureUploadedComponent

  ],
  imports: [
  ///Angular Material
  MatDividerModule,
  MatTooltipModule,
  MatSortModule,
    MatButtonToggleModule,
    MatIconModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
      MatBadgeModule,
      MatButtonModule,
      MatSidenavModule,
      MatCardModule,
      MatCheckboxModule,
      MatTableModule, 
      MatDialogModule,
      MatFormFieldModule,
      MatGridListModule,
      MatInputModule,
      MatListModule,
      MatMenuModule,
      MatPaginatorModule,
      MatRadioModule,
      MatSlideToggleModule,
      MatTableModule,
      MatToolbarModule,
//End//
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule ,
    RouterModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    ReactiveFormsModule, 
    LeafletModule, ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: environment.production,
  // Register the ServiceWorker as soon as the app is stable
  // or after 30 seconds (whichever comes first).
  registrationStrategy: 'registerWhenStable:30000'
})

  ],
  providers: [AuthenticationService,EOCGuard, AdminGuard, AuthGuard, AppComponent,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
  
    }
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
