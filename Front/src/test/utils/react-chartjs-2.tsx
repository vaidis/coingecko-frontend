import { ReactNode } from "react";

interface Props {
    children?: ReactNode
}

// BUG: Cannot find module 'react-chartjs-2' from 'src/coinDetails/coinChart.tsx'
// FIX: https://github.com/reactchartjs/react-chartjs-2/issues/1115

function Line({ children, ...rest }: Props) {
    return <div {...rest}>{children}</div>
}

export { Line }
