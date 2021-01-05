import React from 'react'
import CategoryCompositionStyled from './CategoryCompositionStyled'
import { ProductCategories } from '../../data/productCategories'
import ProductsComposition from '../ProductComposition'

interface Props {
    category: string
}

export default function CategoryComposition(props: Props) {

    return (
        <CategoryCompositionStyled>
            {/* <div className="contain"> */}
                {ProductCategories.map((category, index) => {
                   return <ProductsComposition category={category.title} />
                })}
            {/* </div> */}
        </CategoryCompositionStyled>
    )
}