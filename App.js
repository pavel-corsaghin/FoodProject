/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler'
import * as React from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import SplashScreen from './src/screens/splash'
import LoginScreen from './src/screens/login'
import ScreensName from './src/screens'
import HomeScreen from './src/screens/home'
import { AuthContext } from './src/screens/login/context'

const Stack = createStackNavigator();
const TOKEN_KEY = "@121"

export default function App() {
  const [isLoading, setIsLoading] = React.useState(true)
  const [userToken, setUserToken] = React.useState(null)

  const authContext = React.useMemo(() => {
    return {
      restoreToken: (token) => {
        setIsLoading(false);
        setUserToken(token);
      },
      onSignedIn: (token) => {
        setIsLoading(false);
        setUserToken(token);
        cacheToken(token)
      },
      signOut: () => {
        setIsLoading(false);
        setUserToken(null);
        removeCachedToken()
      }
    };
  }, [])

  cacheToken = async (token) => {
    try {
      await AsyncStorage.setItem(TOKEN_KEY, token)
    } catch (e) {
      // saving error
    }
  }

  // Fetch the token from storage then navigate to our appropriate place
  getCachedToken = async () => {
    try {
      let cachedToken = await AsyncStorage.getItem(TOKEN_KEY)
      authContext.restoreToken(cachedToken)
    } catch (e) {
      authContext.restoreToken(null)
    }
  };

    // Fetch the token from storage then navigate to our appropriate place
    removeCachedToken = async () => {
      try {
        await AsyncStorage.removeItem(TOKEN_KEY)
      } catch (e) {
        // remove error
      }
    };

  React.useEffect(() => {
    setTimeout(() => {
      getCachedToken()
    }, 2000);
  }, [])

  if (isLoading) {
    return <SplashScreen />
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>{
        <Stack.Navigator headerMode="none">
          {userToken ? (
            <Stack.Screen name={ScreensName.LoginScreen} component={HomeScreen} />
          ) : (
              <Stack.Screen name={ScreensName.HomeScreen} component={LoginScreen} />
            )}
        </Stack.Navigator>
      }</NavigationContainer>
    </AuthContext.Provider>
  );
}
