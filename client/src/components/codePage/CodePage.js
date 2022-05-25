import React, { useState, useEffect } from 'react';
import Editor from './Editor';
import useLocalStorage from '../../hooks/useLocalStorage';
import "./codePage.css";

function CodePage() {
    const [html, setHtml] = useLocalStorage('html', '')
    const [css, setCss] = useLocalStorage('css', '')
    const [js, setJs] = useLocalStorage('js', '')
    const [srcDoc, setSrcDoc] = useState('')
    const [toggleState, setToggleState] = useLocalStorage(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };


    useEffect(() => {
        const timeout = setTimeout(() => {
            setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `)
        }, 250)

        return () => clearTimeout(timeout)
    }, [html, css, js])


    return (
        <>
                <div className={"editor-selector"}>
                    <button onClick={() => toggleTab(1)} >HTML</button>
                    <button onClick={() => toggleTab(2)}>CSS</button>
                    <button onClick={() => toggleTab(3)} >JS</button>
                </div>
            <div className="pane top-pane">
                <Editor
                    className={toggleState === 1 ? "active" : "hidden"}
                    language="xml"
                    displayName="HTML"
                    value={html}
                    onChange={setHtml}
                />
                <Editor
                    className={toggleState === 2 ? "active" : "hidden"}
                    language="css"
                    displayName="CSS"
                    value={css}
                    onChange={setCss}
                />
                <Editor

                    className={toggleState === 3 ? "active" : "hidden"}
                    language="javascript"
                    displayName="JS"
                    value={js}
                    onChange={setJs}
                />
            </div>
            <div className="pane">
                <iframe
                    srcDoc={srcDoc}
                    title="output"
                    sandbox="allow-scripts"
                    frameBorder="0"
                    width="100%"
                    height="100%"
                />
            </div>
        </>
    )
}

export default CodePage;