'use client'

import { ReactElement, ReactNode } from "react"
import { RecoilRoot } from "recoil"

export default (props: {children : ReactNode}) => {
    return (
        <RecoilRoot>
            {props.children}
        </RecoilRoot>
    )
}