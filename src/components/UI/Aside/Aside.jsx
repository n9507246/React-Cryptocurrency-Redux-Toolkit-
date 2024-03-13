import classes from './styles.module.scss'

export default function Aside({children, flex=1, className}){

    return(
        <aside className={ classes.aside + ' ' + className} style={{flex: flex}}>
            {children}
        </aside>
    )
}