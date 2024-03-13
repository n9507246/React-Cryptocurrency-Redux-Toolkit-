import classes from './styles.module.scss'

export default function Aside({children, flex=1, size, className}){

    const flexSize = size ? size : flex

    return(
        <aside className={ classes.aside + ' ' + className} style={{flex: flexSize}}>
            {children}
        </aside>
    )
}