import {
  Box,
  Button,
  CloseButton,
  Dialog,
  Heading,
  HStack,
  Image,
  Portal,
  Spinner,
  Text,
} from '@chakra-ui/react'
import { BiEdit, BiTrash } from 'react-icons/bi'
import { useColorModeValue } from './ui/color-mode'
import { useProductStore } from '../store/product'
import { useState } from 'react'
import UpdateProductDialog from './UpdateProductDialog'

const ProductCard = ({ product, response, setResponse }) => {
  const { deleteProduct } = useProductStore()

  const [deleting, setDeleting] = useState(false)
  const [editOpen, setEditOpen] = useState(false)
  const [open, setOpen] = useState(false)

  const handleDelete = async () => {
    setDeleting(true)
    const res = await deleteProduct(product._id)
    setResponse(res)
    setDeleting(false)
    setOpen(false)
  }

  return (
    <Box
      shadow="lg"
      rounded="lg"
      overflow="hidden"
      // transition="all 0.3s"
      // _hover={{ transform: 'scale(1.025)', shadow: 'xl' }}
      bg={useColorModeValue('gray.200', 'gray.800')}
    >
      <Image
        src={product.image}
        alt={product.name}
        h={40}
        w="full"
        objectFit="cover"
        transition="all 0.3s"
        _hover={{ transform: 'scale(1.1)', shadow: 'xl' }}
      />

      <Box p={4}>
        <Heading as="h3" size="md" mb={2}>
          {product.name}
        </Heading>

        <Text
          fontWeight="bold"
          fontSize="xl"
          color={useColorModeValue('gray.600', 'gray.200')}
          mb={4}
        >
          UGX {product.price.toLocaleString()}
        </Text>

        <HStack spaceX={2}>
          <Button
            bg="blue"
            color="white"
            _hover={{ bg: 'darkBlue', transform: 'scale(1.25)' }}
            onClick={() => setEditOpen(true)}
          >
            <BiEdit />
          </Button>

          <Button
            bg="red"
            color="white"
            onClick={() => setOpen(true)}
            _hover={{ bg: 'darkRed', transform: 'scale(1.25)' }}
          >
            <BiTrash />
          </Button>
        </HStack>
      </Box>

      <UpdateProductDialog
        open={editOpen}
        onOpenChange={(details) => setEditOpen(details.open)}
        product={product}
        setResponse={setResponse}
        response={response}
      />

      <Dialog.Root open={open} onOpenChange={(details) => setOpen(details.open)}>
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content>
              <Dialog.Header>
                <Dialog.Title>Delete Product</Dialog.Title>
              </Dialog.Header>

              <Dialog.Body>
                <Text>
                  Are you sure you want to delete the product{' '}
                  <strong>{product.name}</strong>?
                </Text>
              </Dialog.Body>

              <Dialog.Footer>
                <Dialog.ActionTrigger asChild>
                  <Button
                    variant="outline"
                    borderColor={useColorModeValue('black', 'lime')}
                    onClick={() => setOpen(false)}
                  >
                    Cancel
                  </Button>
                </Dialog.ActionTrigger>

                <Button
                  bg="red"
                  color="white"
                  onClick={handleDelete}
                  isDisabled={deleting}
                >
                  {deleting ? <Spinner size="sm" /> : 'Yes'}
                </Button>
              </Dialog.Footer>

              <Dialog.CloseTrigger asChild>
                <CloseButton size="sm" />
              </Dialog.CloseTrigger>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </Box>
  )
}

export default ProductCard