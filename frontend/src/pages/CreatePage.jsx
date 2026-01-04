import { useProductStore } from '../store/product'
import { useColorModeValue } from '../components/ui/color-mode'
import { Alert, CloseButton, Box, Button, Container, Heading, Input, Spinner, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: ""
  })
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState(null)
  const { createProduct } = useProductStore()

  const handleCreateNewProduct = async () => {
    setLoading(true)
    const resp = await createProduct(newProduct)
    setLoading(false)
    setResponse(resp)
    setNewProduct({ name: "", price: "", image: "" })
  }

  return <Container maxW={"1140px"}>
    <VStack spaceY={8}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
            Create New Product
        </Heading>
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
        <Box 
            w={"full"} bg={useColorModeValue("white", "gray.800")}
            p={6} rounded={"lg"} shadow={"md"}
        >
            <VStack spaceY={4}>
                <Input
                    placeholder='Product Name'
                    name='name'
                    value={newProduct.name}
                    onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                />
                <Input
                    placeholder='Price'
                    name='price'
                    type='number'
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                />
                <Input
                    placeholder='Image URL'
                    name='image'
                    value={newProduct.image}
                    onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value})}
                />
                <Button
                    w={"full"}
                    bg={useColorModeValue("black", "lime")}
                    onClick={handleCreateNewProduct}
                >
                    {loading ? <Spinner /> : "Submit"}
                </Button>
            </VStack>
        </Box>
    </VStack>
  </Container>
}

export default CreatePage