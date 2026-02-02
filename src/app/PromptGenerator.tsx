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
} from '@mui/material'
import {
    ContentCopy as CopyIcon,
    Code as CodeIcon,
    Psychology as RoleIcon,
    SentimentSatisfiedAlt as ToneIcon,
    FormatListBulleted as FormatIcon,
} from '@mui/icons-material'
import { buildPrompt } from '../domain/buildPrompt'

const roleOptions = [
    { value: 'backend developer', label: 'Backend Developer', icon: <CodeIcon /> },
    { value: 'frontend developer', label: 'Frontend Developer', icon: <CodeIcon /> },
    { value: 'software architect', label: 'Software Architect', icon: <RoleIcon /> },
    { value: 'docente', label: 'Docente', icon: <RoleIcon /> },
]

const toneOptions = [
    { value: 'técnico', label: 'Técnico', icon: <ToneIcon /> },
    { value: 'simple', label: 'Simple', icon: <ToneIcon /> },
    { value: 'didáctico', label: 'Didáctico', icon: <ToneIcon /> },
]

const formatOptions = [
    { value: 'paso a paso', label: 'Paso a Paso', icon: <FormatIcon /> },
    { value: 'lista', label: 'Lista', icon: <FormatIcon /> },
    { value: 'código con explicación', label: 'Código + Explicación', icon: <CodeIcon /> },
]

export function PromptGenerator() {
    const [input, setInput] = useState('')
    const [role, setRole] = useState('backend developer')
    const [tone, setTone] = useState('técnico')
    const [format, setFormat] = useState('paso a paso')

    const prompt = buildPrompt({ input, role, tone, format })

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

                                <Box
                                    sx={{
                                        display: 'flex',
                                        gap: 2,
                                        flexDirection: { xs: 'column', sm: 'row' },
                                    }}
                                >
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

                                    <FormControl fullWidth>
                                        <InputLabel>Tono</InputLabel>
                                        <Select
                                            value={tone}
                                            onChange={(e) => setTone(e.target.value)}
                                            label="Tono"
                                        >
                                            {toneOptions.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                        {option.icon}
                                                        {option.label}
                                                    </Box>
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>

                                    <FormControl fullWidth>
                                        <InputLabel>Formato</InputLabel>
                                        <Select
                                            value={format}
                                            onChange={(e) => setFormat(e.target.value)}
                                            label="Formato"
                                        >
                                            {formatOptions.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                        {option.icon}
                                                        {option.label}
                                                    </Box>
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Box>

                                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                                    <Chip
                                        icon={<CodeIcon />}
                                        label={roleOptions.find((r) => r.value === role)?.label}
                                        color="primary"
                                        variant="outlined"
                                    />
                                    <Chip
                                        icon={<ToneIcon />}
                                        label={toneOptions.find((t) => t.value === tone)?.label}
                                        color="secondary"
                                        variant="outlined"
                                    />
                                    <Chip
                                        icon={<FormatIcon />}
                                        label={formatOptions.find((f) => f.value === format)?.label}
                                        color="success"
                                        variant="outlined"
                                    />
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
