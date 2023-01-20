import { Button } from '@mui/material'
import styles from '../../styles/Header.module.css'

export default function Header(){
    return (
        <header className={styles.header}>
            <h1 className="text-3xl font-bold underline bg-blue-500 text-sky-400/100">
      Hello world!
    </h1>
        </header>
        )
}