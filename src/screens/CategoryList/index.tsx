import  React ,{Component} from 'react';
import {View} from "react-native";
import { List} from 'react-native-paper';

class CategoryList extends Component {

  state = {
    expanded: true
  }

  _handlePress = () =>
    this.setState({
      expanded: !this.state.expanded
    });

  render() {
    return (
        <View style={{flex:1,justifyContent:"center",margin:50}}>
      <List.Section title="ALL CATEGORY">
        <List.Accordion
          title="Health & Beauty"
          
          left={props => <List.Icon {...props} icon={require('../../assets/icons/BarTabs/accessoriesblack.png') } />}
        >
          <List.Item title="First item" onPress={() => this.props.navigation.navigate("products")}
/>
          <List.Item title="Second item" />
        </List.Accordion>

        <List.Accordion
          title="Bouquet"
          left={props => <List.Icon {...props} icon={require('../../assets/icons/BarTabs/bouquetblack.png') } />}
          onPress={this._handlePress}
        >
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>
           <List.Accordion
          title="Gemstones"
          left={props => <List.Icon {...props}  icon={require('../../assets/icons/BarTabs/makeupblack.png') }/>}
          onPress={this._handlePress}
        >
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>
         <List.Accordion
          title="Watches"
          left={props => <List.Icon {...props} icon={require('../../assets/icons/BarTabs/watchesblack.png') } />}
          onPress={this._handlePress}
        >
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>
         <List.Accordion
          title="Perfurmes"
          left={props => <List.Icon {...props} icon={require('../../assets/icons/BarTabs/perfumesblack.png') } />}
          onPress={this._handlePress}
        >
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>
         <List.Accordion
          title="Gemstones"
          left={props => <List.Icon {...props} icon={require('../../assets/icons/BarTabs/Gblack.png') } />}
          onPress={this._handlePress}
        >
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>
      </List.Section>
      </View>
    );
  }
}

export default CategoryList;