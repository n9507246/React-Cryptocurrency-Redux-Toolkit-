import classes from './styles.module.scss'

export function Layout({children, flex=1, className}){
    return(
        <main className={ classes.main + ' ' + className} style={{flex: flex}}>
            {children}
        </main>
    )
}

export function Header({children, className}){
    return(
        <div className={ classes.header + ' ' + className} >
            {children}
        </div>
    )
}

export function Content({children, className}){
    return(
        <div className={ classes.content + ' ' + className} >
            {children}
        </div>
    )
}

export function Footer({children, className}){
    return(
        <div className={ classes.footer + ' ' + className} >
            {children}
        </div>
    )
}
