import { normalizeProduct, getAllProductsQuery } from "../utils";
import { ProductConnection } from "../schema";
import { Product } from '@common/types/product';
import { ApiConfig } from "@common/types/api";

type ProductApiReturnType = {
    products: ProductConnection
};

const getAllProducts = async (config: ApiConfig): Promise<Product[]> =>{
    
    const { data } = await config.fetch<ProductApiReturnType>({
        query: getAllProductsQuery
    });

    // (normalize and return new data) -> map over [edges] on [productConnection] and return [node] or empty array
        const products = data.products.edges.map(({ node: product })=>{
            return normalizeProduct(product);
            }) ?? []
        ;
    // (normalize and return new data) -> map over [edges] on [productConnection] and return [node] or empty array
    
    return products;

};

export default getAllProducts;