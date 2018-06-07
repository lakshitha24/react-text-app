import React from 'react';
import { YellowBox ,Platform} from 'react-native'
import {Tabs ,Drawer} from "./config/router";

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated']);

const App =() =>{
    if(Platform === 'ios'){
        return <Tabs/>
    }
    return <Drawer/>
};

export default App;