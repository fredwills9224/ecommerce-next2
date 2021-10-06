import { ProductOption, ProductVariant } from "./product";

interface Discount{
    value: number
}

export interface LineItem{
    
    id: string,
    variantId: string,
    productId: string,
    name: string,
    path: string,
    quantity: number,
    discounts: Discount[],
    options?: ProductOption[]
    variant: Partial<ProductVariant>

}

export interface Cart{
    
    id: string,
    createdAt: string,
    completedAt: string,
    currency: { code: string }
    taxesIncluded: boolean,
    // taxes, discounts excluded
        lineItemsSubtotalPrice: number,
    // taxes, discounts excluded
    // taxes, discounts included
        totalPrice: number,
    // taxes, discounts included
    lineItems: any[],
    discounts: Discount[]

}