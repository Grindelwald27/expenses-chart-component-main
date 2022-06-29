const divElement = document.querySelectorAll('.col');
const amount = document.querySelectorAll('.amount');

for (let i = 0; i < divElement.length; i++) {

    divElement[i].onmouseover = () => {

        amount[i].style.display = 'initial';

    }

}

for (let i = 0; i < divElement.length; i++) {

    divElement[i].onmouseleave = () => {

        amount[i].style.display = 'none';
    }

}