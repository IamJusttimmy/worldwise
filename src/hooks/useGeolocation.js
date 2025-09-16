import { useState } from "react";

export function useGeolocation(defaultPosition = null) {
  const [isLoading, setIsLosading] = useState(false);
  const [position, setPosition] = useState(defaultPosition);
  const [error, setError] = useState(null);

  function getPosition() {
    if (!navigator.geolocation)
      return setError("Your browser does not support geolocation");

    setIsLosading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setIsLosading(false);
      },
      (error) => {
        setError(error.message);
        setIsLosading(false);
      }
    );
  }

  return { isLoading, position, error, getPosition };
}
