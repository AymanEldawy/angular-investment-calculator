import { Component, Input, input } from '@angular/core';
import { InvestmentList } from '../../investment.model';

@Component({
  selector: 'app-investment-table',
  imports: [],
  templateUrl: './investment-table.component.html',
  styleUrl: './investment-table.component.scss',
})
export class InvestmentTableComponent {
  @Input() list?: InvestmentList;
}
