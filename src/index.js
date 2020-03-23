import './styles/main.scss';
import { bro } from './bro';

console.log(bro('Yoo'));

const output = document.querySelector('#output');
output.innerHTML = bro('Yooo');