import React, { useState } from 'react';
import styled from 'styled-components';

const StyleHL = styled.div`

`
const StyleLeggTil = styled.div`

`
const TekstLeggTil = styled.input`

`

const KnappLeggTil = styled.button`

`
const Handleliste = styled.div`
    width: 75px;
    height: 200px;
    position: fixed;
`

const Varer = styled(Handleliste)`
    left: 0%;
    background-color: green;
`

const AntallVarer = styled(Handleliste)`
    left: 75px;    
    background-color: red;
`

const Checkmark = styled(Handleliste)`
    left: 150px;
    background-color: blue;    
`



export const SimenHL = () => {

    const [Vare, setVare] = useState([{vare: 'vare', antall: 0, kjopt: true}]);
    
    const [inputVare, setInputVare] = ('');
    const [antallVarer, setAntallVarer] = (0);

    const LeggTil = (inputVare) => {
        
        const nyVare = {vare: inputVare, antall: 1, kjopt: false};
        setInputVare('');
    };

    const Checked = () => {

    };

    return (
        <StyleHL>
            <StyleLeggTil>
                <TekstLeggTil placeholder="Legg til vare" value={inputVare}></TekstLeggTil>
                <KnappLeggTil onClick={() => LeggTil(inputVare)}>Legg til</KnappLeggTil>
            </StyleLeggTil>
            <Handleliste>
            <Varer>Varer</Varer>
            <AntallVarer>Antall</AntallVarer>
            <Checkmark>
                <input type="checkbox" checked={() => Checked()} />
            </Checkmark>
            </Handleliste>
        </StyleHL>
    );
};
