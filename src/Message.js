import './Message.css';

function Message({text,extraText}) {
    return (
        <div className="Message">
            <header className="Message-header">
                <a href="#" style={{color: "red"}}>{text} {extraText}</a>
            </header>
        </div>
    );
}
export default Message;







