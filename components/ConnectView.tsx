import { useWeb3Modal } from '@web3modal/wagmi-react-native'
import { Button, Pressable, Text } from 'react-native'

export default function ConnectView() {
  const { open } = useWeb3Modal()

  return (
    <>
      <Button title='Connect' onPress={() => open()} />
    </>
  )

}