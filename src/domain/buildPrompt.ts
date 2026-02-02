type PromptOptions = {
    role: string
    input: string
    contexts: string[]
    protocols: string[]
}

export function buildPrompt(opts: PromptOptions): string {
    const contextSection = opts.contexts.length > 0
        ? `Considera los siguientes conceptos en tu respuesta:
${opts.contexts.map((c) => `- ${c}`).join('\n')}

`
        : ''

    const protocolInstructions: Record<string, string> = {
        ask_if_unknown: 'Si algo de lo que te pido no está claro o necesitas más información, pregúntame antes de responder.',
        plan_first: 'Antes de implementar o responder, primero describe tu enfoque o plan de acción.',
        verify_response: 'Revisa tu respuesta cuidadosamente para detectar errores antes de entregarla.',
        avoid_hallucination: 'Si no estás seguro de algo o si podría ser incorrecto, indícalo explícitamente en lugar de inventar información.',
    }

    const protocolSection = opts.protocols.length > 0
        ? `Sigue estas instrucciones:
${opts.protocols.map((p) => `- ${protocolInstructions[p]}`).join('\n')}

`
        : ''

    return `
Actuá como ${opts.role}.
${contextSection}${protocolSection}Pedido:
${opts.input}
`.trim()
}
