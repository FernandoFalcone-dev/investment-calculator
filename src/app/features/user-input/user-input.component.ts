import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../../services/investment.service';
import { InvestmentInput } from '../../models/investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  enteredInitialInvestment = signal('0');
  enteredAnnualInvestment = signal('0');
  enteredExpectedInvestment = signal('5');
  enteredDurationInvestment = signal('10');
  investmentObject: InvestmentInput | undefined;

  constructor(private investmentService: InvestmentService) {}

  onSubmit() {
    this.setInvestmentObject();
    this.investmentService.calculateInvestmentResults(this.investmentObject!);
    this.setFormInputsToDefault();
  }

  private setInvestmentObject(){
    this.investmentObject = {
      initialInvestment: +this.enteredInitialInvestment(),
      duration: +this.enteredDurationInvestment(),
      annualInvestment: +this.enteredAnnualInvestment(),
      expectedReturn: +this.enteredExpectedInvestment()
    }
  }

  private setFormInputsToDefault(){
    this.enteredInitialInvestment.set('0');
    this.enteredAnnualInvestment.set('0');
    this.enteredExpectedInvestment.set('5');
    this.enteredDurationInvestment.set('10');
  }
}
