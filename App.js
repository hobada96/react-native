import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput,} from 'react-native';

class WeatherProject extends Component {
    constructor(props){
        super(props);
        // zip 코드의 기본 값을 지정하고 싶으면 다음 코드를 수정한다.
        this.state = { zip: ''};
    }
    //이 콜백을 <TexztInput>에 지정
    _handleTextChange(event) {
        //Xcode나 리모트 JS 디버그 콘솔에 로그가 보여진다.
        console.log(event.nativeEvent.text);
        this.setState({
            zip: event.nativeEvent.txt
        });
    }
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.welcome}>
                You input {this.state.zip}.
                </Text>
                <TextInput
                    style={styles.input}
                    returnKeyType='go'
                    onSubitEditing={(event) => this._handleTextChange(event)}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#F5FCFF',
        },
        welcome: {
            fontSize: 20,
            textAlign: 'center',
            margin: 10,
        },
        input: {
            fontSize: 20,
            borderWidth: 2,
            height: 40
        }
});

export default WeatherProject;
