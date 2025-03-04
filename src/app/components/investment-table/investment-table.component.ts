import { Component, Input, input } from '@angular/core';
import { InvestmentList } from '../../investment.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-investment-table',
  imports: [CommonModule],
  templateUrl: './investment-table.component.html',
  styleUrl: './investment-table.component.scss',
})
export class InvestmentTableComponent {
  @Input() list?: InvestmentList;
}
