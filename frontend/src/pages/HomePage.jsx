import ProductCard from '../components/ProductCard'
import { useProductStore } from '../store/product'
import { Alert, CloseButton, Container, SimpleGrid, Spinner, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  const { fetchProducts, products, loading, fetchStatus } = useProductStore()
  const [response, setResponse] = useState(null)
  
  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  return (
    <Container maxW={"1170px"} py={12}>
        {fetchStatus === 500 ? <Text textAlign={'center'}>Bitiful server is offline 🤖</Text> :
        <VStack spaceY={8}>
            <Text
                fontSize={30}
                fontWeight={"bold"}
                bgGradient={"linear(to-r, cyan.400, blue.500)"}
                textAlign={"center"}
            >
                All Products 
            </Text>
            {loading ? <Spinner /> : products.length === 0 && <Text fontSize={'xl'} textAlign={'center'} fontWeight={'bold'}>
                No products available 😢 {" "}
                <Link to={"/create"}>
                    <Text as={"span"} shadow={'2xl'} shadowColor={'lime'}
                        _hover={{ textDecoration: 'underline' }}
                        color={'blue.500'}
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
                gap={10}
                alignItems={"start"}
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
    }
    </Container>
  )
}

export default HomePage