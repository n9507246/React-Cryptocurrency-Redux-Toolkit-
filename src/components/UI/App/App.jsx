import classes from './styles.module.scss'

export default function App({children}){
    return(
        <div className={classes.app}>
            {children}
        </div>
    )
}