// Angular Core Modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Third-party Modules
import { MaterialModule } from '@angular/material';
import { MdDataTableModule } from 'ng2-md-datatable';
import { FlexLayoutModule } from '@angular/flex-layout';

// -- Routing and App Modules
import { AppRoutingModule } from './app-routing.module';

// -- App Services
import { ApiService, AlertService, ActionLinkService } from './services';

// -- App Components
import { AppComponent } from './app.component';
import { AlertComponent } from './common/alert/alert.component';
import { HomeComponent } from './home/home.component';
import { EditActionLinkComponent } from './home/edit-actionlink.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    EditActionLinkComponent,
    SidebarComponent
  ],
  imports: [
    // Angular related
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,

    // Routing
    AppRoutingModule,

    // Third-party Libraries
    MaterialModule.forRoot(),
    FlexLayoutModule,
    MdDataTableModule
  ],
  entryComponents: [
    EditActionLinkComponent,
  ],
  providers: [
    ApiService,
    AlertService,
    ActionLinkService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
