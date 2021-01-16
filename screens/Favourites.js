
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
// import Search from './Search';
// import { Favourites } from '.';

const Favourites = ({ navigation }) => {
    const baseURL = apiUrl.baseURL;
    // Dummy Data
    const [treeList, settreeList] = React.useState([]);
    React.useEffect(() => {
        axios
        .get(`${baseURL}/api/ChuyenGia`)
        .then(({data}) =>{
            settreeList(data);
        })
    }, []);

    // Render
    console.log(treeList)
    
    return (
        <View style={styles.container}>
            {/* New Plants */}
            <Text style={{textAlign:"center",color:COLORS.primary,fontSize:SIZES.h1,fontWeight:"bold"}}>Chuyên Gia Hỗ Trợ</Text>
            <FlatList 
               data={treeList}
               keyExtractor = {(item,index)=>index.toString()}
                renderItem={(item) =>{
                    console.log(item)
                    return(
                        <View style={{marginTop:"5%",marginLeft:"3%"}}>                 
                            <Text style={{color:COLORS.primary,fontSize:SIZES.h2,fontWeight:"bold"}}>Ông: {item.item.TenChuyenGia}</Text>
                            <Text style={{color:COLORS.secondary,fontSize:SIZES.h3,fontWeight:"bold"}}>SDT: {item.item.SDTChuyenGia}</Text>
                            <Text style={{color:COLORS.secondary,fontSize:SIZES.h3,fontWeight:"bold"}}>Email: {item.item.EmailChuyenGia}</Text>
                            <Text style={{color:COLORS.secondary,fontSize:SIZES.h3,fontWeight:"bold"}}>Lĩnh Vực: {item.item.LinhVuc}</Text>
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

export default Favourites;
