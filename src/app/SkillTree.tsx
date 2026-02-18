import { useState } from 'react'
import {
    Box,
    Checkbox,
    Typography,
    IconButton,
    Paper,
    Chip,
} from '@mui/material'
import {
    ExpandMore as ExpandMoreIcon,
    ExpandLess as ExpandLessIcon,
    CheckCircle as CheckIcon,
    Info as InfoIcon,
} from '@mui/icons-material'
import type { SkillNode } from '../domain/skills'

type SkillTreeItemProps = {
    node: SkillNode
    level: number
    selectedSkills: string[]
    onToggle: (skillId: string) => void
    expandedNodes: Set<string>
    onToggleExpand: (nodeId: string) => void
}

function SkillTreeItem({
    node,
    level,
    selectedSkills,
    onToggle,
    expandedNodes,
    onToggleExpand,
}: SkillTreeItemProps) {
    const hasChildren = node.children && node.children.length > 0
    const isExpanded = expandedNodes.has(node.id)
    const isSelected = selectedSkills.includes(node.id)
    const isIndeterminate = hasChildren && node.children?.some(
        (child) => selectedSkills.includes(child.id) || 
        child.children?.some((grandchild) => selectedSkills.includes(grandchild.id))
    ) && !isSelected

    const paddingLeft = level * 16 + 8

    return (
        <Box>
            <Paper
                elevation={isSelected ? 2 : 0}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    py: 1,
                    px: 1,
                    mb: 0.5,
                    ml: `${paddingLeft}px`,
                    border: `1px solid ${isSelected ? 'rgba(255, 152, 0, 0.5)' : 'rgba(255, 255, 255, 0.05)'}`,
                    backgroundColor: isSelected ? 'rgba(255, 152, 0, 0.1)' : 'transparent',
                    borderRadius: 1,
                    transition: 'all 0.2s ease',
                    '&:hover': {
                        backgroundColor: isSelected ? 'rgba(255, 152, 0, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                    },
                }}
            >
                {hasChildren && (
                    <IconButton
                        size="small"
                        onClick={() => onToggleExpand(node.id)}
                        sx={{ p: 0.5 }}
                    >
                        {isExpanded ? (
                            <ExpandLessIcon fontSize="small" color="warning" />
                        ) : (
                            <ExpandMoreIcon fontSize="small" color="warning" />
                        )}
                    </IconButton>
                )}
                
                {!hasChildren && <Box sx={{ width: 28 }} />}

                <Checkbox
                    checked={isSelected}
                    indeterminate={isIndeterminate}
                    onChange={() => onToggle(node.id)}
                    icon={<CheckIcon sx={{ opacity: 0.3, fontSize: 20 }} />}
                    checkedIcon={<CheckIcon sx={{ fontSize: 20 }} />}
                    indeterminateIcon={<CheckIcon sx={{ fontSize: 20, opacity: 0.6 }} />}
                    color="warning"
                    size="small"
                />

                <Box sx={{ flex: 1 }}>
                    <Typography 
                        variant="body2" 
                        fontWeight={hasChildren ? 600 : 400}
                        color={isSelected ? 'warning.main' : 'text.primary'}
                    >
                        {node.name}
                    </Typography>
                    <Typography variant="caption" color="text.secondary" display="block">
                        {node.description}
                    </Typography>
                </Box>

                {hasChildren && (
                    <Chip 
                        label={`${node.children?.length || 0}`} 
                        size="small" 
                        color="warning" 
                        variant="outlined"
                        sx={{ height: 20, fontSize: '0.7rem' }}
                    />
                )}
            </Paper>

            {hasChildren && isExpanded && (
                <Box>
                    {node.children?.map((child) => (
                        <SkillTreeItem
                            key={child.id}
                            node={child}
                            level={level + 1}
                            selectedSkills={selectedSkills}
                            onToggle={onToggle}
                            expandedNodes={expandedNodes}
                            onToggleExpand={onToggleExpand}
                        />
                    ))}
                </Box>
            )}
        </Box>
    )
}

type SkillTreeProps = {
    skills: SkillNode[]
    selectedSkills: string[]
    onToggle: (skillId: string) => void
    title?: string
    description?: string
}

export function SkillTree({
    skills,
    selectedSkills,
    onToggle,
    title = 'Skills',
    description = 'Selecciona los skills que quieres incluir',
}: SkillTreeProps) {
    const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set())

    const handleToggleExpand = (nodeId: string) => {
        setExpandedNodes((prev) => {
            const newSet = new Set(prev)
            if (newSet.has(nodeId)) {
                newSet.delete(nodeId)
            } else {
                newSet.add(nodeId)
            }
            return newSet
        })
    }

    const expandAll = () => {
        const allIds = new Set<string>()
        const collectIds = (nodes: SkillNode[]) => {
            for (const node of nodes) {
                if (node.children && node.children.length > 0) {
                    allIds.add(node.id)
                    collectIds(node.children)
                }
            }
        }
        collectIds(skills)
        setExpandedNodes(allIds)
    }

    const collapseAll = () => {
        setExpandedNodes(new Set())
    }

    return (
        <Box>
            <Box sx={{ mb: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <InfoIcon color="warning" />
                    <Typography variant="h6">{title}</Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
                    <Chip 
                        label="Expandir todo" 
                        size="small" 
                        onClick={expandAll}
                        sx={{ cursor: 'pointer' }}
                        color="warning"
                        variant="outlined"
                    />
                    <Chip 
                        label="Colapsar todo" 
                        size="small" 
                        onClick={collapseAll}
                        sx={{ cursor: 'pointer' }}
                        color="default"
                        variant="outlined"
                    />
                    <Chip 
                        label={`${selectedSkills.length} seleccionados`}
                        size="small"
                        color="warning"
                    />
                </Box>
            </Box>

            <Box sx={{ maxHeight: 500, overflow: 'auto' }}>
                {skills.map((skill) => (
                    <SkillTreeItem
                        key={skill.id}
                        node={skill}
                        level={0}
                        selectedSkills={selectedSkills}
                        onToggle={onToggle}
                        expandedNodes={expandedNodes}
                        onToggleExpand={handleToggleExpand}
                    />
                ))}
            </Box>
        </Box>
    )
}
