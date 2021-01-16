import React,{Component, useState} from 'react';
import { View,TextInput,Text,Button } from 'react-native';
import { images, icons, COLORS, FONTS, SIZES } from '../constants';

export default class timkiem extends Component{
    constructor(props){
        super(props);
        this.state={chu:'',binhluan:''}
    }
    
    render(){
        var text;
        return(
            <View>
                <View>
                    <Text style={{textAlign:"center",color:COLORS.primary,fontSize:SIZES.h1,fontWeight:"bold"}}>Tìm kiếm cây cảnh</Text>
                </View>
                <TextInput
                    style={{marginBottom:10,borderWidth:1,borderColor:COLORS.primary}}
                    type="text" 
                    placeholder="Tìm kiếm tại đây"
                    onChangeText={chu=>this.setState({chu})}
                />
                <Button title="Tìm kiếm" onPress={() => { this.props.navigation.navigate('timkiemcay', {tencay : this.state.chu})}}/>
                

                <View>
                    <Text style={{textAlign:"center",color:COLORS.primary,fontSize:SIZES.h1,fontWeight:"bold"}}>Ý kiến đánh giá</Text>
                </View>
                <TextInput
                    style={{marginBottom:10,borderWidth:1,borderColor:COLORS.primary}}
                    type="text" 
                    placeholder="Nhập ý kiến đánh giá"
                    onChangeText={binhluan=>this.setState({binhluan})}
                />
                <Button title="Gửi" onPress={() => { this.props.navigation.navigate('binhluan', {comment : this.state.binhluan})}}/>
            </View>
        );
    };//render
};
