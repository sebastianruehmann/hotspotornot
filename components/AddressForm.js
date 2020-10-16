import { useState } from 'react'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import { getCoordinatesByAddress } from '../services/Geocoding'
import { Input } from './Input'

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
        placeholder="Enter a city"
      />
    </form>
  )
}
