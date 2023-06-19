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
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AppRegistry, Text, View } from 'react-native';
import styles from '/styles.js';

class Recipe extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        isYummy: PropTypes.bool.isRequired
    }

    render() {
        return (
            <View style={styles.container}>
                <Text >{this.props.name}</Text>
                {this.props.isYummy ? <Text>THIS RECIPE IS YUMMY </Text > : null}
            </View >
        )
    }
}

AppRegistry.registerComponent('Recipe', () => Recipe);
// Using the component
<Recipe name="Pancakes" isYummy={true} />
// Multiple PropTypes
/*
static propTypes = {
    name:PropTypes.oneOfType([
        PropTypes.string, PropTypes.object])
}
*/


// **********  Section 3.1: Defining PropTypes --> page 18
return (
    <View style={styles.container}>
        {this.props.children}
        {this.props.isYummy ? <Text>THIS RECEIPE IS YUMMY</Text> : null}
    </View>
)


// **********  Section 3.3: Use of props --> page 18
import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class Greeting extends Component {
    render() {
        return (
            <Text>Hellow {this.props.name}!</Text>
        );
    }
}

class LotsOfGreetings extends Component {
    render() {
        return (
            <View style={{ alignItems: 'center' }}>
                <Greeting name='Rexxar' />
                <Greeting name='Jaina' />
                <Greeting name='Valeera' />
            </View>
        )
    }
}

AppRegistry.registerComponent('LotsOfGreetings', () => LotsOfGreetings);


// **********  Section 3.4: Default Props --> page 19
class Example extends Component {
    render() {
        return (
            <View >
                <Text >{this.props.name}</ Text  >
            </ View >
        )
    }
}

Example.defaultProps = {
    name: "John"
}


// **********  Section 4.1: Render muliple variables --> page 20
render() {
    let firstName = 'test';
    let lastName = 'name';
    return (
        <View style={styles.container}>
            <Text>{`${firstName}   ${lastName}`}</Text>
        </View>
    );
}
// What will output be?
// ... Answer: test   name


// **********  Section 5.1: Modal Basic Example --> page 21
import React.{Component} from 'react';
import {
    Modal,
    Text,
    View,
    Button,
    StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
    mainContaincr: {
        marginTop: 22,
    },
    modalContainer: {
        marginTop: 22,
    },
});

class Example extends Component {
    constructor () {
        super ();
        this.state = {
            visibility: false,
        },
    }
}

setModalVisibility (visible) {
    this.setState ({
        visibility: visible,
    });
}

render () {
    return (
        <View style = {styles.mainContainer}>
            <Modal animationType={'slide'}
            transparent={false}
            visible = {this.state.visibility}>
                <View style = {styles.modalContainer}>
                    <View>
                    <Text>I'm a simple Modal</Text>
                        <Button
                    color = "#000"
                    onPress = {()=> this.setModalVisibility(!this.state.visibility)}
                    title = "Hide Modal"/>
                    </View>
                </View>
            </Modal>

            <Button
                color = "#000"
                onPress = {()=> this.setModalVisibility(true)}
                title = "Show Modal"/>

        </View>
    );
}

export default Example;




