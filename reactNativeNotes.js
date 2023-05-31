// **********  Section 2.2: Hello World! --> page 16
import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';
class HelloWorldApp extends Component {
    render() {
        return (<Text>Hello world!</Text>);
    }
}
AppRegistry.registerComponent('HelloWorldApp', () => HelloWorldApp);

// **********  Section 3.1: Defining PropTypes --> page 17
// ----->> It will make your code more readable



