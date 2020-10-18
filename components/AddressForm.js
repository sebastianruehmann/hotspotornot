import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import styled from 'styled-components'

import { getCoordinatesByAddress } from '../services/Geocoding'
import { Input } from './Input'
import { Button } from './Button'

const SubmitButton = styled(Button)`
  color: white;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  padding: 0 12px 0 15px;

  &:disabled {
    background: silver;
  }
`

const Form = styled.form`
  display: flex;
`

export const AddressForm = () => {
  const router = useRouter()
  const [address, setAddress] = useState('')
  const { isLoading, refetch: fetchCoordinates } = useQuery(
    address,
    getCoordinatesByAddress,
    {
      enabled: false,
      refetchOnWindowFocus: false,
    }
  )

  const onSubmit = async (event) => {
    event.preventDefault()

    // TODO: handle errors properly.
    try {
      const coordinates = await fetchCoordinates(address)
      router
        .push(`/${coordinates.lat}/${coordinates.lng}`)
        .then(() => window.scrollTo(0, 0))
    } catch (e) {}
  }

  return (
    <Form onSubmit={onSubmit}>
      <Input
        onChange={(event) => setAddress(event.target.value)}
        value={address}
        placeholder="Gib deinen Ort ein..."
      />
      <SubmitButton isLoading={isLoading} disabled={!address}>
        {isLoading ? 'Lädt...' : 'Suchen'}
      </SubmitButton>
    </Form>
  )
}
