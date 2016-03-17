/**
*
* @auto joker
*
*/
'use strict';

import React,{
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

//按钮组件，上面图片，下面文字
export default class Button extends React.Component{
  render(){
    var title = this.props.title;
    var image = this.props.image;
    if(title!=null){
      var itemTitle = (
        <Text style={[styles.title]}>{title}</Text>
      );
    }
    if(image!=null){
      var itemImage = (
        <Image style={[styles.image]} source={image}></Image>
      );
    }
    return (
      <TouchableOpacity
        style={{flex:1}}
        onPress={this.props.Press}>
        <View style={style.item}>
          {itemTitle}
          {itemImage}
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  item: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
  },
  image: {
      width: 30,
      height: 30,
      marginTop: 5,
      resizeMode: Image.resizeMode.stretch,
  },
  title: {
      fontSize: 20
  }
});
