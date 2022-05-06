import React, { useState, useEffect } from 'react';
import Editor from './Editor';
import useLocalStorage from '../../hooks/useLocalStorage';
import "./codePage.css";

function CodePage() {
    const [html, setHtml] = useLocalStorage('html', '')
    const [css, setCss] = useLocalStorage('css', '')
    const [js, setJs] = useLocalStorage('js', '')
    const [srcDoc, setSrcDoc] = useState('')

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
            <div className="pane top-pane">
                <div>
                    <span >HTML</span>
                    <span >CSS</span>
                    <span >JS</span>
                </div>
                <Editor
                    className = "html active"
                    language="xml"
                    displayName="HTML"
                    value={html}
                    onChange={setHtml}
                />
                <Editor
                    className = "css"
                    language="css"
                    displayName="CSS"
                    value={css}
                    onChange={setCss}
                />
                <Editor
                    className = "js"
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