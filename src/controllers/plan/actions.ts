import { IPlan } from "../../app/models/plan";
import { getAll, insert } from "../../repositories/plan";
import { planSchema } from "../../schemas/plan";

export async function getAllPlans(req, response) {
    try {
        const plans = await getAll();
        response.status(200).json(plans);
    } catch (error) {

    }
}

export async function createPlan(req, response) {
    try {
        const plan: IPlan = req.body;
        const { error } = planSchema.validate(plan);

        if (error) response.status(400).json(error);

        await insert(plan);

        response.status(200).json('Plan has been created');
    } catch (error) {

    }
}