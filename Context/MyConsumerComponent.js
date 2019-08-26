import React,{Component} from 'react';
import { Text } from 'react-native';
import Cartcontext from '../Context/context'


class MyConsumer extends Component {
    render() { 
        return ( 
        <Cartcontext.Consumer>
            {test =>{
                return(
                    <Text>
                        {test.state.count}
                    </Text>
                )
            }}
        </Cartcontext.Consumer>

         );
    }
}
 
export default MyConsumer;