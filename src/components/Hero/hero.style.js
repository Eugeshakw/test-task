import styled from 'styled-components';
import heroImageDesc from '../../common/images/desctop.jpg'

export const ImgHero = styled.div`
    background-image: url(${heroImageDesc});
    background-size: cover; 
    background-position: center; 
    width: 100%;
    /* height: 100vh; */
    padding-bottom: 163px;
    padding-top: 163px;
    margin-bottom: 140px;


    h1 {
        font-weight: 400;
        font-size: 40px;
        line-height: 100%;
        text-align: center;
        color: #fff;
        font-family: "Nunito", sans-serif;
        margin-bottom: 21px;

    }

    p{
        font-family: "Nunito", sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 162%;
        text-align: center;
        color: #fff;
        margin-bottom: 31px;
    }

    .innerConTxt{
        width: 380px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: auto;
    }
    .heroSignUp{
        background-color: ${p => p.theme.colors.primary};
        font-family: "Nunito", sans-serif;
        padding: 4px 22px;
        font-weight: 400;
        font-size: 16px;
        line-height: 162%;
        text-align: center;
        color: ${p => p.theme.colors.blackTxt};
        border-radius: 80px;
    }

`;