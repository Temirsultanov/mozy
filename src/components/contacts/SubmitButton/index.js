import * as React from 'react';
import {submitButton} from "./style.module.scss";

const SubmitButton = ({className, children}) => {
    return (
        <button className={`${submitButton} ${className}`} type="submit">{children}</button>
    )
}

export default SubmitButton;