import { Box, Button, Heading, HStack, Image, Spinner, Text } from '@chakra-ui/react'
import { BiEdit, BiTrash } from 'react-icons/bi'
import { useColorModeValue } from './ui/color-mode'
import { useProductStore } from '../store/product'
import { useState } from 'react'

const ProductCard = ({product, response, setResponse}) => {
  const {deleteProduct} = useProductStore()
  const [deleting, setDeleting] = useState(false)
  const [updating, setUpdating] = useState(false)

  const onOpen = () => {}

  const handleDelete = async (id) => {
    setDeleting(true)
    response = await deleteProduct(id)
    setResponse(response)
    setDeleting(false)
  }

  const handleUpdate = async (id, updatedData) => {
    setUpdating(true)
  }

  return (
    <Box
        shadow={'lg'}
        rounded={'lg'}
        overflow={'hidden'}
        transition={'all 0.3s'}
        _hover={{ transform: 'scale(1.025)', shadow: 'xl'}}
        bg={useColorModeValue('gray.200', 'gray.800')}
    >
        <Image 
            src={product.image}
            alt={product.name}
            h={40}
            w={'full'}
            objectFit={'cover'}
        />
        <Box p={4}>
            <Heading as={'h3'} size={'md'} mb={2}>
                {product.name}
            </Heading>
            <Text fontWeight={'bold'} fontSize={'xl'} color={useColorModeValue('gray.600', 'gray.200')} mb={4}>
                UGX {product.price.toLocaleString()}
            </Text>
            <HStack spaceX={2}>
                <Button onClick={onOpen} bg={'blue'} 
                    color={'white'} 
                    _hover={{  
                        bg: 'darkBlue',
                        transform: 'scale(1.25)'
                    }}
                >
                    {updating ? <Spinner /> : <BiEdit />}
                </Button>
                <Button onClick={() => handleDelete(product._id)} bg={'red'} 
                    color={'white'} 
                    _hover={{  
                        bg: 'darkRed',
                        transform: 'scale(1.25)'
                    }}
                >
                    {deleting ? <Spinner /> : <BiTrash />}
                </Button>
            </HStack>
        </Box>
    </Box>
  )
}

export default ProductCard