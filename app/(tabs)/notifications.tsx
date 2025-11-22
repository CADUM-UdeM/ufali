import IonIcons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, useColorScheme, View } from "react-native";


export default function HomeScreen() {
const router = useRouter();
    
const colorScheme = useColorScheme();
const isDarkMode = colorScheme == 'dark';

return (
    <View style ={styles.buttonStyle}> 
    <TouchableOpacity style={styles.go_back_button} onPress={() => router.push("/profil")}>
                    <IonIcons name="return-down-back-outline" size={40} color={'black'}/>
                </TouchableOpacity>

    <Text style={{color: isDarkMode ? 'white' : 'black'}}> Nom de l’application </Text>
            <Text></Text>
            <Text style={{color: isDarkMode ? 'white' : 'black', fontSize: 20, fontWeight:'bold'}}> Notification </Text>
            <Text></Text>

        <Text></Text>
        
</View>
)
}

const styles = StyleSheet.create({
    buttonStyle:{
    padding:100,
    alignItems: "center",

    },
    go_back_button: {
        backgroundColor: '#C2E5FF',
        width: '30%',
        padding: 10,
        position: 'absolute',
        top: 60,
        right: '155%',
        borderRadius: 20,

    },
});
