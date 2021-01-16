
import React from 'react';
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
import { images, icons, COLORS, FONTS, SIZES } from '../constants';
const tree = ({ navigation }) => {
    const baseURL = apiUrl.baseURL;
    // Dummy Data
    const [treeList, settreeList] = React.useState([]);
    React.useEffect(() => {
        axios
        .get(`${baseURL}/api/Cay`)
        .then(({data}) =>{
            settreeList(data);
        })
    }, []);

    // Render
    console.log(baseURL)
    return (
        <View style={styles.container}>
            {/* New Plants */}
            <Text style={{textAlign:"center",color:COLORS.primary,fontSize:SIZES.h1,fontWeight:"bold"}}>Danh sách cây cảnh</Text>
            <FlatList 
               data={treeList}
               keyExtractor = {(item,index)=>index.toString()}
                renderItem={(item) =>{
                    // console.log(item)
                    return(
                        <View style={{backgroundColor:COLORS.primary,flexDirection:"row",justifyContent:"space-between",marginTop:"5%"}}>
                            <Image style={{width:100,height:100,alignItems:"center",borderRadius:100}} source={{uri:`${baseURL}/${item.item.Anh}`}} />
                            <Text style={{padding:"7%",color:COLORS.white,fontSize:SIZES.h2,fontWeight:"bold",textAlign:"center"}}>{item.item.TenCay}</Text>
                            <TouchableOpacity style={{marginTop:"7%"}} onPress={() => { navigation.navigate('info', {IdCay : item.item.IdCay}) }}>                   
                                <Image source={require('../assets/icons/xemthem.png')} style={{height:30,width:130}}/>
                            </TouchableOpacity>  
                        </View>
                    )
                }}

            />
       </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default tree;
