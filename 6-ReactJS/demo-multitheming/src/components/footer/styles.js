import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: 'auto',
        padding: theme.spacing(2),
        minHeight: '40px',
        backgroundColor: theme.palette.primary.main,
        width: '100%',
        color: '#fff',
        textAlign: 'center'
    }
}));