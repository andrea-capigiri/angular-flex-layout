import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatToolbarModule,
    MatTabsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatRadioModule
} from '@angular/material';
import { AppComponent } from './app.component';
import { SandboxCardComponent } from './sandbox-card/sandbox-card.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        MatSelectModule,
        MatToolbarModule,
        MatTabsModule,
        MatButtonModule,
        MatInputModule,
        MatCardModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCheckboxModule,
        MatRadioModule,
        FlexLayoutModule],
    declarations: [
        AppComponent,
        SandboxCardComponent],
    bootstrap: [
        AppComponent]
})
export class AppModule { }