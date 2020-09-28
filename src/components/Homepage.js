import React, { useState } from 'react'
import '../App.css';
import { Nav, ButtonGroup, Button, Modal, Form, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icon from 'react-feather';
// import 3 from './img/3.svg'
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';

const data = [
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
]
var data1 = [
    {
        id: 123,
        name: 'air',
        left: 100,
        top: 200,
        src: '/img/3.svg'
    },

    // {
    //     id: 1234,
    //     name: 'air',
    //     left: 300,
    //     top: 200,
    //     src: '/img/4.svg'
    // },



]
export default function Homepage() {
    const [modalShow1, setModalShow1] = useState(false);
    const [MousePosition, setMousePosition] = useState({ left: 0, top: 0 });
    const [translate, setTranslate] = useState({ left: 0, top: 0 });
    const [last, setlast] = useState({ left: 0, top: 0 });
    const [state, setState] = useState(false)
    const [state1, setState1] = useState(false)
    const [aray, setaray] = useState([data1]);

    const handleClick = (event) => {
        console.log(event);
    }
    const handleMouseDown = (event) => {

        setState(true);

        // if (state1 == true && state == true) {

        //     handleMouseMove(translate)
        // }
    }
    async function handleMouseMove(event) {
        const x = event.clientX;
        const y = event.clientY;
        if (state == true) {
            setMousePosition({
                ...translate,
                left: x - 136,
                top: y - 20

            })
            console.log(MousePosition, x, y);
        }

    };
    async function handleMouseUp(event) {

        setState(false);
        setMousePosition({
            ...MousePosition,
            left: event.clientX - 136,
            top: event.clientY - 20
        })


    };
    const handleMouseOver = (event) => {
        setState1(true);

    }
    async function handleMouseOut(event) {
        setState1(false);

    }
    function List(props) {
        const numbers = props.data;

        const listItems = data.map((n) =>
            <li key={n.id} style={{ display: "flex", height: '70px', alignItems: 'center', justifyContent: 'flex-start' }}>
                <div onClick={(event) => handleClick(event)} >
                    <Image src={n.src} className='img' />
                </div>
                <div className='text'>{n.name}</div>

            </li>
        );
        return (
            <ul>{listItems}</ul>
        );
    }
    function List1(props) {

        const listItems1 = data1.map((n) =>
            <li key={n.id} >
                <div className='halo22' style={{ left: MousePosition.left, top: MousePosition.top, zIndex: 1000, }}
                    onMouseDown={(event) => handleMouseDown(event)}
                    onMouseUp={(event) => handleMouseUp(event)}
                // onMouseOver={(event) => handleMouseOver(event)}
                // onMouseOut={(event) => handleMouseOut(event)}
                > <div>
                        <Image src={n.src} className='img' />
                    </div>

                </div>


            </li>
        );
        return (
            <ul>{listItems1}</ul>
        );
    }
    return (
        <div style={{ backgroundColor: '#260026', display: "flex", justifyContent: 'space-between' }} >


            <div className='md-col-1' style={{ height: '741px', }}>

                <ButtonGroup style={{ display: "block" }}>
                    <Button style={{ height: '60px', backgroundColor: '#260026', borderRadius: '0px', border: '0px', color: '#d79f47' }}>
                        <Icon.RefreshCw />
                        <div>
                            <span>Clean</span>
                        </div>
                    </Button>
                    <Button style={{ height: '60px', backgroundColor: '#260026', borderRadius: '0px', border: '0px', color: '#d79f47' }} onClick={() => setModalShow1(true)}>
                        <Icon.Settings />
                        <div>
                            <span>Setting</span>
                        </div>
                    </Button>


                    <Modal

                        show={modalShow1}
                        onHide={() => setModalShow1(false)}

                    >
                        <Modal.Header style={{ backgroundColor: '#fcce84', border: '0px' }}>
                            <Modal.Title id="contained-modal-title-vcenter" >
                                <div className='col-12' style={{ display: 'flex', justifyContent: 'flex-start' }}>
                                    <Button style={{ height: '50px', width: '50px', backgroundColor: '#927be3', alignItems: 'center', justifyContent: "center", alignContent: 'center', display: "flex", borderRadius: '5px', marginLeft: '-35px', color: 'white' }} onClick={() => setModalShow1(modalShow1 => !modalShow1)}>
                                        <Icon.XCircle></Icon.XCircle>
                                    </Button>
                                    <div className='col-10 mx-auto' ><h4 style={{ justifyContent: "center", alignContent: 'center', display: "flex", }}>SETTINGS</h4></div>
                                </div>
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body style={{ backgroundColor: '#f8c46b' }}>
                            <ButtonGroup vertical className='col-12'>
                                {/* <Button className="col-sm-10 mx-auto  mb-2" variant="secondary" size="lg">left</Button> */}
                                <div className='col-sm-10 mx-auto mb-2' style={{ justifyContent: 'space-between', display: "flex" }}>
                                    <Button className='col-sm-3'>left</Button>
                                    <Button className='col-sm-3'>left</Button>
                                </div>
                                <Button className="col-sm-10 mx-auto  mb-2" variant="secondary" size="lg">Middle</Button>
                                <Button className="col-sm-10 mx-auto mb-2" variant="secondary" size="lg">Right</Button>
                                <Button className="col-sm-10 mx-auto mb-2" variant="secondary" size="lg">Right</Button>

                            </ButtonGroup>
                        </Modal.Body>
                        <Modal.Footer style={{ backgroundColor: '#f8c46b', border: '0px' }}>

                        </Modal.Footer>
                    </Modal>

                    <Button style={{ height: '60px', backgroundColor: '#260026', borderRadius: '0px', border: '0px', color: '#d79f47' }}>
                        <Icon.BookOpen />
                        <div>
                            <span>Coures</span>
                        </div>
                    </Button>
                    <Button style={{ height: '60px', backgroundColor: '#260026', borderRadius: '0px', border: '0px', color: '#d79f47' }}>
                        <Icon.Globe />
                        <div>
                            <span>Hnitsd</span>
                        </div>
                    </Button>

                </ButtonGroup>
            </div>
            <div className='col-11' onMouseMove={(event) => handleMouseMove(event)}>

                <List1></List1>

            </div>
            <div className='site'>
                <List>
                </List>
            </div>
        </div >
    )
}
