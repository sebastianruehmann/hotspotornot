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
    if (!coords) {
      return
    }

    track('Submitted current location')
    router
      .push(
        {
          pathname: '/result',
          query: { coords },
        },
        '/result'
      )
      .then(() => window.scrollTo(0, 0))
  }, [coords])

  useEffect(() => {
    if (!isIdle && isError) {
      setError(true)
      setTimeout(() => setError(false), 3000)
    }
  }, [isIdle, isError])

  const makeButtonText = () => {
    if (isIdle) {
      return 'Standort angefragt...'
    }

    if (error) {
      return 'Standortabfrage nicht erfolgreich'
    }

    return 'Lass dich orten'
  }

  return (
    <Button
      onClick={request}
      isError={error}
      isLoading={isIdle}
      disabled={isIdle || error}
    >
      {makeButtonText()}
    </Button>
  )
}
