import './master.css'
class FirstButton{
    render(){
        const button = document.createElement('button');
        const body = document.querySelector('body');
        button.innerHTML = 'Hello World';
        button.classList.add('hello-world');
        body.appendChild(button);
    }
}

export default FirstButton;