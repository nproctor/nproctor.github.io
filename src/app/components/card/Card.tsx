import { CardContainer, CardTitle, CardContent } from "./Card.style"

export const Card = ({title, children} : {title: string, children?: React.ReactNode}) => {
    return (
        <CardContainer>
            <CardTitle>{title}</CardTitle>
            <CardContent>
            {children}
            </CardContent>
        </CardContainer>
    )
}