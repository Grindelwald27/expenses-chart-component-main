import data from './data.js';
import './Graphic.css';
import './Amount.js';
import './Amount.css';

const Graphic = () => {

    return (
        <>
            {data.map(data => {
                return (
                    <div className="col" key={data.id}>
                        <div className="amount">${data.amount}</div>
                        <div id={data.day} className="column"></div>
                        <p>{data.day}</p>
                    </div>
                )
            })}
        </>
    )
}

export default Graphic;