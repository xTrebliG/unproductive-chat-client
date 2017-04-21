import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { PusherService } from './services/pusher.service';
import { MessageService } from './services/message.service'
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { Message } from './models/message';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    PusherService,
    MessageService,
    Message
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
