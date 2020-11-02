import React, { useEffect, useState } from 'react'
import { usePosition } from '../hooks/usePosition'
import { useRouter } from 'next/router'
import { Button } from './Button'
import { track } from '../helpers/track'
import { useTranslation } from '../i18n'

export const LocationButton = () => {
  const { coords, isIdle, isError, request } = usePosition()
  const [error, setError] = useState(false)
  const router = useRouter()
  const { t } = useTranslation()

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
      return t('locationButton.pending')
    }

    if (error) {
      return t('locationButton.error')
    }

    return t('locationButton.notInitiated')
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
