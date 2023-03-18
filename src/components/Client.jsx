import React from 'react';
import Avatar from 'react-avatar';
import { motion } from 'framer-motion';

const Client = ({ username }) => {
    return (
        <>
            <motion.div
                animate={{ rotate: 360 }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 1,
                    repeatDelay: 1,
                }}>

                <div className="client">
                    <Avatar name={username} size={50} round="20px" />
                    {/* <span className="userName">{username}</span> */}
                </div>
            </motion.div>
        </>
    );
};

export default Client;