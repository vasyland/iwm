import { Component } from '@angular/core';
import { Scenario } from '../../interfaces/scenario';
import { shareReplay, retry } from 'rxjs/operators';
import { UserScenarioService } from '../../services/user-scenario.service';

@Component({
  selector: 'scenarios',
  templateUrl: './scenarios.component.html',
  styleUrls: ['./scenarios.component.scss']
})
export class ScenariosComponent {
  title="Scenarios";
  scenarios: Scenario[] = [];
  isLoser = true;
  address = "Toronto, ON";
  isFavorite1: boolean = false;
  isFavorite2: boolean = false;
  isFavorite3: boolean = false;
  isFavorite4: boolean = false;
  isFavorite5: boolean = false;
  
  constructor(private userScenarioService: UserScenarioService) {}

  ngOnInit(): void {

    const s$ = this.userScenarioService
      .getUserScenarioList()
      .pipe(shareReplay(5),
        retry(3));

    s$.subscribe((data: Scenario[]) => {
      this.scenarios = data;
    });
  }

  
  onFavorite1Click(): void {
    console.log('1. isFavorite1 = ' + this.isFavorite1);
    this.isFavorite1 = !this.isFavorite1;

    if(this.isFavorite1 == true && this.isFavorite2 == true) {
      this.isFavorite1 = true;
    }
    
    if(this.isFavorite1 == false) {
      this.isFavorite2 = false;
      this.isFavorite3 = false;
      this.isFavorite4 = false;
      this.isFavorite5 = false;
    }
    
    console.log('3. isFavorite1 = ' + this.isFavorite1);   
  }

  onFavorite2Click(): void {
    this.isFavorite2 = !this.isFavorite2;
    if(this.isFavorite2){
        this.isFavorite1 = true;
    }
    
    if(this.isFavorite2 == false) {
      this.isFavorite3 = false;
      this.isFavorite4 = false;
      this.isFavorite5 = false;
    }
  }
  onFavorite3Click(): void {
    this.isFavorite3 = !this.isFavorite3;
    if(this.isFavorite3){
      this.isFavorite1 = true;
      this.isFavorite2 = true;
    }

    if(this.isFavorite3 == false) {
      this.isFavorite4 = false;
      this.isFavorite5 = false;
    }
  }


  onFavorite4Click(): void {
    this.isFavorite4 = !this.isFavorite4;
    if(this.isFavorite4){
      this.isFavorite1 = true;
      this.isFavorite2 = true;
      this.isFavorite3 = true;
    }

    if(this.isFavorite4 == false) {
      this.isFavorite5 = false;
    }

  }
  onFavorite5Click(): void {
    this.isFavorite5 = !this.isFavorite5;

    if(this.isFavorite5){
      this.isFavorite1 = true;
      this.isFavorite2 = true;
      this.isFavorite3 = true;
      this.isFavorite4 = true;
    }
  }


  onSave($event: any): void {
    this.isLoser = this.isLoser ? false : true;
    if (this.isLoser) 
      this.title = "Loser";
    else 
      this.title = "Winner";
    console.log("EVENT: ", $event);
    $event.stopPropagation();
  }

  onDivClicked(): void {
    console.log("DIV CLIECKED:");
  }

  /* Simple Event Filtering */ 
  onKeyUp(): void {
      console.log("KEY-Enter");
  }

  onKeyGetValue($event: any): void {
    console.log("Input Value is: " + $event.target.value);
  }


  /* Using Template Variables */
  onKeyEmail(email: string): void {
    console.log(email);
  }

  onKeyAddress() {
    console.log(this.address);
  }
}
