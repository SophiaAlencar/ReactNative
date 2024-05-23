import React from "react"
import { View, Text, Image, StyleSheet, Button } from "react-native"
import eu from './eu.jpeg'


export default function Title (){
    return(
        <View>
            <View>
            <Text style={{color: '#fff', fontSize: 18, textAlign: 'center', marginBottom: 10,
                fontWeight: 900,
            }}>Portfólio de Sophia</Text>
            </View>
            <Image
            source={eu} style={{width:250, height:250, borderRadius: 100, }} 
            />

            <Button title='Home'></Button>
            <Button title='Projetos'></Button>
            <Button title='Contato'></Button>
            
        </View>

    );
}
