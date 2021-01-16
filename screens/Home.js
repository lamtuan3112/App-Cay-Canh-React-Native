
import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    FlatList,
    SafeAreaView,
    Button
} from 'react-native';
import axios from 'axios'
import apiUrl from "./GetAPI";
import { images, icons, COLORS, FONTS, SIZES } from '../constants';
const home = ({ navigation }) => {
    const baseURL = apiUrl.baseURL;
    // Dummy Data
    const [treeList, settreeList] = React.useState([]);
    React.useEffect(() => {
        axios
        .get(`${baseURL}/api/Cay/yeuthich`)
        .then(({data}) =>{
            settreeList(data);
        })
    }, []);
    //datetime
    const [currentDate, setCurrentDate] = React.useState('');

    React.useEffect(() => {
        var date = new Date().getDate(); //Current Date
        // var today = new Date.now();
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        var hours = new Date().getHours(); //Current Hours
        var min = new Date().getMinutes(); //Current Minutes
        var sec = new Date().getSeconds(); //Current Seconds
        setCurrentDate(
        date + '/' + month + '/' + year 
        + ' ' + hours + ':' + min + ':' + sec
        );
    }, []);

    // Render
    console.log(baseURL)
    return (
        <View style={styles.container}>
            {/* New Plants */}
            <Text style={{textAlign:"center",color:COLORS.primary,fontSize:SIZES.h1,fontWeight:"bold"}}>CHĂM SÓC CÂY</Text>
            <Text style={{color:"gray",fontSize:SIZES.h2,fontWeight:"bold"}}>Nên Trồng</Text>
            <FlatList 
               data={treeList}
               keyExtractor = {(item,index)=>index.toString()}
                renderItem={(item) =>{
                    // console.log(item)
                    return(
                        
                        <View>
                            <View style={{marginTop:"3%",backgroundColor:COLORS.primary,flexDirection:'row'}}>  
                                <Text style={{padding:"10%",flex:1,color:"white",fontSize:SIZES.h2,fontWeight:"bold"}}>{item.item.TenCay}</Text>
                                <TouchableOpacity style={{}} onPress={() => { navigation.navigate('info', {IdCay : item.item.IdCay}) }}>                   
                                    <Image style={{flex:1,alignItems:"flex-start",width:100,height:100,borderRadius:100}} source={{uri:`${baseURL}/${item.item.Anh}`}} />   
                                </TouchableOpacity>  
                            </View>
                        </View>
                    )
                }}

            />
            {/* datetime */}
            <SafeAreaView style={{flex: 1}}>
                <View style={styles.container}>
                    <View style={styles.container}>
                        <Text style={styles.textStyle}>
                            Thời gian
                        </Text>
                        <Text style={styles.textStyle}>
                            {currentDate}
                        </Text>
                    </View>
                </View>
            </SafeAreaView>
            {/* end datetime */}

       </View>
    );
};

const styles = StyleSheet.create({
    container: {
    },
});

export default home;
