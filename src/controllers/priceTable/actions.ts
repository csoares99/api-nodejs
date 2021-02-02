import { getAll } from "../../repositories/priceTable";

export async function getPriceTableList(req, response) {
    const priceTableList = await getAll();
    response.status(200).json(priceTableList);
}