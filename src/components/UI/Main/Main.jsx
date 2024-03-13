import classes from './styles.module.scss'

export function Layout({children, flex=1, size, className}){
    const flexSize = size ? size : flex
    return(
        <main className={ classes.main + ' ' + className} style={{flex: flexSize}}>
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
