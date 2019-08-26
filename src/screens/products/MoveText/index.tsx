import React, { Component } from 'react'
import { Text, View,TouchableHighlight ,Picker } from 'react-native'
import styles from "./styles";
import ViewMoreText from 'react-native-view-more-text';
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../../../assets/colors";




export default class MoveText extends Component {
  constructor (props) {
    super()

  }
 

  renderViewMore(onPress){
    return(

      <Text 
      style={{fontSize:16,fontWeight:"100",color:PRIMARY_COLOR,marginLeft:16}}
      onPress={onPress}

      >
        View more
        </Text>
    )
  }

  renderViewLess(onPress){
    return(
    
      <Text
      style={{fontSize:16,fontWeight:"100",color:PRIMARY_COLOR,marginLeft:16}}
      onPress={onPress}
      >View less</Text>
    )
  }
  
  
  
  render () {


    return (
      <View>
     
     <Text style={{fontSize:20,fontWeight:"100",color:"black",marginLeft:16,paddingVertical:5}}>Description</Text>

        <ViewMoreText
          numberOfLines={2}
          renderViewMore={this.renderViewMore}
          renderViewLess={this.renderViewLess}
          textStyle={{textAlign: 'center',marginLeft:16}}
        >
          <Text>
            Lorem ipsum dolor sit amet, in quo dolorum ponderum, nam veri molestie constituto eu. Eum enim tantas sadipscing ne, ut omnes malorum nostrum cum. Errem populo qui ne, ea ipsum antiopam definitionem eos.
          </Text>
        </ViewMoreText>
         </View>
    )
  }
}
