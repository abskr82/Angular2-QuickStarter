import { Injectable } from '@angular/core';

@Injectable()
export class MailService {
  messages = [
    'msg1',
    'msg2',
    'msg3',
    'msg4'
  ];
  constructor() {
  }
}
