/**
 * @author jingjianqian
 * for learn rn Navigator component
 * @DOC https://github.com/facebook/react-native
 */
import React,{
  Navigator,
  View,
  Text,
  StyleSheet,
  AppRegistry,
  TouchableOpacity
} from 'react-native';
import button from './Component/Button/Button.js';


var _getRandomRoute = function (str) {
    return {
        randNumber: str,
    };
}
//页面索引匹配页面
var ROUTE_STACK = [
    _getRandomRoute('Page1'),
    _getRandomRoute('Page2'),
    _getRandomRoute('Page3'),
    _getRandomRoute('Page4')
];
//页面索引值，默认为0
var INIT_ROUTE_INDEX = 0;
//app入口组件
class Nav extends React.Component{
  render(){
  return  (
      <Navigator
        initialRoute={ROUTE_STACK[INIT_ROUTE_INDEX]}
        renderScene={this.renderScene}
        initialRouteStack={ROUTE_STACK}
        configureScene={()=>({
            ...Navigator.SceneConfigs.HorizontalSwipeJump,
          })
        }
      />
    );
  }

  renderScene(route,navigator){
    var page1,page2,page3,page4;
  //  alert(ROUTE_STACK.indexOf(route));
  return (
    <NavBar
    initTabIndex={INIT_ROUTE_INDEX}
    routeStack={ROUTE_STACK}
    />
  );
  }
}

//导航栏
class NavBar extends React.Component{
  press(props){
    alert(this.props.routeStack);
  }
  render(){
    return (
      <View style={{backgroundColor:'red',height:100}}>
        <TouchableOpacity onPress={this.press.bind(this)}>
          <Text>aaaa</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

AppRegistry.registerComponent('nav', () => Nav);
