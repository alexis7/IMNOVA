import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';




//Components
import { MatMenuModule } from '@angular/material/menu';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MenuComponent } from './component/menu/menu.component';
import { HomeComponent } from './component/home/home.component';
import { CreateUserComponent } from './component/create-user/create-user.component';
import { CreateContractsComponent } from './component/create-contracts/create-contracts.component';

import { CreateCompanyComponent } from './component/create-company/create-company.component';

import { ConsultContractsComponent } from './component/consult-contracts/consult-contracts.component';
import { OtpComponent } from './component/otp/otp.component';
import { DialogComponent } from './component/dialog/dialog.component';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogContractComponent } from './component/dialog-contract/dialog-contract.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    HomeComponent,
    CreateUserComponent,
    CreateContractsComponent,
    CreateCompanyComponent,
    ConsultContractsComponent,
    OtpComponent,
    DialogComponent,
    DialogContractComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatSliderModule,
    MatButtonModule,
    MatInputModule,
    FlexLayoutModule,
    MatCardModule,
    MatSidenavModule,
    MatRadioModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
