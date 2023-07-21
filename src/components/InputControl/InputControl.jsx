import {React,useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash,faEye } from '@fortawesome/free-solid-svg-icons'
import styles from  './InputControl.module.css'

 export default function InputControl(props) {
   const{label,type,disabled,placeholder ,onChange}=props

   const [showPassword, setshowPassword] = useState(true);
   const handelCheck=()=>{
       setshowPassword(!showPassword);}
    return (
           <div className={styles.container}>

                <FontAwesomeIcon className={`${styles.inputIcon}${disabled=="false"?'':styles.hideeyes}`} icon={showPassword?faEyeSlash:faEye} 
                onClick={handelCheck}


                />

                <input label={label}type={!showPassword?'text':type} placeholder={placeholder} onChange={onChange}/> 

           </div>
        )



};