import React, {useState} from 'react'
import style from './style.module.css'
import PasswordImage from '../../assets/password.png'
export default function Generator() {

    const [length, setLength] = useState(8)
    const [password, setPassword] = useState('password')
    return (
        <div className={style.container}>
            <img src={PasswordImage} className={style.icon} alt="password-icon" />
            <div>Password Generator</div>
            <div>Don't forget to set the length.</div>
            <div className={style.top}>
                <input type="text" value={password} className={style.passwordContainer} placeholder={"Generated Password"} disabled/>
                <input type="number" value={length}  className={style.lengthInput} value={length} onChange={(e)=>setLength(e.target.value)}  min="8" max="30"/>
            </div>
            <button className={style.generate}>Generate Password</button>
        </div>
    )
}
