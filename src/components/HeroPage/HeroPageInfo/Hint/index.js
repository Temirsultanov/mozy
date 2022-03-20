import * as React from 'react';

import {hint, hint__triangle, hint__text} from './style.module.scss';

const Hint = ({className}) => {
    return (
        <div className={`${hint} ${className}`}>
            <svg className={hint__triangle} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.268 3C15.0378 1.66667 16.9623 1.66667 17.7321 3L28.1244 21C28.8942 22.3333 27.9319 24 26.3923 24H5.60769C4.06809 24 3.10584 22.3333 3.87564 21L14.268 3Z" fill="#FDAA5A"/></svg>
            <p className={hint__text}>Мы могли сделать классический продающий сайт, но мы сделаем Вам <strong>мобильное приложение!</strong></p>
        </div>
    )
};

export default Hint;