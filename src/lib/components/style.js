import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import RobotoMonoTTF from '../assets/RobotoMono-Medium.ttf';

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Roboto Mono';
        src: url(${RobotoMonoTTF}) format('truetype');
    }

    * {
        font-family: 'Roboto Mono';
    }
`;

export const MainContainer = styled.div`
    margin: auto;
    font-family: 'Helvetica', 'sans-serif';

    border-radius: 12px;
    max-width: 40rem;
    min-width: 25rem;

    background-color: ${props => props.theme.mainBackgroundColor};
    color: ${props => props.theme.mainTextColor};
    
    padding: 12px;
;`

export const Input = styled.input`
    outline: none;
    border: none;

    background-color: ${props => props.theme.altBackgroundColor};
    color: ${props => props.theme.mainHighlightColor};

    font-size: 15px;
    max-width: 90%;
    border-radius: 2px;
    caret-color: white;

    &.incorrect {
        background-color: ${props => props.theme.incorrectColor};
    }

    &:focus, &:hover {
        border: 1px solid ${props => props.theme.mainHighlightColor};
    }
`;

export const RedoButton = styled.button`
    color: ${props => props.theme.mainTextColor};
    background-color: ${props => props.theme.altBackgroundColor};

    outline: none;
    border: none;

    padding: 4px;

    min-height: 25px;

    border-radius: 12px;

    &:hover, &:focus {
        cursor: pointer;
        color: ${props => props.theme.mainHighlightColor};
    }
`;

export const BottomBar = styled.div`
    margin-top: 12px;
    display: grid;
    grid-template-columns: 2fr 0.5fr;
    text-align: center;
`;

export const Word = styled.span`
    padding: 0 4px 0 4px;
    font-size: 16px;
    display: inline-block;

    &.highlight {
        color: ${props => props.theme.mainHighlightColor};
    }

    &.correct {
        color: ${props => props.theme.correctColor};
    }

    &.incorrect {
        color: ${props => props.theme.incorrectColor};
    }
`;