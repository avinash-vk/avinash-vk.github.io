import { styled } from '@material-ui/styles';
import { Button } from '@material-ui/core';

export const CustomButton = styled(Button)({
    borderRadius:40,
    padding:'0.5em',
    paddingLeft:'1.4em',
    paddingRight:'1.4em',
    fontSize:'1.2em',
    textTransform:'none',
    fontWeight:'bold',
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    '&:hover':{
        opacity:0.75
    }
});