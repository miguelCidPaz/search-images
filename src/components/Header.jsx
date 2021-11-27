import { useState } from 'react'
import '../CSS/styles.css'

const validation = (str) => {
    const validate = /<|\[|\]|\{|\}|\(|\)|!|>/g
    if (typeof str !== 'string' || (str.length < 4 || str.length > 15)) { return false };
    if (validate.test(str)) {
        return false
    } else { return true }

}

const Header = ({ setNewUrl }) => {
    const [comp, setComp] = useState(true);

    const validate = (e, keyCode = 0) => {
        if (validation(e.target.value)) {
            setComp(false);
            if (keyCode === 13) {
                setNewUrl(e.target.value);
            }
        } else {
            setComp(true);
        }
    }

    const keyBoardEvents = (e) => {
        return e.keyCode === 13 || e.code === 'Enter' ? validate(e, e.keyCode) : null
    }

    return (
        <header>
            <input
                onBlur={validate}
                onFocus={validate}
                onKeyDown={keyBoardEvents}
                onChange={validate}
                className={comp ? 'input-invalidate' : 'input-validate'} />
        </header>
    )
}

export default Header