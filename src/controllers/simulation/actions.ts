import { ISimulationRequest } from "../../app/models/simulation";
import { getById } from "../../repositories/plan";
import { getByOriginAndDestination } from "../../repositories/priceTable";
import { simulationSchema } from "../../schemas/simulate";
import { getSimulationPlan } from "../../services/simulation";

export async function simulationCallValue(req, res) {
    const request: ISimulationRequest = req.body;

    const { error } = simulationSchema.validate(request);
    if (error) res.status(400).json(error);

    const { minutes, id_plan, origin, destination } = request;

    const plan = await getById(id_plan);
    if (!plan) return res.status(400).json("Não foi possível encontrar o plano informado.");

    const priceTable = await getByOriginAndDestination(origin, destination);

    if (!priceTable) return res.status(400).json("Não existe um plano para este DDD");

    const response = getSimulationPlan(minutes, plan, priceTable);

    return res.status(200).json(response);
}