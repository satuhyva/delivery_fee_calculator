import { createStyles, makeStyles } from '@mui/styles'


export const useStyles = makeStyles(() => 
    createStyles({
        appContainer: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 50
        },
        containerWithTopMargin: {
            marginTop: 30
        },
    })
)