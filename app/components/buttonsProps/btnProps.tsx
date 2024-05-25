'use client'
type Props = {
    title: string;
    onClick?: () => any;
}
export const BtnProps = (props: Props) => {
    return (
        <div onClick={props.onClick}>{props.title}</div>
    )
}