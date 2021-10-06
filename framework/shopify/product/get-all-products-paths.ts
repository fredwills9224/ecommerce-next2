import { ApiConfig } from "@common/types/api";
import { Product } from "@common/types/product";
import { ProductConnection } from "@framework/schema";
import getAllProductsPathsQuery from "@framework/utils/queries/get-all-products-paths";

// [Pick] is a global type that allows you to select an object with out providing every required field
    type ReturnType = {
        products: Pick<Product, 'slug'>[];
    };
// [Pick] is a global type that allows you to select an object with out providing every required field

const getAllProductsPaths = async (config: ApiConfig): Promise<ReturnType>=>{

    const { data } = await config.fetch<{products: ProductConnection}>({ 
        query: getAllProductsPathsQuery,
    });
    const products = data.products.edges.map( ({ node: { handle } })=> {
        return {
            slug: handle
        }
    });
    return { products };

};

export default getAllProductsPaths;