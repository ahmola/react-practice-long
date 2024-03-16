import styles from './Button/Button.module.css'

export default function Button() {
    const click_style = {
            // inline
            backgroundColor: "skyblue",
            color: "white",
            padding: "10px 10px",
            borderRadius: "10px",
            border: "none",
            cursor: "pointer",
    }

    return(
        <>
            <button className={styles.button}>Touch me</button>
            <button style={click_style}>Click me</button>
        </>
    );
}
