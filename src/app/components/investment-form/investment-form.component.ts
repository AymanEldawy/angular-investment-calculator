import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Investment } from '../../investment.model';

@Component({
  selector: 'app-investment-form',
  imports: [FormsModule],
  templateUrl: './investment-form.component.html',
  styleUrl: './investment-form.component.scss',
})
export class InvestmentFormComponent {
  calculate = output<Investment>();
  initialInvestment = 0;
  duration = 0;
  expectedReturn = 0;
  annualInvestment = 0;

  addInvestment() {
    this.calculate.emit({
      initialInvestment: this.initialInvestment,
      duration: this.duration,
      expectedReturn: this.expectedReturn,
      annualInvestment: this.annualInvestment,
    });
    this.initialInvestment = 0;
    this.duration = 0;
    this.expectedReturn = 0;
    this.annualInvestment = 0;
  }
}
