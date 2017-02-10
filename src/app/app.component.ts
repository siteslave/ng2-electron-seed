import { Component } from '@angular/core';
import * as os from 'os';
import * as crypto from 'crypto';
import * as numeral from 'numeral';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  myArch: string;
  myPlatform: string;
  myMD5: string;
  myHost: string;
  myCups: Array<{ model: string }> = [];
  myMem: string;
  myFreeMem: string;

  constructor() {
    this.myHost = os.hostname();
    this.myCups = os.cpus();
    this.myMem = numeral(os.totalmem()).format('0,0.00b');
    this.myFreeMem = numeral(os.freemem()).format('0,0.00b');
    this.myMD5 = crypto.createHash('md5').update('123456').digest('hex');
    this.myPlatform = os.platform();
    this.myArch = os.arch();
  }
}
