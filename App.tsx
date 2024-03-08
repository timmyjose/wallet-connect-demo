import '@walletconnect/react-native-compat'
import { WagmiConfig } from 'wagmi'
import { mainnet, polygon, arbitrum } from 'viem/chains'
import { createWeb3Modal, defaultWagmiConfig, Web3Modal } from '@web3modal/wagmi-react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from './src/Home'
import ConnectDemo from './src/components/ConnectDemo'

const projectId = 'a12eedba55522ed87542343db1629d8c'

const metadata = {
  name: 'Wallet Connect Demo App',
  description: 'Wallet Connect Demo Test App',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
  redirect: {
    native: '',
    universal: ''
  }
}

const chains = [mainnet, polygon, arbitrum]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

createWeb3Modal({
  projectId,
  chains,
  wagmiConfig
})

const Stack = createNativeStackNavigator()

export type RootStackParamList = {
  Home: undefined;
  ConnectDemo: undefined;
}

export default function App() {
  return (
    <WagmiConfig config={wagmiConfig}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='ConnectDemo' component={ConnectDemo} />
        </Stack.Navigator>
      </NavigationContainer>
      <Web3Modal />
    </WagmiConfig>
  )
}
