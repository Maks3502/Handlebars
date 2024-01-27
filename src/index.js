import Handlebars from 'handlebars/runtime';
import templateSource from './template.hbs';
import { usersData } from './data';

const render = () => {
    const template = Handlebars.compile(templateSource);
    const renderedHTML = template({ usersData });
    document.getElementById('app').innerHTML = renderedHTML;
};

render();