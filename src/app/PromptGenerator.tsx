import { useState, useEffect, useCallback } from 'react'
import {
    Container,
    Card,
    CardHeader,
    CardContent,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Typography,
    Box,
    Chip,
    IconButton,
    Tooltip,
    FormGroup,
    FormControlLabel,
    Checkbox,
    Paper,
    CircularProgress,
    Alert,
} from '@mui/material'
import {
    ContentCopy as CopyIcon,
    Code as CodeIcon,
    Psychology as RoleIcon,
    CheckCircle as CheckIcon,
    Info as InfoIcon,
    ExpandMore as ExpandMoreIcon,
    ExpandLess as ExpandLessIcon,
    SmartToy as ModelIcon,
} from '@mui/icons-material'
import { buildPromptJsonString } from '../domain/buildPrompt'
import { availableModels, loadPromptingGuide, type PromptingGuide } from '../domain/llmModels'
import { skillsTree } from '../domain/skills'
import { SkillTree } from './SkillTree'
import { Lightbulb as SkillsIcon } from '@mui/icons-material'

const roleOptions = [
    { value: 'backend developer', label: 'Backend Developer', icon: <CodeIcon /> },
    { value: 'frontend developer', label: 'Frontend Developer', icon: <CodeIcon /> },
    { value: 'software architect', label: 'Software Architect', icon: <RoleIcon /> },
    { value: 'docente', label: 'Docente', icon: <RoleIcon /> },
    { value: 'data scientist', label: 'Data Scientist', icon: <CodeIcon /> },
    { value: 'product manager', label: 'Product Manager', icon: <RoleIcon /> },
]

const contextOptions = [
    {
        id: 'solid',
        label: 'SOLID',
        description: 'Principios de diseño orientado a objetos: Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion',
    },
    {
        id: 'tdd',
        label: 'TDD',
        description: 'Test Driven Development: escribir tests antes del código, ciclo red-green-refactor',
    },
    {
        id: 'ddd',
        label: 'DDD',
        description: 'Domain Driven Design: diseño orientado al dominio del negocio, bounded contexts, aggregates',
    },
    {
        id: 'hexagonal',
        label: 'Arquitectura Hexagonal',
        description: 'Arquitectura de puertos y adaptadores, separando lógica de dominio de infraestructura',
    },
    {
        id: 'clean_architecture',
        label: 'Clean Architecture',
        description: 'Arquitectura limpia con reglas de dependencia, entities, use cases, interface adapters',
    },
    {
        id: 'microservices',
        label: 'Microservicios',
        description: 'Arquitectura de microservicios, servicios pequeños y autónomos, comunicación API/mensajes',
    },
    {
        id: 'event_driven',
        label: 'Event Driven',
        description: 'Arquitectura basada en eventos, pub/sub, event sourcing, CQRS',
    },
    {
        id: 'design_patterns',
        label: 'Patrones de Diseño',
        description: 'Patrones creacionales, estructurales y comportamentales (Singleton, Factory, Observer, Strategy, etc)',
    },
]

const protocolOptions = [
    {
        id: 'ask_if_unknown',
        label: 'Si no sabes, pregúntame',
        description: 'Si algo no está claro, pide aclaraciones antes de responder',
    },
    {
        id: 'plan_first',
        label: 'Haz un plan antes de arrancar',
        description: 'Primero describe tu enfoque antes de implementar',
    },
    {
        id: 'verify_response',
        label: 'Verifica tu respuesta',
        description: 'Revisa tu respuesta para detectar errores antes de entregarla',
    },
    {
        id: 'avoid_hallucination',
        label: 'Evita alucinaciones',
        description: 'Si no estás seguro de algo, indícalo explícitamente',
    },
]

type ExpandedSection = 'context' | 'protocol' | 'model' | 'skills' | null

export function PromptGenerator() {
    const [input, setInput] = useState('')
    const [role, setRole] = useState('backend developer')
    const [selectedModel, setSelectedModel] = useState(availableModels[0].id)
    const [modelGuide, setModelGuide] = useState<PromptingGuide | null>(null)
    const [loadingGuide, setLoadingGuide] = useState(false)
    const [guideError, setGuideError] = useState<string | null>(null)
    const [contexts, setContexts] = useState<string[]>([])
    const [protocols, setProtocols] = useState<string[]>([])
    const [expandedSection, setExpandedSection] = useState<ExpandedSection>(null)
    const [selectedSkills, setSelectedSkills] = useState<string[]>([])

    const loadGuide = useCallback(async (modelId: string) => {
        const model = availableModels.find((m) => m.id === modelId)
        if (!model) return

        setLoadingGuide(true)
        setGuideError(null)
        try {
            const guide = await loadPromptingGuide(model.guideFile)
            setModelGuide(guide)
            if (!guide) {
                setGuideError(`No se pudo cargar la guía para ${model.name}`)
            }
        } catch {
            setGuideError('Error cargando la guía del modelo')
            setModelGuide(null)
        } finally {
            setLoadingGuide(false)
        }
    }, [])

    useEffect(() => {
        loadGuide(selectedModel)
    }, [selectedModel, loadGuide])

    const toggleSection = (section: 'context' | 'protocol' | 'model' | 'skills') => {
        setExpandedSection((prev) => (prev === section ? null : section))
    }

    const handleContextToggle = (contextId: string) => {
        setContexts((prev) =>
            prev.includes(contextId) ? prev.filter((c) => c !== contextId) : [...prev, contextId]
        )
    }

    const handleProtocolToggle = (protocolId: string) => {
        setProtocols((prev) =>
            prev.includes(protocolId) ? prev.filter((p) => p !== protocolId) : [...prev, protocolId]
        )
    }

    const handleSkillToggle = (skillId: string) => {
        setSelectedSkills((prev) =>
            prev.includes(skillId) ? prev.filter((s) => s !== skillId) : [...prev, skillId]
        )
    }

    const prompt = input ? buildPromptJsonString({ input, role, contexts, protocols, modelGuide, skills: selectedSkills }) : ''

    const copyToClipboard = async () => {
        await navigator.clipboard.writeText(prompt)
    }

    const selectedModelData = availableModels.find((m) => m.id === selectedModel)

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Typography variant="h1" component="h1" align="center" gutterBottom>
                Prompt Generator
            </Typography>
            <Typography variant="subtitle1" align="center" color="text.secondary" sx={{ mb: 4 }}>
                Crea prompts personalizados optimizados para diferentes modelos de IA
            </Typography>

            <Box
                sx={{
                    display: 'flex',
                    gap: 3,
                    flexDirection: { xs: 'column', md: 'row' },
                }}
            >
                <Box sx={{ flex: { xs: '1 1 100%', md: '7 7 0' } }}>
                    <Card elevation={0}>
                        <CardHeader
                            title="Configuración"
                            subheader="Define cómo quieres tu prompt"
                        />
                        <CardContent>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                                <TextField
                                    fullWidth
                                    label="¿Qué querés pedir?"
                                    multiline
                                    rows={6}
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Describe tu solicitud aquí..."
                                    variant="outlined"
                                />

                                <FormControl fullWidth>
                                    <InputLabel>Modelo de IA</InputLabel>
                                    <Select
                                        value={selectedModel}
                                        onChange={(e) => setSelectedModel(e.target.value)}
                                        label="Modelo de IA"
                                    >
                                        {availableModels.map((model) => (
                                            <MenuItem key={model.id} value={model.id}>
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                    <span>{model.icon}</span>
                                                    <Box>
                                                        <Typography variant="body2">{model.name}</Typography>
                                                        <Typography variant="caption" color="text.secondary">
                                                            {model.company}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>

                                {loadingGuide && (
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <CircularProgress size={16} />
                                        <Typography variant="caption" color="text.secondary">
                                            Cargando guía del modelo...
                                        </Typography>
                                    </Box>
                                )}

                                {guideError && (
                                    <Alert severity="warning" sx={{ fontSize: '0.875rem' }}>
                                        {guideError}
                                    </Alert>
                                )}

                                {modelGuide && selectedModelData && (
                                    <Paper elevation={0} sx={{ border: '1px solid rgba(76, 175, 80, 0.3)', p: 2 }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                                            <ModelIcon color="success" />
                                            <Typography variant="subtitle2" color="success.main">
                                                Modelo seleccionado: {selectedModelData.name}
                                            </Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                            {selectedModelData.strengths.slice(0, 4).map((strength, idx) => (
                                                <Chip
                                                    key={idx}
                                                    label={strength}
                                                    size="small"
                                                    color="success"
                                                    variant="outlined"
                                                    sx={{ fontSize: '0.75rem' }}
                                                />
                                            ))}
                                        </Box>
                                    </Paper>
                                )}

                                <FormControl fullWidth>
                                    <InputLabel>Rol</InputLabel>
                                    <Select
                                        value={role}
                                        onChange={(e) => setRole(e.target.value)}
                                        label="Rol"
                                    >
                                        {roleOptions.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                    {option.icon}
                                                    {option.label}
                                                </Box>
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>

                                <Paper elevation={0} sx={{ border: '1px solid rgba(74, 144, 226, 0.2)' }}>
                                    <Box
                                        sx={{
                                            p: 2,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            cursor: 'pointer',
                                            '&:hover': { backgroundColor: 'rgba(74, 144, 226, 0.05)' },
                                        }}
                                        onClick={() => toggleSection('context')}
                                    >
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                            <InfoIcon color="primary" />
                                            <Typography variant="h6">Contexto Adicional</Typography>
                                        </Box>
                                        {expandedSection === 'context' ? <ExpandLessIcon color="primary" /> : <ExpandMoreIcon color="primary" />}
                                    </Box>
                                    {expandedSection === 'context' && (
                                        <Box sx={{ p: 2, pt: 0 }}>
                                            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                                Selecciona los conceptos que quieras incluir en el prompt
                                            </Typography>
                                            <FormGroup>
                                                <Box sx={{ display: 'grid', gap: 1, gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' } }}>
                                                    {contextOptions.map((context) => (
                                                        <Paper
                                                            key={context.id}
                                                            elevation={contexts.includes(context.id) ? 2 : 0}
                                                            sx={{
                                                                p: 1.5,
                                                                border: `1px solid ${contexts.includes(context.id) ? 'rgba(74, 144, 226, 0.5)' : 'rgba(255, 255, 255, 0.1)'}`,
                                                                backgroundColor: contexts.includes(context.id) ? 'rgba(74, 144, 226, 0.1)' : 'transparent',
                                                                borderRadius: 1,
                                                            }}
                                                        >
                                                            <FormControlLabel
                                                                control={
                                                                    <Checkbox
                                                                        checked={contexts.includes(context.id)}
                                                                        onChange={() => handleContextToggle(context.id)}
                                                                        icon={<CheckIcon sx={{ opacity: 0.3 }} />}
                                                                        checkedIcon={<CheckIcon />}
                                                                    />
                                                                }
                                                                label={
                                                                    <Box>
                                                                        <Typography variant="body2" fontWeight={500}>
                                                                            {context.label}
                                                                        </Typography>
                                                                        <Typography variant="caption" color="text.secondary" display="block">
                                                                            {context.description}
                                                                        </Typography>
                                                                    </Box>
                                                                }
                                                            />
                                                        </Paper>
                                                    ))}
                                                </Box>
                                            </FormGroup>
                                        </Box>
                                    )}
                                </Paper>

                                <Paper elevation={0} sx={{ border: '1px solid rgba(156, 39, 176, 0.2)' }}>
                                    <Box
                                        sx={{
                                            p: 2,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            cursor: 'pointer',
                                            '&:hover': { backgroundColor: 'rgba(156, 39, 176, 0.05)' },
                                        }}
                                        onClick={() => toggleSection('protocol')}
                                    >
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                            <InfoIcon color="secondary" />
                                            <Typography variant="h6">Protocolos de Respuesta</Typography>
                                        </Box>
                                        {expandedSection === 'protocol' ? <ExpandLessIcon color="secondary" /> : <ExpandMoreIcon color="secondary" />}
                                    </Box>
                                    {expandedSection === 'protocol' && (
                                        <Box sx={{ p: 2, pt: 0 }}>
                                            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                                Define cómo quieres que la IA procese tu solicitud
                                            </Typography>
                                            <FormGroup>
                                                <Box sx={{ display: 'grid', gap: 1, gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' } }}>
                                                    {protocolOptions.map((protocol) => (
                                                        <Paper
                                                            key={protocol.id}
                                                            elevation={protocols.includes(protocol.id) ? 2 : 0}
                                                            sx={{
                                                                p: 1.5,
                                                                border: `1px solid ${protocols.includes(protocol.id) ? 'rgba(156, 39, 176, 0.5)' : 'rgba(255, 255, 255, 0.1)'}`,
                                                                backgroundColor: protocols.includes(protocol.id) ? 'rgba(156, 39, 176, 0.1)' : 'transparent',
                                                                borderRadius: 1,
                                                            }}
                                                        >
                                                            <FormControlLabel
                                                                control={
                                                                    <Checkbox
                                                                        checked={protocols.includes(protocol.id)}
                                                                        onChange={() => handleProtocolToggle(protocol.id)}
                                                                        icon={<CheckIcon sx={{ opacity: 0.3 }} />}
                                                                        checkedIcon={<CheckIcon />}
                                                                        color="secondary"
                                                                    />
                                                                }
                                                                label={
                                                                    <Box>
                                                                        <Typography variant="body2" fontWeight={500}>
                                                                            {protocol.label}
                                                                        </Typography>
                                                                        <Typography variant="caption" color="text.secondary" display="block">
                                                                            {protocol.description}
                                                                        </Typography>
                                                                    </Box>
                                                                }
                                                            />
                                                        </Paper>
                                                    ))}
                                                </Box>
                                            </FormGroup>
                                        </Box>
                                    )}
                                </Paper>

                                <Paper elevation={0} sx={{ border: '1px solid rgba(255, 152, 0, 0.2)' }}>
                                    <Box
                                        sx={{
                                            p: 2,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            cursor: 'pointer',
                                            '&:hover': { backgroundColor: 'rgba(255, 152, 0, 0.05)' },
                                        }}
                                        onClick={() => toggleSection('skills')}
                                    >
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                            <SkillsIcon color="warning" />
                                            <Typography variant="h6">Skills</Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                            {selectedSkills.length > 0 && (
                                                <Chip
                                                    label={`${selectedSkills.length}`}
                                                    size="small"
                                                    color="warning"
                                                />
                                            )}
                                            {expandedSection === 'skills' ? <ExpandLessIcon color="warning" /> : <ExpandMoreIcon color="warning" />}
                                        </Box>
                                    </Box>
                                    {expandedSection === 'skills' && (
                                        <Box sx={{ p: 2, pt: 0 }}>
                                            <SkillTree
                                                skills={skillsTree}
                                                selectedSkills={selectedSkills}
                                                onToggle={handleSkillToggle}
                                            />
                                        </Box>
                                    )}
                                </Paper>

                                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                                    <Chip
                                        icon={<ModelIcon />}
                                        label={selectedModelData?.name || 'Modelo'}
                                        color="success"
                                        variant="outlined"
                                    />
                                    <Chip
                                        icon={<CodeIcon />}
                                        label={roleOptions.find((r) => r.value === role)?.label}
                                        color="primary"
                                        variant="outlined"
                                    />
                                    {contexts.map((ctx) => (
                                        <Chip
                                            key={ctx}
                                            label={contextOptions.find((c) => c.id === ctx)?.label}
                                            color="info"
                                            variant="outlined"
                                            size="small"
                                        />
                                    ))}
                                    {protocols.map((prot) => (
                                        <Chip
                                            key={prot}
                                            label={protocolOptions.find((p) => p.id === prot)?.label}
                                            color="secondary"
                                            variant="outlined"
                                            size="small"
                                        />
                                    ))}
                                    {selectedSkills.map((skillId) => {
                                        const skillNode = (() => {
                                            const findSkill = (nodes: typeof skillsTree, id: string): typeof skillsTree[0] | null => {
                                                for (const node of nodes) {
                                                    if (node.id === id) return node
                                                    if (node.children) {
                                                        const found = findSkill(node.children, id)
                                                        if (found) return found
                                                    }
                                                }
                                                return null
                                            }
                                            return findSkill(skillsTree, skillId)
                                        })()
                                        return skillNode ? (
                                            <Chip
                                                key={skillId}
                                                label={skillNode.name}
                                                color="warning"
                                                variant="outlined"
                                                size="small"
                                            />
                                        ) : null
                                    })}
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                </Box>

                <Box sx={{ flex: { xs: '1 1 100%', md: '5 5 0' } }}>
                    <Card elevation={0} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <CardHeader
                            title="Prompt Generado"
                            subheader="Tu resultado personalizado"
                            action={
                                <Tooltip title="Copiar al portapapeles">
                                    <IconButton onClick={copyToClipboard} color="primary">
                                        <CopyIcon />
                                    </IconButton>
                                </Tooltip>
                            }
                        />
                        <CardContent sx={{ flexGrow: 1 }}>
                            <Box
                                sx={{
                                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                                    borderRadius: 2,
                                    p: 2,
                                    minHeight: 300,
                                    maxHeight: 500,
                                    overflow: 'auto',
                                    fontFamily: 'monospace',
                                    fontSize: '0.95rem',
                                    lineHeight: 1.8,
                                    color: '#e0e0e0',
                                    border: '1px solid rgba(74, 144, 226, 0.2)',
                                }}
                            >
                                {input ? (
                                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
                                        {prompt}
                                    </pre>
                                ) : (
                                    <Typography color="text.secondary" align="center" sx={{ mt: 8 }}>
                                        Tu prompt aparecerá aquí...
                                    </Typography>
                                )}
                            </Box>
                        </CardContent>
                    </Card>
                </Box>
            </Box>
        </Container>
    )
}
