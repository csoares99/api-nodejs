import Plan from "../../app/models/plan";
import PriceTable from "../../app/models/priceTable";

export function getSimulationPlan(minutes: number, plan: Plan, priceTable: PriceTable) {
    const response = {
        valueWithPlan: 0,
        valueWithoutPlan: 0
    }

    if (minutes < plan.minutes) {
        response.valueWithPlan = 0;
        response.valueWithoutPlan = minutes * priceTable.minute_value;

        return response;
    } else {
        response.valueWithPlan = parseFloat(((minutes - plan.minutes) * priceTable.minute_value * 1.10).toFixed(2));
        response.valueWithoutPlan = parseFloat((minutes * priceTable.minute_value).toFixed(2));

        return response;
    }
}