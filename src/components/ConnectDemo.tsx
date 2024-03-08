import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useWeb3Modal } from '@web3modal/wagmi-react-native'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { RootStackParamList } from '../../App'

export default function ConnectView() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  const { open } = useWeb3Modal()

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={() => open()}>
        <Text>Connect</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => navigation.goBack()}>
        <Text>Back</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginTop: 12,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'blue',
  }
})
