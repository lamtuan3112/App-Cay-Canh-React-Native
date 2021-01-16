
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    FlatList,
    Button
} from 'react-native';
import axios from 'axios'
import apiUrl from "./GetAPI";
import { icons, images, COLORS, SIZES, FONTS } from '../constants';

const binhluan = ({ navigation,route }) => {
    const baseURL = apiUrl.baseURL;
    const Comment = route.params.comment;
    // Dummy Data
    const [treeList, settreeList] = React.useState([]);
    console.log(treeList);
    React.useEffect(() => {
        axios
        .post(`${baseURL}/api/DanhGia/${Comment}`)
        .then(({data}) =>{
            console.log("================url====================");
            console.log(binhluan);
            //console.log(data);
            settreeList(data);
            
        })
    }, []);
    
    return (
        <View>
            <Text style={{textAlign:"center",color:COLORS.primary,fontSize:SIZES.h1,fontWeight:"bold"}}>Cảm ơn bạn đã đánh giá chúng tôi !</Text>                     
            <View>
                <TouchableOpacity style={{margin:"20%"}} onPress={() => { navigation.navigate('timkiem') }}>                   
                    <Image source={require('../assets/icons/trolai.png')} style={{height:80,width:230}}/>
                </TouchableOpacity>
            </View>
        </View>
    );
    
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default binhluan;
