import { share, tap, count, filter, map, take } from 'rxjs/operators';
import { Component } from '@angular/core';
import { BuySymbol } from '../../interfaces/buy-symbol';
import { shareReplay, retry } from 'rxjs/operators';
import { SymbolStateBuyListService } from '../../services/symbol-state-buy-list.service';

@Component({
  selector: 'buy-list',
  templateUrl: './buy-list.component.html',
  styleUrl: './buy-list.component.scss'
})
export class BuyListComponent {

  buySymbolData: BuySymbol[] = [];

  constructor(private symbolStateBuyListService: SymbolStateBuyListService) { }

  ngOnInit(): void {

    const s$ = this.symbolStateBuyListService
      .getRecommendedBuyList()
      .pipe(shareReplay(5),
        retry(3));

    s$.subscribe((data) => {
      this.buySymbolData = data;
    });
  }
}



