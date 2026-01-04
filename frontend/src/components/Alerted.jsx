import { Alert, CloseButton } from '@chakra-ui/react'
import React from 'react'

const Alerted = ({response, setResponse, status}) => {
  return (
    <>
        <Alert.Root status={status}>
            <Alert.Content>
                <Alert.Indicator />
                <Alert.Title>{`${status.charAt(0).toUpperCase() + status.slice(1)}!`}</Alert.Title>
                <Alert.Description>{response.message}</Alert.Description>
            </Alert.Content>
            <CloseButton pos="relative" top="-2" insetEnd="-2" onClick={() => setResponse(null)} />
        </Alert.Root>
    </>
  )
}

export default Alerted