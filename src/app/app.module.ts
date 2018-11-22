import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatAutocompleteModule, MatInputModule, MatFormFieldModule, MatTabsModule} from '@angular/material';

import { AppRoutingModule, EntryApp, RoutableApp } from './app.routing';
import { KontakService } from './app.service';
import { AppGuardGuard } from './app-guard.guard';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FilterPipe } from './filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RoutableApp,
    EntryApp,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule
  ],
  entryComponents: [
    EntryApp
  ],
  providers: [KontakService,AppGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
