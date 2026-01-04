import ProductCard from '../components/ProductCard'
import { useProductStore } from '../store/product'
import { Alert, CloseButton, Container, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  const { fetchProducts, products } = useProductStore()
  const [response, setResponse] = useState(null)
  
  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])
  return (
    <Container maxW={"container.xl"} py={12}>
        <VStack spaceY={8}>
            <Text
                fontSize={30}
                fontWeight={"bold"}
                bgGradient={"linear(to-r, cyan.400, blue.500)"}
                textAlign={"center"}
            >
                All Products 🚀 
            </Text>
            {products.length === 0 && <Text fontSize={'xl'} textAlign={'center'} fontWeight={'bold'}>
                No products available 😢 {" "}
                <Link to={"/create"}>
                    <Text as={"span"} shadow={'2xl'} shadowColor={'lime'}
                        _hover={{ textDecoration: 'underline' }}
                        color={'cyan.300'}
                    >
                        Create a product
                    </Text>
                </Link>
            </Text>}
            { response && (response.success ? 
                <Alert.Root status="success">
                    <Alert.Content>
                        <Alert.Indicator />
                        <Alert.Title>Success!</Alert.Title>
                        <Alert.Description>{response.message}</Alert.Description>
                    </Alert.Content>
                    <CloseButton pos="relative" top="-2" insetEnd="-2" onClick={() => setResponse(null)} />
                </Alert.Root> :
                <Alert.Root status="error">
                    <Alert.Content>
                        <Alert.Indicator />
                        <Alert.Title>Error!</Alert.Title>
                        <Alert.Description>{response.message}</Alert.Description>
                    </Alert.Content>
                    <CloseButton pos="relative" top="-2" insetEnd="-2" onClick={() => setResponse(null)} />
                </Alert.Root>
            )}
            <SimpleGrid
                columns={{
                    base: 1,
                    md: 2,
                    lg: 3
                }}
                spaceX={10} spaceY={10}
                w={'full'}
            >
                {products.map((product) => (
                    <ProductCard 
                        key={product._id}
                        product={product}
                        response={response}
                        setResponse={setResponse}
                    />
                ))}
            </SimpleGrid>
        </VStack>
    </Container>
  )
}

export default HomePage