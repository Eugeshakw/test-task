import styled from 'styled-components';

export const ConHeader = styled.div`
    
.innerConHeader{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 13px 24px 13px 24px;
};

.btn-users{
    background: ${p => p.theme.colors.primary};
    padding: 4px 29px;
    font-family: "Nunito", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 162%;
    text-align: center; 
    color: ${p => p.theme.colors.blackTxt};
    border-radius: 80px;
};
.btn-sign{
    background: ${p => p.theme.colors.primary};
    padding: 4px 22px;
    font-family: "Nunito", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 162%;
    text-align: center; 
    color: ${p => p.theme.colors.blackTxt};
    border-radius: 80px;
    


};
.conBtn{
    gap: 10px;
    display: flex;
};
`;