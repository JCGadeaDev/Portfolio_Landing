

interface ContainerProps {
    children: React.ReactNode
}

const ContainerPage = (props: ContainerProps) => {
    const {children} = props

    return ( 
        <div className="w-full max-w-6xl px-4 pb-40 mx-auto pt-[80px] md:pt-[120px] md:px-6">
            {children}
        </div>
    );
}
 
export default ContainerPage;