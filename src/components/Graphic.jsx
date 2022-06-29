import data from './data.js';
import './Graphic.css';
import './Amount.css';

const Graphic = () => {

    const divElement = document.querySelectorAll('.col');
    const amount = document.querySelectorAll('.amount');

    function over(){

        for (let i = 0; i < divElement.length; i++) {

            divElement[i].onmouseover = () => {

                amount[i].style.display = 'initial';

            }

        }
    }

    function leave() {

        for (let i = 0; i < divElement.length; i++) {

            divElement[i].onmouseleave = () => {

                amount[i].style.display = 'none';
            }

        }
    }

    return (
        <>
            {data.map(data => {
                return (
                    <div className="col" key={data.id} onMouseOver={over()} onMouseLeave={leave()}>
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