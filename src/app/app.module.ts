import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

//for material component animations
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//for material toolbar
import {MatToolbarModule} from '@angular/material/toolbar';

//for mat expansion panel
import {MatExpansionModule} from '@angular/material/expansion';

//for mat form field
import { MatFormFieldModule } from '@angular/material/form-field'

//for matInput
import { MatInputModule } from '@angular/material/input';

//for mat button
import {MatButtonModule} from '@angular/material/button';

//for ngModel
import { FormsModule } from '@angular/forms';

//for mat card
import {MatCardModule} from '@angular/material/card';

//for HttpClient
import { HttpClientModule } from '@angular/common/http';
import { NoteService } from './note.service';
 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [NoteService ],
  bootstrap: [AppComponent]//,HeaderComponent]
})
export class AppModule { }
