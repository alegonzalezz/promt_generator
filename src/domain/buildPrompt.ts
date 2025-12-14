type PromptOptions = {
    role: string
    tone: string
    format: string
    input: string
}

export function buildPrompt(opts: PromptOptions): string {
    return `
Actuá como ${opts.role}.
Usá un tono ${opts.tone}.
Respondé en formato ${opts.format}.

Pedido:
${opts.input}
`.trim()
}
