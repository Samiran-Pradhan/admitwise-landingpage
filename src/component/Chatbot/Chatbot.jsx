import React from "react";
import './ChatBot.css';
import { io } from "socket.io-client";
import { MdChat, MdClose, MdSend } from "react-icons/md";
import { baseurl } from "../../App";



export const ChatBot = () => {
    const [socket, setSocket] = React.useState(undefined);
    const [isOpen, setIsOpen] = React.useState(false);
    const [msg, setMsg] = React.useState('');
    const [chat, setChat] = React.useState([]);
    const ref = React.useRef(null);

   

    React.useEffect(() => {
        const _socket = io(baseurl);
        setSocket(_socket);
        return () => {
            _socket.disconnect();
        }
    }, [])

    React.useEffect(() => {
        const ans = (data) => setChat([...chat, { ...data, type: 1 }]);
        if (socket) socket.on('answer', ans);
        return () => {
            if (socket) socket.off('answer', ans);
        }
    }, [socket, chat])

    React.useEffect(() => {
        ref?.current?.lastElementChild?.scrollIntoView({ behavior: 'smooth' });
    }, [chat])

    const handleSubmit = () => {
        setChat([...chat, { question: msg.trim(), type: 0 }]);
        socket.emit('question', msg.trim());
        setMsg('');
    }

    return (
        <>
            <button className="chatbot-toggler" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <MdClose className="chat-icon" /> : <MdChat className="chat-icon" />}</button>
            {
                isOpen ?
                    <div className="chatbot">
                        <header>
                            <h2>Chatbot</h2>
                        </header>
                        <ul className="chatbox" ref={ref}>
                            {
                                chat.map((c, i) => c.type === 0 ?
                                    <li key={i} className="chat outgoing">
                                        <p>{c.question}</p>
                                    </li> :
                                    <li key={i} className="chat incoming">
                                        <p>{c.answer}</p>
                                    </li>
                                )
                            }


                        </ul>
                        <div className="chat-input">
                            <textarea placeholder="Enter your question..." spellCheck="false" value={msg} onChange={(e) => setMsg(e.target.value)} onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    handleSubmit();
                                }
                            }}></textarea>
                            <MdSend id="send-btn" onClick={handleSubmit} />
                        </div>
                    </div>
                    : <></>
            }

        </>
    )
}