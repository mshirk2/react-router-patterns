import React, {useState} from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import ColorList from './ColorList';
import ColorForm from './ColorForm';
import Color from './Color';

function Routes(){
    const INITIAL_COLORS = {
        purple: '#8A33FF',
        teal: '#0DC7B1',
        mustard: '#ECB918'
    }
    const [colors, setColors] = useState(INITIAL_COLORS);

    const addColor = (newColor) => {
        setColors(colors => ({...colors, ...newColor}))
    };

    function renderColor(props){
        const {color} = props.match.params;
        const hex = colors[color];
        return (
            <Color {...props} color={color} hex={hex} />
        );
        
    }

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/colors">
                    <ColorList colors={colors}/>
                </Route>
                <Route exact path="/colors/new">
                    <ColorForm addColor={addColor}/>
                </Route>
                <Route exact path="/colors/:color" render={renderColor} />
                <Redirect to="/colors" />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;