import '@walletconnect/react-native-compat'
import { WagmiConfig } from 'wagmi'
import { mainnet, polygon, arbitrum } from 'viem/chains'
import { createWeb3Modal, defaultWagmiConfig, Web3Modal } from '@web3modal/wagmi-react-native'
import ConnectView from './components/ConnectView'

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

export default function App() {
  return (
    <WagmiConfig config={wagmiConfig}>
      <ConnectView />
      <Web3Modal />
    </WagmiConfig>
  )
}