import React from 'react';
import {Tabs} from "expo-router";

const _Layout = () => {
  return (
    <Tabs
        initialRouteName="index"
    >
        <Tabs.Screen
            name= "parametres"
            options= {{
                title: "Paramètres",
                headerShown: false,
            }}
        />
        <Tabs.Screen
            name= "donneesEtudes"
            options= {{
                title: "Données",
                headerShown: false,
            }}
        />
        <Tabs.Screen
            name= "index"
            options= {{
                title: "Accueil",
                headerShown: false,
            }}
        />
        <Tabs.Screen
            name= "pomodoro"
            options= {{
                title: "Pomodoro",
                headerShown: false,
            }}
        />
        <Tabs.Screen
            name= "profil"
            options= {{
                title: "Profil",
                headerShown: false,
            }}
        />
    </Tabs>
  );
};

export default _Layout;
