export type LLMModel = {
    id: string
    name: string
    company: string
    icon: string
    guideFile: string
    models: string[]
    strengths: string[]
}

export const availableModels: LLMModel[] = [
    {
        id: 'openai',
        name: 'OpenAI ChatGPT / GPT',
        company: 'OpenAI',
        icon: '🤖',
        guideFile: 'openai-chatgpt.json',
        models: ['GPT-5 Thinking', 'GPT-5', 'GPT-4.5', 'GPT-4.1', 'GPT-4o', 'o3', 'o4-mini'],
        strengths: ['Razonamiento avanzado', 'Código y análisis técnico', 'Conversaciones naturales', 'Integración con herramientas'],
    },
    {
        id: 'anthropic',
        name: 'Anthropic Claude',
        company: 'Anthropic',
        icon: '🧠',
        guideFile: 'anthropic-claude.json',
        models: ['Claude 4.5 Sonnet', 'Claude 4.1 Opus', 'Claude 4 Sonnet', 'Claude 3.7 Sonnet', 'Claude Code'],
        strengths: ['Razonamiento detallado', 'Análisis de documentos largos', 'Código y debugging', 'Escritura creativa'],
    },
    {
        id: 'google',
        name: 'Google Gemini',
        company: 'Google',
        icon: '💎',
        guideFile: 'google-gemini.json',
        models: ['Gemini 3.5 Pro', 'Gemini 3.5 Flash', 'Gemini 2.5 Pro', 'Gemini 2.0 Flash', 'Gemini 1.5 Pro'],
        strengths: ['Multimodal', 'Ventana de contexto grande (2M tokens)', 'Integración Google', 'Razonamiento paso a paso'],
    },
    {
        id: 'xai',
        name: 'xAI Grok',
        company: 'xAI',
        icon: '🚀',
        guideFile: 'xai-grok.json',
        models: ['Grok 4', 'Grok 3', 'Grok 2', 'Grok 1'],
        strengths: ['Conocimiento actualizado', 'Acceso a X (Twitter)', 'Búsquedas profundas', 'Eventos en tiempo real'],
    },
    {
        id: 'perplexity',
        name: 'Perplexity Assistant',
        company: 'Perplexity',
        icon: '🔍',
        guideFile: 'perplexity-assistant.json',
        models: ['Perplexity Pro', 'Sonar', 'Sonar Pro'],
        strengths: ['Búsqueda web en tiempo real', 'Citas automáticas', 'Research académico', 'Análisis de páginas web'],
    },
    {
        id: 'mistral',
        name: 'Mistral Le Chat',
        company: 'Mistral AI',
        icon: '🐱',
        guideFile: 'mistral-lechat.json',
        models: ['Le Chat', 'Mistral Large', 'Mistral Medium', 'Mistral Small'],
        strengths: ['Razonamiento eficiente', 'Conversaciones empáticas', 'Economía de lenguaje', 'Widgets interactivos'],
    },
    {
        id: 'proton',
        name: 'Proton Lumo',
        company: 'Proton',
        icon: '🔒',
        guideFile: 'proton-lumo.json',
        models: ['Lumo Plus', 'Lumo Free'],
        strengths: ['Privacidad first', 'Encriptación extremo a extremo', 'Personalidad tipo gato', 'Integración Proton'],
    },
    {
        id: 'other',
        name: 'Otros LLMs',
        company: 'General',
        icon: '🌐',
        guideFile: 'other-llms-general.json',
        models: ['Sesame AI', 'Kagi', 'Fellou', 'Raycast AI', 'Notion AI', 'Warp AI'],
        strengths: ['Principios universales', 'Patrones comunes', 'Consideraciones éticas'],
    },
]

export type PromptingGuide = {
    llm_name?: string
    company?: string
    models?: string[]
    knowledge_cutoff?: string
    strengths?: string[]
    prompting_best_practices?: {
        general_guidelines?: Array<{
            rule: string
            description: string
            example_good?: string
            example_bad?: string
            critical?: boolean
        }>
        specific_guidelines?: Array<{
            rule: string
            description: string
        }>
        [key: string]: unknown
    }
    tool_usage?: Record<string, unknown>
    special_features?: Record<string, unknown>
    response_style?: {
        tone?: string
        verbosity_default?: number
        [key: string]: unknown
    }
    formatting_preferences?: Record<string, unknown>
    safety_guidelines?: string[] | Record<string, unknown>
}

export async function loadPromptingGuide(guideFile: string): Promise<PromptingGuide | null> {
    try {
        const response = await fetch(`./prompting-guides/${guideFile}`)
        if (!response.ok) {
            throw new Error(`Failed to load ${guideFile}`)
        }
        return await response.json() as PromptingGuide
    } catch (error) {
        console.error('Error loading prompting guide:', error)
        return null
    }
}

export function extractBestPractices(guide: PromptingGuide | null): string[] {
    if (!guide || !guide.prompting_best_practices) {
        return []
    }

    const practices: string[] = []
    const { general_guidelines, specific_guidelines } = guide.prompting_best_practices

    if (general_guidelines && Array.isArray(general_guidelines)) {
        general_guidelines.forEach((guideline) => {
            if (guideline.rule && guideline.description) {
                practices.push(`${guideline.rule}: ${guideline.description}`)
            }
        })
    }

    if (specific_guidelines && Array.isArray(specific_guidelines)) {
        specific_guidelines.forEach((guideline) => {
            if (guideline.rule && guideline.description) {
                practices.push(`${guideline.rule}: ${guideline.description}`)
            }
        })
    }

    return practices.slice(0, 5)
}

export function getModelSpecificInstructions(guide: PromptingGuide | null): string {
    if (!guide) return ''

    const instructions: string[] = []

    if (guide.response_style?.tone) {
        instructions.push(`Tono: ${guide.response_style.tone}`)
    }

    if (guide.prompting_best_practices?.general_guidelines) {
        const criticalGuidelines = guide.prompting_best_practices.general_guidelines
            .filter((g) => g.critical)
            .slice(0, 2)
        
        criticalGuidelines.forEach((g) => {
            instructions.push(`IMPORTANTE - ${g.rule}: ${g.description}`)
        })
    }

    return instructions.join('\n')
}
