import React, { useEffect } from "react";
import { useState} from "react";
import axios from 'axios';
function Game()
{
    const [name,setName]=useState('Player1');
    const alphabets =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    const countries =['AFG','BNG','ENG','IND','AU','RSA','PAK','WI','SL','NZ'];
    const [mycountry,setMycountry]=useState('');
    const [myalphabet,setMyalphabet]=useState('');
    const [player,setPlayer]=useState('');
    const [pro,setPro]=useState('No');
    const [e,setE]=useState('');
    const [one,setOne]=useState(false);
    const [ce,setCe]=useState('');
    const [ne,setNe]=useState('');
    const [p1,setP1]=useState([]);
    const [p2,setP2]=useState([]);
    const [over,setOver]=useState([]);
    const click = () =>
    {
        if(one===false)
        {
        const alphabet0to1=Math.random();
        const country0to1=Math.random();
        const alphabet=Math.floor(alphabet0to1*26);
        const country=Math.floor(country0to1*10);
        const mycountryind=countries[country];
        const myalphabetind=alphabets[alphabet];
        setMycountry(mycountryind);
        setMyalphabet(myalphabetind);
        setPro('Yes');
        if(e!=='')
        {
            setE('');
        } 
    }
    else
    {
        setCe('erpka okesaare chance');
    }
    setOne(true);
    }
    const getinput = (event) =>
    {
        setPlayer(event.target.value);
    }
    const click2 = () =>
    {
        if(pro==='Yes')
        {
            if(player!=='')
            {       
        setCe('');
        setOne(false);
        setNe('');
        setPlayer('');
        setMycountry('');
        setMyalphabet('');
                if(name==='Player1')
                {
                    setP1((prev)=>[...prev,player]);
                }
                else{
                    setP2((prev)=>[...prev,player]);
                }
            }
            else{
                setNe('enter name correctly');
            }
        if(name==='Player1')
        {
            setName('Player2');
        }
        else
        {
            setName('Player1');
        }
    }
    else
    {
        setE('Select country and alphabet first');
    }
    setPro('No');
    }
    return(
        <div>
            <p>{name} click to start</p>
            <button onClick={click}>Click!</button>
            <p>country:{mycountry}</p>
            <p>Alphabet:{myalphabet}</p>
            <input type="text" value={player} onChange={getinput}></input>
            <button onClick={click2}>Enter</button>
            <p>{ce}</p>
            <p>{e}</p>
            <p>{ne}</p>
            <ul>
                {
                    over.map((ind,key) =>
                    (
                        <li>{ind}</li>
                    ))
                }
            </ul>
            <div className="table">
            <ul>
                {
                    p1.map((ind,key)=>
                    (
                        <li>{ind}</li>
                    ))
                }
            </ul>
            <ul>
                {
                    p2.map((ind,key)=>
                    (
                        <li>{ind}</li>
                    ))
                }
            </ul>
            </div>
        </div>
    );
}
export default Game;