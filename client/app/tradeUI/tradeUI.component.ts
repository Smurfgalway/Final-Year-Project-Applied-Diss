import {Component} from '@angular/core';
import {AppService} from '../trading.service';

@Component({
  selector: 'app-trade',
  templateUrl: './tradeUI.component.html',
  styleUrls: ['./tradeUi.component.css'],
  providers: [AppService]
})
export class DashboardComponent {}