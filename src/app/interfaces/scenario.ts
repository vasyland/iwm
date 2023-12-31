import { ScenarioDetails } from "./scenario-details"

export interface Scenario {
  id: number
  userId: number
  scenarioName: string
  investedAmount: number
  availableCash: number
  createdOn: string
  updatedOn: any
  details: ScenarioDetails[]
}
