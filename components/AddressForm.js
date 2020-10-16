import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import styled from 'styled-components'

import { getCoordinatesByAddress } from '../services/Geocoding'
import { Input } from './Input'

const SubmitButton = styled.button`
  height: 100%;
  border: 0;
  background: #0071e3;
  color: white;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  padding: 0 12px;

  &:disabled {
    background: silver;
  }
`

export const AddressForm = () => {
  const router = useRouter()
  const [address, setAddress] = useState('')
  const { refetch: fetchCoordinates } = useQuery(
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
      router.push(`/${coordinates.lat}/${coordinates.lng}`)
    } catch (e) {}
  }

  return (
    <form onSubmit={onSubmit}>
      <Input
        onChange={(event) => setAddress(event.target.value)}
        value={address}
        placeholder="Gebe eine Stadt ein"
      />
      <SubmitButton disabled={!address}>Suchen</SubmitButton>
    </form>
  )
}
