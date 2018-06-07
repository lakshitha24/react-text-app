import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';
import {CustomTextInput} from '../components/Textinput';
import colors from '../config/colors';
import {PrimaryButton} from '../components/Buttons';

const fields = [
    {placeholder: 'First Name', stateKey: 'firstName'},
    {placeholder: 'Last Name', stateKey: 'lastName'},
    {placeholder: 'Email', stateKey: 'email', keyboardType: 'email-address'},
    {placeholder: 'Mobile Phone', stateKey: 'mobilePhone'},
    {placeholder: 'Home Phone', stateKey: 'homePhone'},
    {placeholder: 'City', stateKey: 'city'},
    {placeholder: 'Birthday', stateKey: 'birthday'},
    {placeholder: 'Registered', stateKey: 'registered'},
    {placeholder: 'Username', stateKey: 'username'},
]

class NewContact extends Component {
    constructor(props){
        super(props);
        this.state ={}
    };
    onInputChange =(text ,stateKey)=>{
        const mod ={}
        mod[stateKey]=text;
        this.setState(mod);
    };
    handleSubmit =() =>{
        alert('submit');
    };
    render() {
        return (
            <ScrollView style={{backgroundColor: colors.background}}>
                {
                    fields.map((fields) => (
                        <CustomTextInput
                            key={fields.stateKey}
                            onChange={(text) => this.onInputChange(text, fields.stateKey)}
                            {...fields}
                        />
                    ))
                }
                <View>
                    <PrimaryButton
                    label="Save"
                    onPress={()=>this.handleSubmit()}
                    />
                </View>
            </ScrollView>
        );
    }
}

export default NewContact;