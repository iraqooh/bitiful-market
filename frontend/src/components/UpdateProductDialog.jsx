import {
  Dialog,
  Button,
  CloseButton,
  Input,
  Portal,
  Spinner,
  VStack,
  Alert,
} from '@chakra-ui/react'
import { useColorModeValue } from '../components/ui/color-mode'
import { useProductStore } from '../store/product'
import { useState } from 'react'

const UpdateProductDialog = ({ open, onOpenChange, product, setResponse }) => {
  const { updateProduct } = useProductStore()

  const [updatedProduct, setUpdatedProduct] = useState({
    name: product?.name ?? '',
    price: product?.price ?? '',
    image: product?.image ?? '',
  })

  const [loading, setLoading] = useState(false)
  const [localResponse, setLocalResponse] = useState(null)

  const handleOpenChange = (details) => {
    if (details.open && product) {
      setUpdatedProduct({
        name: product.name,
        price: product.price,
        image: product.image,
      })
      setLocalResponse(null)
    }

    onOpenChange(details)
  }

  const handleUpdate = async () => {
    setLoading(true)
    const resp = await updateProduct(product._id, updatedProduct)
    setLoading(false)
    setLocalResponse(resp)
    setResponse(resp)

    if (resp?.success) {
      onOpenChange({ open: false })
    }
  }

  return (
    <Dialog.Root open={open} onOpenChange={handleOpenChange}>
        <Portal>
            <Dialog.Backdrop />
            <Dialog.Positioner>
            <Dialog.Content>

                <Dialog.Header>
                <Dialog.Title>Update Product</Dialog.Title>

                <Dialog.CloseTrigger asChild>
                    <CloseButton size="sm" />
                </Dialog.CloseTrigger>
                </Dialog.Header>

                <Dialog.Body>
                <VStack spaceY={4}>
                    {localResponse && !localResponse.success && (
                    <Alert.Root status="error">
                        <Alert.Content>
                        <Alert.Indicator />
                        <Alert.Description>
                            {localResponse.message}
                        </Alert.Description>
                        </Alert.Content>
                    </Alert.Root>
                    )}

                    <Input
                    placeholder="Product Name"
                    value={updatedProduct.name}
                    onChange={(e) =>
                        setUpdatedProduct({
                        ...updatedProduct,
                        name: e.target.value,
                        })
                    }
                    />

                    <Input
                    type="number"
                    placeholder="Price"
                    value={updatedProduct.price}
                    onChange={(e) =>
                        setUpdatedProduct({
                        ...updatedProduct,
                        price: e.target.value,
                        })
                    }
                    />

                    <Input
                    placeholder="Image URL"
                    value={updatedProduct.image}
                    onChange={(e) =>
                        setUpdatedProduct({
                        ...updatedProduct,
                        image: e.target.value,
                        })
                    }
                    />
                </VStack>
                </Dialog.Body>

                <Dialog.Footer>
                {/* CANCEL BUTTON */}
                <Dialog.ActionTrigger asChild>
                    <Button
                    variant="outline"
                    borderColor={useColorModeValue('black', 'lime')}
                    >
                    Cancel
                    </Button>
                </Dialog.ActionTrigger>

                {/* UPDATE BUTTON */}
                <Button
                    bg={useColorModeValue('black', 'lime')}
                    onClick={handleUpdate}
                    isDisabled={loading}
                >
                    {loading ? <Spinner size="sm" /> : 'Update'}
                </Button>
                </Dialog.Footer>

            </Dialog.Content>
            </Dialog.Positioner>
        </Portal>
        </Dialog.Root>
  )
}

export default UpdateProductDialog