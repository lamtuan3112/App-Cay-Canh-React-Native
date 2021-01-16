
import React,{Component} from 'react';
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

//search

const Search = ({ navigation }) => {
    const baseURL = apiUrl.baseURL;
    // Dummy Data
    const [treeList, settreeList] = React.useState([]);
    React.useEffect(() => {
        axios
        .get(`${baseURL}/api/News`)
        .then(({data}) =>{
            settreeList(data);
        })
    }, []);
    //search
    // Render
    console.log(baseURL)
    console.log(treeList)
    
    return (
        <View style={styles.container}>
            {/* New Plants */}
            <View>
                <Text style={{textAlign:"center",color:COLORS.primary,fontSize:SIZES.h1,fontWeight:"bold"}}>Tin Tức</Text>
            </View>
            <FlatList 
               data={treeList}
               keyExtractor = {(item,index)=>index.toString()}
                renderItem={(item) =>{
                    console.log(item)
                    return(
                        <View>
                            <View style={{backgroundColor:COLORS.primary,marginTop:"3%",height:100}}>
                                <TouchableOpacity style={{}} onPress={() => { navigation.navigate('tintuc', {IdNews : item.item.IdNews}) }}>                   
                                    <Text style={{padding:"9%",color:"white",fontSize:SIZES.h2,fontWeight:"bold"}}>{item.item.TieuDeNews}</Text>
                                </TouchableOpacity>
                            </View>
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

export default Search;
