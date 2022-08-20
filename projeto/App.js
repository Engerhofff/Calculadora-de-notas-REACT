
import React,{Component} from "react";
import {View,Text, TextInput, StyleSheet, TouchableOpacity,} from "react-native";



export default class App extends Component{

    constructor(props){
        super(props)
        this.state = {nota1: 0, nota2: 0, faltas: 0, resultados: ""}
        this.calcular = this.calcular.bind(this)      
    }
    
    calcular(){
        let num1 = parseInt(this.state.nota1)
        let num2 = parseInt(this.state.nota2)
        let media = (num1 + num2) /2

        if(media >=6 && this.state.faltas <=10){
            this.setState({resultado: "Aluno foi Aprovado"})
        }else{
            this.setState({resultado: "Aluno foi Reprovado"})
        }
    }
   
   
    render(){
        
        return(
            
        <View style={styles.container}> 

           <Text style={styles.notas}> Calculadora de Notas </Text>
           
           <TextInput style={styles.TextInput}
           onChangeText= { (nota1) => {this.setState({nota1})}}
           keyboardType="numeric" 
           placeholder="Nota 1"
           />     
           
           <TextInput style={styles.TextInput}
            onChangeText= { (nota2) => {this.setState({nota2})}}
            keyboardType="numeric" 
            placeholder="Nota 2"
           />        
           <TextInput style={styles.TextInput}
            onChangeText= { (faltas) => {this.setState({faltas})}}
           keyboardType="numeric" 
           placeholder="Número de Faltas"
           />        
        <TouchableOpacity style={styles.button} onPress={this.calcular}>   
             <Text style={styles.text}> Calcular </Text> 
        </TouchableOpacity>
        <Text style={styles.Aluno}> {this.state.resultado} </Text>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#B0E0E6',
    },  

    notas:{
        marginTop: 50,
        textAlign: "center",
        justifyContent: "center",
        fontSize: 30,
        alignSelf: "center",
        fontWeight: 'bold',
        color: '#1C1C1C',
        
    },


    TextInput:{
            padding: 30,
            backgroundColor: '#cccccc',
            marginLeft: 50,
            marginRight: 50,
            marginTop: 30,
            fontSize: 20,
             
    },
    
    button: {
        margin: 20,
        padding: 20,
        backgroundColor: '#37474f'

    },

    text:{

        textAlign: "center",
        justifyContent: "center",
        color: '#fff',
        fontSize: 18,
        alignSelf: "center"

    },

    Aluno:{
        textAlign: "center",
        justifyContent: "center",
        color: '#1C1C1C',
        fontSize: 20,
        alignSelf: "center",
        fontWeight: 'bold',
    }
})