import { FC, MouseEventHandler } from 'react';
import styles from './Button.module.scss';
import { SEARCH_BTN_TEXT } from 'lib/constants/Header';
interface ButtonProps {
    id?: string;
    role?: string;
    className?: string;
    buttonText?: string;
    buttonStyle?:
    | "black"
    | "white"
    | "underline"
    | "transparent"
    | "transparent-white";
    buttonSize?:
    | "xxs"
    | "xsm"
    | "sm"
    | "sm2"
    | "md"
    | "lr"
    | "xl"
    | "xxl"
    | "fill"
    | "inline";
    onClick?: MouseEventHandler<HTMLButtonElement>;
    type?: "button" | "submit";
    children?: JSX.Element | string;
    testId?: string;
    isLoading?: boolean;
    isDisabled?: boolean;
    style?: object;
    hover?: boolean;
    hasSpinner?: boolean;
}
const Button = ({
    id = "",
    role = "button",
    className = "",
    type = "button",
    buttonText = "",
    buttonSize = "md",
    onClick,
    testId = "",
    isLoading = false,
    style = {},
    isDisabled = false,
    hover = false,
}: ButtonProps): JSX.Element => {
    return (
        <>
            <button
                className={className}
                type={type}
                style={style}
                onClick={(e) => onClick && onClick(e)}
            >
                {buttonText || ""}

            </button>
        </>
    )
}
export default Button;