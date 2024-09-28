import { Component } from '@angular/core';
import { HeaderComponent } from './shared/header/header.component';
import { UserInputComponent } from "./features/user-input/user-input.component";
import { InvestmentResultComponent } from "./features/investment-result/investment-result.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserInputComponent, InvestmentResultComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
