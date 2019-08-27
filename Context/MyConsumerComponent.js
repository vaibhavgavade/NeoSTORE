import React,{Component} from 'react';
import { Text, Button, View} from 'react-native';
import Cartcontext from '../Context/context'
class MyConsumer extends Component {
    static contextType = Cartcontext
    render() { 
        const {state, getraj} = this.context
        return ( 
        <Cartcontext.Consumer>
           
            
                return(
                    <View>

                    <Text>
                        {state.count}
                    </Text>
                    <Text>
                        {state.count}
                    </Text>
                    <Button title='update' onPress={()=> getraj}/>
                    </View>
                )
            
        </Cartcontext.Consumer>

         );
    }
}
 
export default MyConsumer;