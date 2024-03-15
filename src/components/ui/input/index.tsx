import styles from './Search.module.scss';
interface InputProps {
    className?: string;
    placeholder?: string;
    type?: string;
}
const Input = ({
    className = "",
    placeholder = "",
    type = "text",
}: InputProps): JSX.Element => {
    return (
        <>
            <input
                className={className}
                type={type}
                placeholder={placeholder} />
        </>
    )
}
export default Input;