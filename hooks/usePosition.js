import {useState} from 'react';

export function usePosition() {
  const [coords, setCoords] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isIdle, setIsIdle] = useState(false);

  const request = () => {
    setIsIdle(true)
    navigator.geolocation.getCurrentPosition(
      ({ coords: { longitude, latitude }}) => {
        setCoords([longitude, latitude])
        setIsIdle(false)
      },
      () => {
        setIsError(true)
        setIsIdle(false)
      }
    );
  }

  return { coords, isError, isIdle, request }
}
