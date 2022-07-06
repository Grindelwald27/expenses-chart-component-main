import { Component } from 'react';
import data from '../data';

class Column extends Component {

    state = {
        show: false,
    }

    isTrue = (bool, number) => {
        this.props.item(number);
        this.setState({ show: bool });
    }

    render() {
        return (
            <>
                {data.map(dados => {
                    return (
                        <div className='col' key={dados.id} onMouseEnter={() => { this.isTrue(true, dados.id) }} onMouseLeave={() => { this.isTrue(false) }}>
                            {this.state.show && dados.id === this.props.selectedNum && (
                                <div className="amount">${dados.amount}</div>
                            )}
                            <div id={dados.day} className="column"></div>
                            <p>{dados.day}</p>
                        </div>
                    )
                })}
            </>
        )
    }
}

export default Column;