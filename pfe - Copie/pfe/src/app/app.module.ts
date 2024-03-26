import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { ConsulterOffreComponent } from './offre-crud/consulter-offre/consulter-offre.component';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AjouterOffreComponent } from './offre-crud/consulter-offre/ajouter-offre/ajouter-offre.component';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ModifierOffreComponent } from './offre-crud/consulter-offre/modifier-offre/modifier-offre.component';
@NgModule({
  declarations: [
    AppComponent,
    ConsulterOffreComponent,
    AjouterOffreComponent,
    ModifierOffreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    ToastModule,
    TableModule,
    HttpClientModule,
    FormsModule,
    DialogModule,
    BrowserAnimationsModule,
    InputTextModule,
    InputNumberModule,
    InputTextareaModule,
    ReactiveFormsModule,
    ConfirmDialogModule
  ],
  providers: [MessageService,ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
