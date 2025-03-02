import * as React from 'react';
import * as ScreenOrientation from 'expo-screen-orientation';

export function useScreenOrientation() {
  const [orientation, setOrientation] = React.useState<ScreenOrientation.Orientation>();

  React.useEffect(() => {
    ScreenOrientation.getOrientationAsync().then(setOrientation);

    const subscription = ScreenOrientation.addOrientationChangeListener(event => {
      setOrientation(event.orientationInfo.orientation);
    });

    return () => {
      ScreenOrientation.removeOrientationChangeListener(subscription);
    };
  }, []);

  const isPortrait =
    orientation === ScreenOrientation.Orientation.PORTRAIT_UP ||
    ScreenOrientation.Orientation.PORTRAIT_DOWN;

  const isLandscape =
    orientation === ScreenOrientation.Orientation.LANDSCAPE_LEFT ||
    ScreenOrientation.Orientation.LANDSCAPE_RIGHT;

  return { orientation, isPortrait, isLandscape };
}
