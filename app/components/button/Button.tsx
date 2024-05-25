'use client'
import styles from './button.module.scss'

type Props = {
    title: string;
    mode?: 'open' | 'block';
}
export default (props: Props) => {
    const classes = [styles.button];

    if(props.mode == 'block') {
        classes.push(styles.outline)
    } else {
        classes.push(styles.fill)
    }


    return (
        <button className={classes.join(' ')}>{props.title}</button>
    )
}