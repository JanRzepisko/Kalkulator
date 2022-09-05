import React, { useState } from "react";
import { Text, View, StyleSheet, FlatList} from "react-native";

import Key  from './KeyBordComponents'



function Calculate(numberA, numberB, actionChar){
    switch(actionChar){
        case '/': return Math.round((Number(numberA) / Number(numberB)) * 100000) / 100000;
        case 'x': return Math.round((Number(numberA) * Number(numberB)) * 100000) / 100000;
        case '+': return Math.round((Number(numberA) + Number(numberB)) * 100000) / 100000;
        case '-': return Math.round((Number(numberA) - Number(numberB)) * 100000) / 100000;
        case '%': return (Math.round((Number(numberA) / (Number(numberB))) * 100000) / 100000 * 100) + '%';
    }
}

const Calculator = () => {
    const [numberA, setNumberA] = useState('');
    const [numberB, setNumberB] = useState('');
    const [actionChar, setactionChar] = useState('0');
    const [isPlusA, setIsPlusA] = useState(true);
    const [isPlusB, setIsPlusB] = useState(true);
    const [isNumberAActive, setNumberAActive] = useState(true);
    const [result, setResult] = useState(0)
    const [calculated, setCalculated] = useState(false)
    const [upText, setUpText] = useState()

    function OnClickKeyHandler(char){
        setactionChar(char)
        setNumberAActive(false)
        setCalculated(false)
    }
    function OnClickChangeChar(){
        if(isNumberAActive){
            if(isPlusA){
                setNumberA(prev => '-' + prev)
            } else{
                setNumberA(prev => prev.substring(1))
            }
            setIsPlusA(!isPlusA)
        } else{ 
            if(isPlusB){
                setNumberB(prev => '-' + prev)
            } else{
                setNumberB(prev => prev.substring(1))
            }
            setIsPlusB(!isPlusB)
        }
    }
    function OnClickClear(){
        setNumberA('')
        setNumberB('') 
        setactionChar('')
        setResult('')
        setCalculated(false)
        setNumberAActive(true)
        setIsPlusA(true)
        setIsPlusB(true)
        setUpText('')
    }
    function OnClickCal(){
        if(numberA == '' || numberB == '') {
            return
        }
        setResult(Calculate(numberA, numberB, actionChar))
        setCalculated(true)

        const s = numberA + ' ' + actionChar + ' ' + numberB + ' = ' + result

        setUpText(s)

        setNumberA('')
        setNumberB('') 
        setactionChar('') 
        setNumberAActive(true)
        setNumberA(result + '')
        setIsPlusA(true)
        setIsPlusB(true)
    }

    const KEYS = [
        {title: 'AC', actionChar,  onPress:() => OnClickClear()},
        {title:'+/-', actionChar, onPress:() => OnClickChangeChar()},
        {title:'%',  actionChar, onPress:() => OnClickKeyHandler('%')},
        {title:'/',  actionChar, onPress:() => OnClickKeyHandler('/')},
        {title:'7',  actionChar, onPress:() => (isNumberAActive ? setNumberA(prev => prev + '7')  : setNumberB(prev => prev + '7'))},
        {title:'8',  actionChar, onPress:() => (isNumberAActive ? setNumberA(prev => prev + '8')  : setNumberB(prev => prev + '8'))},
        {title:'9',  actionChar, onPress:() => (isNumberAActive ? setNumberA(prev => prev + '9')  : setNumberB(prev => prev + '9'))},
        {title:'x',  actionChar, onPress:() => OnClickKeyHandler('x')},
        {title:'6',  actionChar, onPress:() => (isNumberAActive ? setNumberA(prev => prev + '6')  : setNumberB(prev => prev + '6'))},
        {title:'5',  actionChar, onPress:() => (isNumberAActive ? setNumberA(prev => prev + '5')  : setNumberB(prev => prev + '5'))},
        {title:'4',  actionChar, onPress:() => (isNumberAActive ? setNumberA(prev => prev + '4')  : setNumberB(prev => prev + '4'))},
        {title:'-',  actionChar, onPress:() => OnClickKeyHandler('-')},
        {title:'3',  actionChar, onPress:() => (isNumberAActive ? setNumberA(prev => prev + '3')  : setNumberB(prev => prev + '3'))},
        {title:'2',  actionChar, onPress:() => (isNumberAActive ? setNumberA(prev => prev + '2')  : setNumberB(prev => prev + '2'))},
        {title:'1',  actionChar, onPress:() => (isNumberAActive ? setNumberA(prev => prev + '1')  : setNumberB(prev => prev + '1'))},
        {title:'+',  actionChar, onPress:() => OnClickKeyHandler('+')},
        {title:'SPACE',  actionChar, onPress:{}},
        {title:'0',  actionChar, onPress:() => (isNumberAActive ? setNumberA(prev => prev + '0')  : setNumberB(prev => prev + '0'))},
        {title:'.',  actionChar, onPress:() => (isNumberAActive ? setNumberA(prev => prev + '.')  : setNumberB(prev => prev + '.'))},
        {title:'=',  actionChar, onPress:() => OnClickCal()}
    ]

    console.log(numberA + ' ' + actionChar + ' ' + numberB + ' ' + upText)
    
    return(
        <View style={styles.body}>
            <View style={styles.cal}>
            <Text style={styles.textUp}>{numberA} {actionChar} {numberB} {upText}</Text>
                <Text style={styles.textDown}>{(calculated ? result : isNumberAActive ? (numberA  == '' || numberA  == '-' ? numberA + '0' : numberA) : (numberB == '' || numberB  == '-' ? numberB + '0' : numberB))}</Text>
            </View>
            <FlatList style={styles.keyboard} scrollEnabled={false} numColumns={4} data={KEYS} 
            renderItem={({item:{title, onPress}}) => {
                return(
                    <Key char={title} onPress={onPress}/>
                )
            }}/>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#2b2d42',
        flex:1
    },
    textDown:{
        marginRight:20,
        fontSize: 50,
        color: '#edf2f4',
    },
    textUp:{
        fontSize: 20,
        marginRight:20,
        color: '#8d99ae',
    },
    cal:{
        height: '38%',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    keyboard:{
        height: '62%',
    },
})

export default Calculator