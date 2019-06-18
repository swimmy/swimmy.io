import { CssBaseline } from '@material-ui/core'
import { StylesProvider, ThemeProvider } from '@material-ui/styles'
import RouteAbout from 'app/about/RouteAbout'
import RouteChangelogs from 'app/changelog/RouteChangelogs'
import RouteHome from 'app/home/RouteHome'
import RouteImages from 'app/image/RouteImages'
import RoutePolicy from 'app/policy/RoutePolicy'
import RouteSettingsEmail from 'app/setting/RouteSettingsEmail'
import RouteSettingsPassword from 'app/setting/RouteSettingsPassword'
import FragmentListener from 'app/shared/components/FragmentListener'
import { createTheme } from 'app/shared/helpers/createTheme'
import RouteThread from 'app/thread/RouteThread'
import RouteThreads from 'app/thread/RouteThreads'
import React, { Fragment, FunctionComponent } from 'react'
import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

const theme = createTheme()

const App: FunctionComponent = () => {
  return (
    <StylesProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Fragment>
            <FragmentListener />
            <Switch>
              <Route component={RouteHome} exact path={'/'} />
              <Route component={RouteAbout} exact path={'/about'} />
              <Route component={RouteChangelogs} exact path={'/changelogs'} />
              <Route component={RouteImages} exact path={'/images'} />
              <Route component={RoutePolicy} exact path={'/policy'} />
              <Route
                component={RouteSettingsEmail}
                exact
                path={'/settings/email'}
              />
              <Route
                component={RouteSettingsPassword}
                exact
                path={'/settings/password'}
              />
              <Route component={RouteThreads} exact path={'/threads'} />
              <Route
                component={RouteThread}
                exact
                path={'/threads/:threadId'}
              />
            </Switch>
            <footer />
          </Fragment>
        </BrowserRouter>
        <CssBaseline />
      </ThemeProvider>
    </StylesProvider>
  )
}

export default App