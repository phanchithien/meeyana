'use client'
import { IProduct } from '@/_types_';
import { Box, Image, Text, Grid } from '@chakra-ui/react'
import { useState } from 'react';

interface IProps {
    product: IProduct;
}

export default function ProductCard({
    product
}: IProps) {
    const [isHover, setIsHover] = useState(false);
    return (
        <Box
            w="auto"
            bg="bg.secondary"
            borderRadius="16px"
            overflow="hidden"
            padding="10px"
            alignItems="center"
            display="flex"
            flexDirection="column"
            justifyContent="center"
        >
            <Image
                onMouseEnter={() => {
                    setIsHover(true);
                }}
                onMouseLeave={() => {
                    setIsHover(false);
                }}
                className="hover:shadow-md"
                src={isHover ? product.srcBack : product.srcFront}
                w="auto"
                h="300px"
            />

            <Grid gap={1} className="w-full flex justify-end p-2">
                {product.color.map((color, index) => (
                    <Box px={2} w="16px" h="16px" bg={color}></Box>
                ))}
            </Grid>

            <Text color='gray'>{product.title}</Text>
            {product.priceSale ?
                <Box display="flex"
                >
                    <Text color='red' className='px-2'>{product.priceSale}</Text>
                    <Text as='del' className='px-2'>{product.price}</Text>
                </Box>
                : <Text>{product.price}</Text>
            }
        </Box>
    )
}
