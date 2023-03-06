import { StyleSheet, Text } from "react-native";
import { View } from "react-native-web";

export default function Footer() {
    return(
        <View style={styles.container}>
            <Text>Zentai Pál, 2023-03-06, Szoft-II-N</Text>
            <Text>Paralelepipedon térfogata</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      width: '100%',
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
    },
});