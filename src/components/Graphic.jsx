import data from './data.js';
import './Graphic.css';
import './Amount.css';

const Graphic = ({ over, leave }) => {

    return (
        <>
            {data.map(data => {
                return (
                    <div className='col' key={data.id} onMouseOver={over} onMouseLeave={leave}>
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