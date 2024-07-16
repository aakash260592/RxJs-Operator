import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './reusable/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { CreationOperatorComponent } from './creation-operator/creation-operator.component';
import { TransformationOperatorComponent } from './transformation-operator/transformation-operator.component';
import { FilteringOperatorComponent } from './filtering-operator/filtering-operator.component';
import { ErrorHandlingOperatorComponent } from './error-handling-operator/error-handling-operator.component';
import { UtilityOperatorComponent } from './utility-operator/utility-operator.component';
import { JoinCreationOperatorComponent } from './join-creation-operator/join-creation-operator.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreationOperatorComponent,
    TransformationOperatorComponent,
    FilteringOperatorComponent,
    ErrorHandlingOperatorComponent,
    UtilityOperatorComponent,
    JoinCreationOperatorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
