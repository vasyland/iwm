export interface SymbolState {
    symbol: string;
    currentPrice: number;
    quoterlyDividendAmount: number;
    currentYield: number;
    upperYield: number;
    lowerYield: number;
    allowedToBuyYield: number;
    sellPointYield: number;
    recommendedAction: string;
    updatedOn: string;
}
