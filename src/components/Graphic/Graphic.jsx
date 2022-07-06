import './Graphic.css';
import Columns from '../Columns/Columns';
import { Component } from 'react';

class Graphic extends Component {

    state = {
        numItem: 0
    };

    handleNumItem = (childData) => {
        this.setState({numItem: childData});
    }

    render() {
        const {numItem} = this.state;
        return (
            <>
                <Columns item={this.handleNumItem} selectedNum={numItem}/>
            </>
        )
    }

}

export default Graphic;