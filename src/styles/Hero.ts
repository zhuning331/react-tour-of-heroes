import styled from 'styled-components';

export const HeroInput = styled.input`
    padding: .5rem;
`
export const HeroList = styled.ul`
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
`
export const HeroItem = styled.li`
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
    &:hover {
        color: #2c3a41;
        background-color: #e6e6e6;
        left: .1em;
    }
`
export const HeroBadge = styled.span`
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color:#405061;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px; 
`