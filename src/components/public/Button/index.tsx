import Link, {LinkProps} from "next/link";
import React, {ReactNode, useEffect, useState} from "react";
import styles from "./styles.module.scss"

type ButtonProps = ReactNode & {
    children: ReactNode,
    style?: "pink1" | "pink2" | "white1"
    route?: string,
    link?: string,
    submit?: boolean
}

export default function Button({children, style, route, link, submit}: ButtonProps) {

    const [styleName, setStyleName] = useState("");

    useEffect(() => {
        switch (style) {
            case "pink1":
                setStyleName(styles.pink1)
                break;
            case "pink2":
                setStyleName(styles.pink2)
                break;
            case "white1":
                setStyleName(styles.white1)
                break;
            default:
                setStyleName(styles.pink1)
                break;
        }
    }, []);


    if (route)
        return (
            <div className={styles.container+" "+styles.medium+" "+styleName}>
                <Link href={route}>{children}</Link>
            </div>
        )

    if (link)
        return (
            <div className={styles.container+" "+styles.medium+" "+styleName}>
                <a href={link} target="_blank">{children}</a>
            </div>
        )

    return (
        <div className={styles.container+" "+styles.medium+" "+styleName}>
            <button type={submit ? "submit" : "button"}>{children}</button>
        </div>
    )
}