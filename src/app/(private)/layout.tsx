import Header from "../_components/Header"

function PrivateLayout({children}: {children: React.ReactNode}) {
    return ( 
        <>
            <Header/>
            {children} 
        </>
    )
}

export default PrivateLayout;