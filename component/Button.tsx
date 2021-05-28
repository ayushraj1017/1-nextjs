import styles from './Button.module.scss'

function Button() {
    return (
        <div>
            <button className={styles.error}
            ><span className={styles.bg}>Click me</span></button>
            <h1 style={{background:"yellow"
            ,color:"orange"}}
            >paragraph</h1>
            <style jsx>
               {
               ` 
               h1{font-size:120px;};
               h1{};
                `
                }
            </style>
        </div>
    )
}

export default Button
