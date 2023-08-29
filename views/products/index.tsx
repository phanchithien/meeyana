'use client'
import { SimpleGrid } from '@chakra-ui/react';
import ProductCard from './components/ProductCard';
import { products } from '@/constants';

export default function ProductView() {
    return (
        <SimpleGrid columns={{ base: 1, lg: 4 }}>
            {products.map((product, index) => (<ProductCard
                product={product}
            />))}
        </SimpleGrid>
    )
}