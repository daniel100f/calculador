import styles from "./Calculadora.module.css"
import { useState } from "react";

const Calculadora=()=>{
const [entrada,setEntrada]=useState("");
const [resultado,setResultado]=useState("");

const handlerSeleccion=(event)=>{
setEntrada((preventValue)=>preventValue + event.target.value)



}
const limpiar=()=>{
    setEntrada("")
    setResultado("")

}
const sumar=()=>{
    if(entrada!=="")
    setResultado((preventValue)=>parseFloat(preventValue)+parseFloat(entrada))
}
    
    return(

    <div className={styles.principal}>
    
    
        <input className={styles.pantalla} value={entrada} type="text"  />
            <button className={styles.btn}onClick={handlerSeleccion}  value="7">7</button>
            <button className={styles.btn}onClick={handlerSeleccion} value="8">8</button>
            <button className={styles.btn}onClick={handlerSeleccion} value="9">9</button>
            <button className={styles.btn}onClick={handlerSeleccion} value="/">/</button>
            <button className={styles.btn} onClick={limpiar} value="c">C</button>
            <button className={styles.btn}onClick={handlerSeleccion} value="4">4</button>
            <button className={styles.btn}onClick={handlerSeleccion} value="5">5</button>
            <button className={styles.btn}onClick={handlerSeleccion} value="6">6</button>
            <button className={styles.btn}onClick={handlerSeleccion} value="x">x</button>
            <button className={styles.btn}onClick={handlerSeleccion} value="-">-</button>
            <button className={styles.btn}onClick={handlerSeleccion} value="1">1</button>
            <button className={styles.btn}onClick={handlerSeleccion} value="2">2</button>
            <button className={styles.btn}onClick={handlerSeleccion} value="3">3</button>
            <button className={styles.btn}onClick={sumar} value="+">+</button>
            <button className={styles.btn}onClick={handlerSeleccion} value=".">.</button>
            <button className={styles.btn}onClick={handlerSeleccion} value="0">0</button>
            <button className={styles.btn1}onClick={handlerSeleccion} value="=">=</button>
    </div>
    )
}

export default Calculadora;       