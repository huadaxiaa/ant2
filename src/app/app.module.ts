import { ToastrModule, ToastrService } from 'ngx-toastr';

import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainService } from './main.service';
import { NavComponent } from './nav/nav.component';
import { UnitComponent } from './unit-tabs/unit/unit.component';
import { UnitTabsComponent } from './unit-tabs/unit-tabs.component';
import { GroupTabsComponent } from './group-tabs/group-tabs.component';
import { HomeComponent } from './home/home.component';
import { MaterialNavComponent } from './material-nav/material-nav.component';
import { TabComponent } from './material-nav/tab/tab.component';
import { EndInPipe } from './pipe/end-in.pipe';
import { FormatPipe } from './pipe/format.pipe';
import { UnitLineComponent } from './nav/unit-line/unit-line.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    UnitComponent,
    UnitTabsComponent,
    GroupTabsComponent,
    HomeComponent,
    MaterialNavComponent,
    TabComponent,
    EndInPipe,
    FormatPipe,
    UnitLineComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-left',
      preventDuplicates: false,
    })
  ],
  providers: [MainService, ToastrService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
