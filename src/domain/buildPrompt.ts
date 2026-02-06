import type { PromptingGuide } from './llmModels'

type PromptOptions = {
    role: string
    input: string
    contexts: string[]
    protocols: string[]
    modelGuide?: PromptingGuide | null
}

const contextNames: Record<string, string> = {
    solid: 'SOLID',
    tdd: 'TDD',
    ddd: 'DDD',
    hexagonal: 'Hexagonal Architecture',
    clean_architecture: 'Clean Architecture',
    microservices: 'Microservices',
    event_driven: 'Event Driven Architecture',
    design_patterns: 'Design Patterns',
}

const protocolRules: Record<string, { key: string; value: string }> = {
    ask_if_unknown: {
        key: 'on_ambiguity',
        value: 'Stop and ask for clarification before proceeding.',
    },
    plan_first: {
        key: 'workflow',
        value: 'Always provide a detailed plan of action before any implementation.',
    },
    verify_response: {
        key: 'validation',
        value: 'Self-verify the logic of your response against the defined architectures.',
    },
    avoid_hallucination: {
        key: 'on_uncertainty',
        value: 'Explicitly state if information is not confirmed; do not hallucinate.',
    },
}

export type PromptOutput = {
    config: {
        role: string
        capabilities: string[]
    }
    behavior_rules: {
        on_ambiguity?: string
        on_uncertainty?: string
        workflow?: string
        validation?: string
    }
    model_guidelines?: {
        model_name: string
        strengths: string[]
        best_practices: string[]
        response_tone?: string
    }
    output_format: string
}

export function buildPrompt(opts: PromptOptions): PromptOutput {
    const capabilities = opts.contexts.map((ctx) => contextNames[ctx] || ctx)

    const behavior_rules: PromptOutput['behavior_rules'] = {}
    opts.protocols.forEach((prot) => {
        const rule = protocolRules[prot]
        if (rule) {
            behavior_rules[rule.key as keyof PromptOutput['behavior_rules']] = rule.value
        }
    })

    const output: PromptOutput = {
        config: {
            role: opts.role,
            capabilities: capabilities,
        },
        behavior_rules: behavior_rules,
        output_format: opts.input,
    }

    if (opts.modelGuide) {
        const bestPractices: string[] = []
        
        if (opts.modelGuide.prompting_best_practices?.general_guidelines) {
            opts.modelGuide.prompting_best_practices.general_guidelines
                .slice(0, 3)
                .forEach((g) => {
                    bestPractices.push(`${g.rule}: ${g.description}`)
                })
        }

        output.model_guidelines = {
            model_name: opts.modelGuide.llm_name || 'Unknown',
            strengths: opts.modelGuide.strengths?.slice(0, 5) || [],
            best_practices: bestPractices,
            response_tone: opts.modelGuide.response_style?.tone,
        }
    }

    return output
}

export function buildPromptJsonString(opts: PromptOptions): string {
    const output = buildPrompt(opts)
    return JSON.stringify(output, null, 2)
}
