
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

const info = ({ navigation,route }) => {
    const baseURL = apiUrl.baseURL;
    const id = route.params.IdCay;
    // Dummy Data
    const [treeList, settreeList] = React.useState([]);
    console.log(treeList);
    React.useEffect(() => {
        axios
        .get(`${baseURL}/api/Cay/${id}`)
        .then(({data}) =>{
            console.log("================url====================");
            console.log(id);
            //console.log(data);
            settreeList(data);
            
        })
    }, []);
    const RequirementDetail = ({ icon, label, detail,text }) => {
        return (
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        source={icon}
                        resizeMode="cover"
                        style={{
                            tintColor: COLORS.secondary,
                            width: 30,
                            height: 30
                        }}
                    />
    
                    <Text style={{ marginLeft: SIZES.base, color: COLORS.secondary, ...FONTS.h2 }}>{label}</Text>
                </View>
                <View style={{ flex: 1, alignItems:'flex-end' }}>
                    <Text style={{ marginLeft: SIZES.base, color: COLORS.primary, ...FONTS.h2 }}>{detail}</Text>
                </View>
                <View style={{ flex: 1}}>
                    <Text style={{ marginLeft: SIZES.base, color: COLORS.primary, ...FONTS.h2 }}>{text}</Text>
                </View>
            </View>
        )
    }
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
                            <View style={{alignItems:"center",backgroundColor:COLORS.primary}}>
                                <Image style={{width:200,height:200,marginTop:"5%",marginBottom:"5%",borderRadius:100}} source={{uri:`${baseURL}/${item.item.Anh}`}} />
                            </View>
                            <View>
                                <Text style={{fontSize:SIZES.h1,color:COLORS.primary,textAlign:"center"}}>{item.item.TenCay}</Text>
                                <Text style={{fontSize:SIZES.h2,color:COLORS.secondary,textAlign:"center"}}>Cách chăm sóc</Text>
                            </View>     
                        
                            <View style={{ flex: 2.5, marginTop: SIZES.padding, paddingHorizontal: SIZES.padding, justifyContent: 'space-around' }}>
                                <RequirementDetail
                                    icon={icons.sun}
                                    label="Nhiệt độ"
                                    detail={item.item.NhietDo}
                                    text="độ C"
                                />

                                <RequirementDetail
                                    icon={icons.drop}
                                    label="Nước"
                                    detail={item.item.Nuoc}
                                    text="ml"
                                />
                                <RequirementDetail
                                    icon={icons.temperature}
                                    label="Nhiệt độ phòng"
                                    detail={item.item.NhietDoPhong}
                                    text="Độ C"
                                />

                                <RequirementDetail
                                    icon={icons.garden}
                                    label="Đất"
                                    detail={item.item.Dat}
                                    text="Kg"
                                />

                                <RequirementDetail
                                    icon={icons.seed}
                                    label="Phân bón"
                                    detail={item.item.PhanBon}
                                    text="Mg"
                                />
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

export default info;
