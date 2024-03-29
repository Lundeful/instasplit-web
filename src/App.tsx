import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { useColorScheme, useLocalStorage } from '@mantine/hooks';
import { Hero } from './components/hero/Hero';
import { Route, Routes } from 'react-router-dom';
import { Splitter } from './components/splitter/Splitter';
import { useEffect } from 'react';
import { WithLayout } from './components/Layout';
import { NotFound } from './components/notfound/NotFound';
import { NotificationsProvider } from '@mantine/notifications';

// Primary color #f6416c
// Background color #1A1B1E

export enum RouteKeys {
  Home = '/',
  Split = '/split',
  NotFound = '*',
}

function App() {
  const preferredColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: preferredColorScheme,
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) => {
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    document.querySelector("meta[name='theme-color']")?.setAttribute('content', colorScheme === 'dark' ? '#1A1B1E' : '#fff');
  }, [colorScheme]);

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme, primaryColor: 'pink' }} withGlobalStyles withNormalizeCSS>
        <NotificationsProvider autoClose={6000}>
          <WithLayout>
            <Routes>
              <Route path={RouteKeys.Home} element={<Hero />} />
              <Route path={RouteKeys.Split} element={<Splitter />} />
              <Route path={RouteKeys.NotFound} element={<NotFound />} />
            </Routes>
          </WithLayout>
        </NotificationsProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
