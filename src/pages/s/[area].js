import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import { getCoordinatesByAddress } from '../../services/Geocoding'

import {
  Section,
  Title,
  PageHead,
  NoResultsWrapper,
  LoadingIndicator,
  Footer,
} from '../../components'

import { useTranslation } from '../../i18n'

const Area = () => {
  const router = useRouter()
  const { t } = useTranslation()

  const { area } = router.query

  const { isLoading, data, isError } = useQuery(area, getCoordinatesByAddress, {
    refetchOnWindowFocus: false,
    enabled: area,
    retry: false,
  })

  useEffect(() => {
    if (!data) {
      return
    }
    router.push(
      {
        pathname: '/result',
        query: {
          coords: [data.lat, data.lng],
        },
      },
      `/s/${area}`,
      {
        shallow: true,
      }
    )
  }, [data])

  if (isError) {
    return (
      <>
        <PageHead title={t('result.errorTitle')} />
        <NoResultsWrapper>
          <Section>
            <Title>{t('result.errorHeadline')}</Title>
          </Section>
        </NoResultsWrapper>

        <Footer />
      </>
    )
  }

  if (isLoading) {
    return (
      <>
        <PageHead title={t('result.loadingTitle')} />
        <LoadingIndicator />

        <Footer />
      </>
    )
  }

  return null
}

export default Area
