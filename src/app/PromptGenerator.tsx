import { useState } from 'react'
import { buildPrompt } from '../domain/buildPrompt'

export function PromptGenerator() {
    const [input, setInput] = useState('')
    const [role, setRole] = useState('backend developer')
    const [tone, setTone] = useState('técnico')
    const [format, setFormat] = useState('paso a paso')

    const prompt = buildPrompt({ input, role, tone, format })

    const copyToClipboard = async () => {
        await navigator.clipboard.writeText(prompt)
        alert('Prompt copiado')
    }

    return (
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <h1>Prompt Generator</h1>

            <label>
                Qué querés pedir
                <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    rows={5}
                    style={{ width: '100%' }}
                />
            </label>

            <label>
                Rol
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="backend developer">Backend</option>
                    <option value="frontend developer">Frontend</option>
                    <option value="software architect">Arquitecto</option>
                    <option value="docente">Docente</option>
                </select>
            </label>

            <label>
                Tono
                <select value={tone} onChange={(e) => setTone(e.target.value)}>
                    <option value="técnico">Técnico</option>
                    <option value="simple">Simple</option>
                    <option value="didáctico">Didáctico</option>
                </select>
            </label>

            <label>
                Formato
                <select value={format} onChange={(e) => setFormat(e.target.value)}>
                    <option value="paso a paso">Paso a paso</option>
                    <option value="lista">Lista</option>
                    <option value="código con explicación">Código + explicación</option>
                </select>
            </label>

            <h3>Prompt generado</h3>
            <pre
                style={{
                    whiteSpace: 'pre-wrap',
                    color: '#eee',
                    backgroundColor: '#121212',
                    margin: '0 auto',
                    padding: 12,
                }}
            >
                {prompt}
            </pre>

            <button onClick={copyToClipboard}>Copiar</button>
        </div>
    )
}
