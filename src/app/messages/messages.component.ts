import { Component, OnInit } from '@angular/core';
import { PusherService } from '../services/pusher.service';
import { MessageService } from '../services/message.service';
import { Message } from '../models/message';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})

export class MessagesComponent implements OnInit {
  messages: Array<Message>;

  constructor(private pusherService: PusherService, private messageService: MessageService, private message: Message) {
    this.messages = [];
  }

  ngOnInit() {
    this.getMessages();
    this.pusherService.messagesChannel.bind('client-new-message', (message) => {
      this.messages.push(message);
    })
  }

  getMessages(){
    this.messageService.getMessages().subscribe(
      messages => this.messages = messages,
    ),err => {
        console.log(err)
      }
  }

  sendMessage(username: string, text: string){
    let message = this.message;
    message.username = username;
    message.text = text;
    this.pusherService.messagesChannel.trigger('client-new-message', message);
    this.messageService.save(message).subscribe(message => {
      this.messages.push(message);
    },
    err => {
      console.log(err);
    });   
  }

}
