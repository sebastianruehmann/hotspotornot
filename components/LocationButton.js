import React, { useEffect, useState } from 'react'
import { usePosition } from '../hooks/usePosition'
import { useRouter } from 'next/router'
import { Button } from './Button'
import { track } from '../helpers/track'

export const LocationButton = () => {
  const { coords, isIdle, isError, request } = usePosition()
  const [error, setError] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (coords) {
      track('Submitted current location')
      router
        .push(
          {
            pathname: '/result',
            query: { coords },
          },
          '/results'
        )
        .then(() => window.scrollTo(0, 0))
    }
  }, [coords])

  useEffect(() => {
    if (!isIdle && isError) {
      setError(true)
      setTimeout(() => setError(false), 3000)
    }
  }, [isIdle, isError])

  return (
    <Button
      onClick={request}
      isError={error}
      isLoading={isIdle}
      disabled={isIdle || error}
    >
      {isIdle
        ? 'Standort angefragt...'
        : error
        ? 'Standortabfrage nicht erfolgreich'
        : 'Lass dich orten'}
    </Button>
  )
}
