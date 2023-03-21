import React, { useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'
import { motion } from "framer-motion"
import "../css/Home.css"

const Home = () => {
    const navigate = useNavigate();

    const [roomId, setRoomId] = useState('');
    const [username, setUsername] = useState('');
    const createNewRoom = (e) => {
        e.preventDefault();
        const id = uuidV4();
        setRoomId(id);
        toast.success('Created and joined a new room');
    };

    const joinRoom = () => {
        if (!roomId || !username) {
            toast.error('Room ID & username is required');
            return;
        }

        navigate(`/editor/${roomId}`, {
            state: {
                username,
            },
        });
    };

    const handleInputEnter = (e) => {
        if (e.code === 'Enter') {
            joinRoom();
        }
    };
    return (
        <>
            <div className="homeWrapper">
                <motion.div
                    animate={{
                        scale: [1, 2, 2, 1, 1],
                        rotate: [0, 0, 270, 270, 0],
                        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                    }}
                >
                    <div className="formWrapper">
                        <img
                            className="homePageLogo"
                            src={logo}
                            alt="code-sync-logo"
                        />

                        <div className="inputGroup">
                            <input
                                type="text"
                                className="inputBox"
                                placeholder="ROOM ID"
                                onChange={(e) => setRoomId(e.target.value)}
                                value={roomId}
                                onKeyUp={handleInputEnter}
                            />
                            <input
                                type="text"
                                className="inputBox"
                                placeholder="USERNAME"
                                onChange={(e) => setUsername(e.target.value)}
                                value={username}
                                onKeyUp={handleInputEnter}
                            />
                            <button className="btn joinBtn" onClick={joinRoom}>
                                Join
                            </button>

                            <span className="createInfo">
                                Don't have a room ID? create &nbsp;
                                <a
                                    onClick={createNewRoom}
                                    href=""
                                    className="createBtn"
                                >
                                    new room
                                </a>
                            </span>
                        </div>
                    </div> </motion.div>
                <footer>
                    <h4>
                        &copy; 2023 || All Rights Reserved @ <span className='footHeading'>

                            Shobhit Kushwaha
                        </span>
                    </h4>
                </footer>
            </div>
        </>
    );
};

export default Home;