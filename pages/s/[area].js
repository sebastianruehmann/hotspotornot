import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import { getCoordinatesByAddress } from '../../services/Geocoding'
import { Section, Title } from '../../components/Layout'
import { PageHead } from '../../components/PageHead'
import { NoResultsWrapper } from '../../components/NoResultsWrapper'
import { LoadingIndicator } from '../../components/LoadingIndicator'
import { Footer } from '../../components/Footer'

const Area = () => {
  const router = useRouter()

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
        <PageHead title="Fehler beim Laden" />
        <NoResultsWrapper>
          <Section>
            <Title>
              Leider gab es einen Fehler beim Abrufen der Daten des RKIs.
            </Title>
          </Section>
        </NoResultsWrapper>

        <Footer />
      </>
    )
  }

  if (isLoading) {
    return (
      <>
        <PageHead title="Laden..." />
        <LoadingIndicator />

        <Footer />
      </>
    )
  }

  return null
}

export default Area
