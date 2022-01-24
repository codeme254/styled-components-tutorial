import styled from 'styled-components';

export const StyledHeader = styled.header`
background-color: ${( { theme } ) => theme.colors.header}; 
// background-color: #ebfbff;
padding: 40px 0;

//passing props with styled components
background-color: ${(props) => props.bg};

//we can also destructure these props
border: ${({border}) => border}

// accessing from the theme


/*doing nesting in styled-components*/
// h1{
//     color: red;
// }
// &:hover{
//     background-color: black;
// }
`
export const Nav = styled.nav`
display: flex;
alig-items: center;
justify-content: space-between;
margin-bottom: 40px;

@media (max-width: ${({theme}) => theme.mobile}){
    flex-direction: column;
}
`
export const Logo = styled.img`
@media (max-width: ${({theme}) => theme.mobile}){
    margin-bottom: 40px;
}
`

export const Image = styled.img`
width: 375px;
margin-left: 40px;

@media (max-width: ${({theme}) => theme.mobile}){
    margin: 40px 0 30px;
}
`