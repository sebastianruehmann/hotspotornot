import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background: #0071e3;
  padding: 13px;
  border-radius: 4px;
  color: white;
  width: 100%;
  text-align: center;
  font-size: 1.3rem;
  border: 0;

  @media screen and (min-width: 450px) {
    width: 300px;
  }
`

export const ShareButton = () => {
  const [copied, setCopied] = React.useState(false)
  const [shared, setShared] = React.useState(false)

  const onClick = async () => {
    if (!navigator.share) {
      try {
        await navigator.clipboard.writeText('https://hotspotornot.de')
        setCopied(true)
        setTimeout(() => setCopied(false), 5000)
        return
      } catch (e) {}
    }

    try {
      await navigator.share({
        title: 'Hotspot or not?',
        url: 'https://hotspotornot.de',
      })

      setShared(true)
    } catch (e) {}

    setTimeout(() => setShared(false), 5000)
  }

  const makeText = () => {
    if (copied) {
      return 'Link in die Zwischenablage kopiert!'
    }

    if (shared) {
      return 'Danke fürs Weitersagen!'
    }

    return 'Empfehle "Hotspot or not?"'
  }

  return <Button onClick={onClick}>{makeText()}</Button>
}
