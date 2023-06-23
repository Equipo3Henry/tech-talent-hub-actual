import styles from "../Loader/Loader.module.css";

export const Loader = ({ size = 20 }) => {

    return (
        <div style={({ width: size, height: size })} className={styles.spinner} />
    )
}