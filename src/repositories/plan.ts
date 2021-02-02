import Plan, { IPlan } from "../app/models/plan";
import { v4 } from 'uuid';


export async function getById(id: string) {
    return await Plan.findByPk(id);
}

export async function getByName(name: string) {
    return await Plan.findOne({ where: { name } });
}

export async function getAll() {
    return await Plan.findAll<Plan>();
}

export async function insert(plan: IPlan) {
    return Plan.create({ id: v4(), ...plan })
        .then()
        .catch(error => {
            throw (error);
        });
}