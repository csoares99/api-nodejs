import PriceTable from "../app/models/priceTable";

export async function getAll() {
    return await PriceTable.findAll<PriceTable>();
}

export async function getByOriginAndDestination(origin, destination) {
    return await PriceTable.findOne<PriceTable>({ where: { origin, destination } });
}