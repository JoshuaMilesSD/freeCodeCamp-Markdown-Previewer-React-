import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";

const Editor = ({ content, handleTextareaChange }) => 
    <textarea value={content} onChange={handleTextareaChange} />

const previewer = ({content}) => <div id="preview">{content}</div>
const App = () => {
    const [content, setContent] = React.useState("Hey this is Josh");

    const handleTextareaChange = (event) => {
        setContent(event.target.value);
    }

    return (
        <div className="main">
            <Editor content={content} handleTextareaChange={handleTextareaChange} />
        <Previewer content={content}/>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector("#app"));
