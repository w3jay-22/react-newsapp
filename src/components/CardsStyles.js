import { makeStyles } from '@material-ui/core/styles'

export default makeStyles({
    container :{
        padding : '0 5%',
        width : '100%',
        margin : 0,
    },
    card:{
        display:'flex',
        fontDirection :'column',
        justifyContent :'space-between',
        alignItems : 'center',
        width:'110%',
        height:'40vh',
        padding : '15%',
        borderRadius:10,
        color:'white'

    },
    infoCard:{
        display:'flex',
        flexDirection:'column',
        textAlign:'center'
    }
});