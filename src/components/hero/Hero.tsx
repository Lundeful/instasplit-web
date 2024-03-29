import { Container, Text, Button, useMantineTheme } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { Link } from 'react-router-dom';
import { RouteKeys } from '../../App';
import { Picker } from '../picker/Picker';
import useStyles from './Hero.styles';

export function Hero() {
  const { classes, cx } = useStyles();
  const theme = useMantineTheme();

  return (
    <div className={classes.wrapper}>
      <Container size={700} className={classes.inner}>
        <h1 className={classes.title}>
          Use{' '}
          <Text component='span' variant='gradient' gradient={{ from: '#f6416c', to: '#f86789' }} inherit>
            InstaSplit
          </Text>{' '}
          to show off your work in a whole new way.
        </h1>

        <Text className={classes.description} color='dimmed'>
          Split one image into multiple images with a perfect seam and create those amazing panoramas on Instagram.
        </Text>
        <Picker />

        <div className={classes.controls}>
          <>
            <Button
              component={Link}
              to={RouteKeys.Home}
              size='xl'
              variant='outline'
              className={cx(classes.control, classes.howToControl)}
              color={theme.colorScheme === 'dark' ? 'gray' : 'dark'}
              onClick={() =>
                showNotification({
                  title: 'What are you doing?',
                  message: 'The button said soon. Be patient and check back later',
                  icon: '🤨',
                  color: '#fff',
                })
              }
            >
              How to use (soon&trade;)
            </Button>
            {/* <Button
              component='a'
              // href='https://github.com/lundeful/instasplit'
              href='https://github.com/lundeful'
              size='xl'
              variant='outline'
              className={cx(classes.control, classes.githubControl)}
              color={theme.colorScheme === 'dark' ? 'gray' : 'dark'}
              disabled={true}
            >
              GitHub (soon&trade;)
            </Button> */}
          </>
        </div>
      </Container>
    </div>
  );
}
