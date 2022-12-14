import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { emphasize, fade, darken, lighten } from '@material-ui/core/styles/colorManipulator';

import clsx from 'clsx';
import { orange } from '@material-ui/core/colors';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundImage: 'url("nereus-assets/img/bg/pattern2.png")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundColor: theme.palette.primary.dark,
  },
  iconWrapper: {
    backgroundColor: orange[100],
    color: theme.palette.secondary.main
  },
  actions: {
    [theme.breakpoints.up('sm')]: {
      display: 'flex'
    }
  },
  primaryAction: {
    width: '100%',
    marginTop: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(0),
      width: 'auto'
    }
  }
}
));

export default function Component(props) {
  const classes = useStyles();

  return (
<section className={classes.section}>
  <Container maxWidth="sm">
    <Box py={16}>
      <Card variant="outlined">
        <CardContent>
          <Box display="flex" mt={3}>
            <Box mx="auto">
              <Avatar className={classes.iconWrapper} variant="rounded">
                <AssignmentIndIcon />
              </Avatar>
            </Box>
          </Box>
          <Box mt={2} px={4}>
            <Typography variant="h5" component="h3" align="center" gutterBottom={true}>SIGN UP</Typography>
            <Typography variant="body2" component="p" color="textSecondary" align="center">Suspendisse aliquam tellus ante, porttitor mattis diam eleifend quis.</Typography>
            <Box my={3}>
              <form noValidate>
                <Grid container spacing={4}>
                  <Grid item xs={12} lg={6}>
                    <TextField variant="outlined" required fullWidth size="small" name="email" label="first name" />
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <TextField variant="outlined" required fullWidth size="small" name="email" label="last name" />
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField variant="outlined" required fullWidth size="small" name="email" label="E-mail address" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField variant="outlined" required fullWidth size="small" type="password" name="password" label="Password" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField variant="outlined" required fullWidth size="small" type="password" name="password" label="confrim password" />
                  </Grid>
                  <Grid item xs={12}>
                    <Box alignItems="center" justifyContent="center" className={classes.actions}>
                      <Button type="submit" variant="contained" color="secondary" size="large" className={classes.primaryAction}>
                        Sign up
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  </Container>
</section>
  );
}