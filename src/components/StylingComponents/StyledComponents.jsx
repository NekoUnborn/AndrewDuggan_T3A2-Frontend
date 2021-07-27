import styled from "styled-components";
export const MedBox = styled.div`
    background-color: whitesmoke;
    height: 100px;
    width: 100%;
    text-align:center;
    // border: black solid 2px;
    box-sizing: border-box;
    margin: 5px;
`
export const MedicationList = styled.div`
    display:flex;
    flex-direction: column;
    // justify-content: center;
    width: 100%;
    // background-color: grey;
    margin-top: 10px;
    height: auto;
    overflow: scroll;
    padding: 10px;
`
export const Text = styled.p`
    text-decoration: none;
    color: black;
    text-align: center;
`
export const Button = styled.button`
    margin-left: 40%;
`

export const CredentialForm = styled.form`
    text-align:center;
`

export const CredentialItem = styled.div`
    padding: 10px;
`
export const AdminNav = styled.nav`
    display: flex;
    justify-content: space-around;
`

export const NavItem = styled.li`
    display: flex;
    text-decoration: none;
    background-color: whitesmoke;
    width: 50%;
    justify-content: center;
    align-items: center;
    height: 50px;
    border: 2px solid black;
`
export const CheckListBox = styled.div`
    background-color: whitesmoke;
    display: flex; 
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 100%;
    text-align:center;
    // border: black solid 2px;
    box-sizing: border-box;
    margin: 5px;
`