import { useState } from "react";
import styles from '../assets/button.module.css'

export default function MeuContador() {

    const [contador,setContador] = useState(0)

    function aumentar() {
        setContador(contador + 1)
    }
    function diminuir() {
        setContador(contador - 1)
    }


    
    return (
        <div className="container">
            <h1>Meu Contador: {contador}</h1>
            {contador > 9 ? <h1>Valor muito Alto </h1> : null}
            {contador < 0 ? <h1>Valor muito Baixo </h1> : null}

            <div className="buttons">
                <button onClick={aumentar} className={styles.myButton}>Aumentar</button>
                <button onClick={diminuir} className={styles.myButton}>Diminuir</button>

            </div>

        </div>
    )
}