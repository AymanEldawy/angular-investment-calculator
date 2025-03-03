import { Component } from '@angular/core';
import { InvestmentFormComponent } from './components/investment-form/investment-form.component';
import { type Investment, type InvestmentList } from './investment.model';
import { InvestmentTableComponent } from './components/investment-table/investment-table.component';

@Component({
  selector: 'app-root',
  imports: [InvestmentFormComponent, InvestmentTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-investment-calculator';
  investmentList?: InvestmentList = [
    {
      year: 1,
      interest: 1870.5,
      valueEndOfYear: 2340.5,
      annualInvestment: 40,
      totalInterest: 1870.5,
      totalAmountInvested: 470,
    },
    {
      year: 2,
      interest: 10181.17,
      valueEndOfYear: 12561.67,
      annualInvestment: 40,
      totalInterest: 12051.67,
      totalAmountInvested: 510,
    },
    {
      year: 3,
      interest: 54643.29,
      valueEndOfYear: 67244.96,
      annualInvestment: 40,
      totalInterest: 66694.96,
      totalAmountInvested: 550,
    },
    {
      year: 4,
      interest: 292515.58,
      valueEndOfYear: 359800.54,
      annualInvestment: 40,
      totalInterest: 359210.54,
      totalAmountInvested: 590,
    },
    {
      year: 5,
      interest: 1565132.36,
      valueEndOfYear: 1924972.9,
      annualInvestment: 40,
      totalInterest: 1924342.9,
      totalAmountInvested: 630,
    },
    {
      year: 6,
      interest: 8373632.13,
      valueEndOfYear: 10298645.03,
      annualInvestment: 40,
      totalInterest: 10297975.03,
      totalAmountInvested: 670,
    },
    {
      year: 7,
      interest: 44799105.89,
      valueEndOfYear: 55097790.93,
      annualInvestment: 40,
      totalInterest: 55097080.93,
      totalAmountInvested: 710,
    },
    {
      year: 8,
      interest: 239675390.53,
      valueEndOfYear: 294773221.46,
      annualInvestment: 40,
      totalInterest: 294772471.46,
      totalAmountInvested: 750,
    },
    {
      year: 9,
      interest: 1282263513.35,
      valueEndOfYear: 1577036774.81,
      annualInvestment: 40,
      totalInterest: 1577035984.81,
      totalAmountInvested: 790,
    },
    {
      year: 10,
      interest: 6860109970.41,
      valueEndOfYear: 8437146785.21,
      annualInvestment: 40,
      totalInterest: 8437145955.21,
      totalAmountInvested: 830,
    },
    {
      year: 11,
      interest: 36701588515.68,
      valueEndOfYear: 45138735340.89,
      annualInvestment: 40,
      totalInterest: 45138734470.89,
      totalAmountInvested: 870,
    },
    {
      year: 12,
      interest: 196353498732.89,
      valueEndOfYear: 241492234113.79,
      annualInvestment: 40,
      totalInterest: 241492233203.79,
      totalAmountInvested: 910,
    },
  ];

  onCalculateInvestmentResults({
    initialInvestment,
    duration,
    expectedReturn,
    annualInvestment,
  }: Investment) {
    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: parseFloat(interestEarnedInYear.toFixed(2)),
        valueEndOfYear: parseFloat(investmentValue.toFixed(2)),
        annualInvestment: annualInvestment,
        totalInterest: parseFloat(totalInterest.toFixed(2)),
        totalAmountInvested: parseFloat(
          (initialInvestment + annualInvestment * year).toFixed(2)
        ),
      });
    }

    // return annualData;
    this.investmentList = annualData;
  }
}
