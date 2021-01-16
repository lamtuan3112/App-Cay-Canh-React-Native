
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
import { icons, images, COLORS, SIZES, FONTS } from '../constants';

const tintuc = ({ navigation,route }) => {
    const baseURL = apiUrl.baseURL;
    const id = route.params.IdNews;
    // Dummy Data
    const [treeList, settreeList] = React.useState([]);
    console.log(treeList);
    React.useEffect(() => {
        axios
        .get(`${baseURL}/api/News/${id}`)
        .then(({data}) =>{
            console.log("================url====================");
            console.log(id);
            //console.log(data);
            settreeList(data);
            
        })
    }, []);
    return (
        <View style={styles.container}>
            {/* New Plants */}
           <FlatList 
               data={treeList}
               keyExtractor = {(item,index)=>index.toString()}
                renderItem={(item) =>{
                     console.log(item)
                    return(
                        <View>
                            <View style={{backgroundColor:COLORS.primary,height:100,padding:"8%"}}>
                                <Text style={{fontSize:SIZES.h2,fontWeight:"bold",color:"white"}}>{item.item.TieuDeNews}</Text>
                            </View>
                            <View style={{}}>
                                <Text style={{fontSize:SIZES.h3,fontWeight:'normal'}}>{item.item.NoiDungNews}</Text>
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

export default tintuc;
