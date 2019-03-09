import React, {Component} from 'react';

import { Button } from 'antd';
import { Input } from 'antd';
export default class header extends Component {
    constructor(props) {
        super(props);
        this.inputText = React.createRef();
    }


    input = () => {
        const inputvalue = this.inputText.current;
        const addItem = this.props.addItem;
        addItem(inputvalue.state.value);
    }


    render() {
        const {addItem} = this.props;
        return (
            <div>
                <Input id="input-text" className="input-text" type="text" name="ListItem" ref={this.inputText} />
                <Button onClick={this.input} type="primary">Add</Button>
            </div>);
    }

}