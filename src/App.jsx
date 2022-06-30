import Graphic from './components/Graphic.jsx';

const App = () => {

    const divElement = document.querySelectorAll('.col');
    const amount = document.querySelectorAll('.amount');

    function over() {
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
            <Graphic over={over} leave={leave} />
        </>
    )
}

export default App;