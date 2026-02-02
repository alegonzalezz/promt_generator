import { useState } from 'react'
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
} from '@mui/material'
import {
    ContentCopy as CopyIcon,
    Code as CodeIcon,
    Psychology as RoleIcon,
    CheckCircle as CheckIcon,
    Info as InfoIcon,
    ExpandMore as ExpandMoreIcon,
    ExpandLess as ExpandLessIcon,
} from '@mui/icons-material'
import { buildPrompt } from '../domain/buildPrompt'

const roleOptions = [
    { value: 'backend developer', label: 'Backend Developer', icon: <CodeIcon /> },
    { value: 'frontend developer', label: 'Frontend Developer', icon: <CodeIcon /> },
    { value: 'software architect', label: 'Software Architect', icon: <RoleIcon /> },
    { value: 'docente', label: 'Docente', icon: <RoleIcon /> },
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

type ExpandedSection = 'context' | 'protocol' | null

export function PromptGenerator() {
    const [input, setInput] = useState('')
    const [role, setRole] = useState('backend developer')
    const [contexts, setContexts] = useState<string[]>([])
    const [protocols, setProtocols] = useState<string[]>([])
    const [expandedSection, setExpandedSection] = useState<ExpandedSection>(null)

    const toggleSection = (section: 'context' | 'protocol') => {
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

    const prompt = buildPrompt({ input, role, contexts, protocols })

    const copyToClipboard = async () => {
        await navigator.clipboard.writeText(prompt)
    }

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Typography variant="h1" component="h1" align="center" gutterBottom>
                Prompt Generator
            </Typography>
            <Typography variant="subtitle1" align="center" color="text.secondary" sx={{ mb: 4 }}>
                Crea prompts personalizados para tus asistentes de IA
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

                                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
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
                                {prompt || (
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
