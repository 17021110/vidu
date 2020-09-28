import React from 'react';
import styled from 'styled-components';
import '../../App.css';
import Drapable from '../Drapable';
import Dropable from '../Dropable';
import { Image } from 'react-bootstrap';

const Wrapper = styled.div`
    width:100%;
   
    display:flex;
    justify-content:center;

`;
const Item = styled.div`
    padding:8px;
    color:#555;
    
    border-radius:3px;
    width:250px;
    
   
`;
const dropableStyle = {
    backgroundColor: '#260026',
    width: '100%',
    height: '100%',
    position: 'absolute',



};
const dropableStyle1 = {
    height: '100%',
    position: 'absolute',
    bottom: '0',
    right: '0',
    zindex: '990',
    background: '#380028',
    width: '280px',
    listStyleType: 'none'


};

export default class DndTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: 12,
                    name: 'air',
                    left: 100,
                    top: 200,
                    src: '/img/3.svg'
                },
                {
                    id: 13,
                    name: 'brick',
                    left: 200,
                    top: 300,
                    src: '/img/4.svg'
                },
                {
                    id: 14,
                    name: 'dust',
                    left: 200,
                    top: 300,
                    src: '/img/14.svg'
                },
                {
                    id: 172,
                    name: 'earth',
                    left: 200,
                    top: 300,
                    src: '/img/172.svg'
                },
            ],
        }
    }
    render() {
        // var notes = this.props.items.map((item, i)=>{
        //     return(
        //         <li className="listLink" key={i}>
        //             <p>{item.title}</p>

        //         </li>
        //         )
        //     });
        return (
            <Wrapper>
                <Dropable id='dr1' style={dropableStyle}>

                </Dropable>
                <Dropable id='dr2' style={dropableStyle1}>
                    {this.state.data.map(item => (
                        <li key={item.id} style={{ marginTop: '10px', marginBottom: '-40px' }}>
                            <Drapable id={item.id} style={{ height: '80px', width: '100px', display: "flex", justifyContent: 'flex-start', alignItems: 'center' }}>
                                <Item style={{ margin: '8px' }} >
                                    <Image name={item.name} id={item.id} src={item.src} className='img' />
                                </Item>
                                <h4 style={{ color: '#d79f47', justifyContent: 'center', display: 'flex' }}>{item.name}</h4>
                            </Drapable>
                        </li>
                    ))}
                </Dropable>
            </Wrapper >
        );
    }
}