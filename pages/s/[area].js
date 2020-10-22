import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import { getCoordinatesByAddress } from '../../services/Geocoding'
import { Section, Title } from '../../components/Layout'
import { PageHead } from '../../components/PageHead'
import { NoResultsWrapper } from '../../components/NoResultsWrapper'
import { LoadingIndicator } from '../../components/LoadingIndicator'

const Area = (props) => {
  console.log(props)

  const router = useRouter()

  const { area } = router.query

  const { isLoading, data, isError } = useQuery(area, getCoordinatesByAddress, {
    refetchOnWindowFocus: false,
    enabled: area,
    retry: false,
  })

  console.log(isError)

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
          <Section wrapped>
            <Title>
              Leider gab es einen Fehler beim Abrufen der Daten des RKIs.
            </Title>
          </Section>
        </NoResultsWrapper>
      </>
    )
  }

  if (isLoading) {
    return (
      <>
        <PageHead title="Laden..." />
        <LoadingIndicator />
      </>
    )
  }

  return null
}

export default Area
