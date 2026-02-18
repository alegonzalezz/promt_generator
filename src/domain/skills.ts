export type SkillNode = {
    id: string
    name: string
    description: string
    category?: string
    children?: SkillNode[]
}

export const skillsTree: SkillNode[] = [
    {
        id: 'frontend',
        name: 'Frontend Development',
        description: 'Habilidades de desarrollo frontend',
        children: [
            {
                id: 'react',
                name: 'React',
                description: 'Desarrollo con React',
                children: [
                    {
                        id: 'react-best-practices',
                        name: 'React Best Practices',
                        description: 'Mejores prácticas de React por Vercel',
                    },
                    {
                        id: 'nextjs',
                        name: 'Next.js',
                        description: 'Desarrollo con Next.js',
                        children: [
                            {
                                id: 'next-best-practices',
                                name: 'Next.js Best Practices',
                                description: 'Mejores prácticas para Next.js',
                            },
                            {
                                id: 'next-cache',
                                name: 'Next.js Cache Components',
                                description: 'Patrones de caché en Next.js',
                            },
                            {
                                id: 'next-upgrade',
                                name: 'Next.js Upgrade',
                                description: 'Guía para actualizar Next.js',
                            },
                        ],
                    },
                    {
                        id: 'react-native',
                        name: 'React Native',
                        description: 'Desarrollo mobile con React Native',
                        children: [
                            {
                                id: 'react-native-best-practices',
                                name: 'React Native Best Practices',
                                description: 'Mejores prácticas de React Native',
                            },
                            {
                                id: 'expo',
                                name: 'Expo',
                                description: 'Desarrollo con Expo',
                                children: [
                                    {
                                        id: 'expo-native-ui',
                                        name: 'Building Native UI',
                                        description: 'Construcción de UI nativa con Expo',
                                    },
                                    {
                                        id: 'expo-data-fetching',
                                        name: 'Native Data Fetching',
                                        description: 'Fetching de datos en apps nativas',
                                    },
                                    {
                                        id: 'expo-dev-client',
                                        name: 'Expo Dev Client',
                                        description: 'Uso del cliente de desarrollo Expo',
                                    },
                                    {
                                        id: 'expo-deployment',
                                        name: 'Expo Deployment',
                                        description: 'Despliegue de apps Expo',
                                    },
                                    {
                                        id: 'expo-tailwind',
                                        name: 'Expo Tailwind Setup',
                                        description: 'Configuración de Tailwind con Expo',
                                    },
                                    {
                                        id: 'expo-api-routes',
                                        name: 'Expo API Routes',
                                        description: 'Rutas API en Expo',
                                    },
                                    {
                                        id: 'expo-cicd',
                                        name: 'Expo CI/CD Workflows',
                                        description: 'Workflows de CI/CD para Expo',
                                    },
                                    {
                                        id: 'expo-upgrade',
                                        name: 'Upgrading Expo',
                                        description: 'Guía para actualizar Expo',
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                id: 'vue',
                name: 'Vue.js',
                description: 'Desarrollo con Vue.js',
                children: [
                    {
                        id: 'vue-best-practices',
                        name: 'Vue Best Practices',
                        description: 'Mejores prácticas de Vue.js',
                    },
                    {
                        id: 'vue-debug',
                        name: 'Vue Debug Guides',
                        description: 'Guías de debugging para Vue',
                    },
                    {
                        id: 'vueuse',
                        name: 'VueUse Functions',
                        description: 'Funciones de VueUse',
                    },
                    {
                        id: 'nuxt',
                        name: 'Nuxt',
                        description: 'Framework Nuxt para Vue',
                    },
                    {
                        id: 'pinia',
                        name: 'Pinia',
                        description: 'Manejo de estado con Pinia',
                    },
                ],
            },
            {
                id: 'ui-frameworks',
                name: 'UI Frameworks',
                description: 'Frameworks de UI',
                children: [
                    {
                        id: 'shadcn-ui',
                        name: 'shadcn/ui',
                        description: 'Componentes shadcn/ui',
                    },
                    {
                        id: 'tailwind',
                        name: 'Tailwind CSS',
                        description: 'Diseño con Tailwind CSS',
                        children: [
                            {
                                id: 'tailwind-design-system',
                                name: 'Tailwind Design System',
                                description: 'Sistemas de diseño con Tailwind',
                            },
                            {
                                id: 'tailwind-v4',
                                name: 'Tailwind v4 + shadcn',
                                description: 'Tailwind v4 con shadcn/ui',
                            },
                        ],
                    },
                    {
                        id: 'unocss',
                        name: 'UnoCSS',
                        description: 'CSS atómico con UnoCSS',
                    },
                ],
            },
            {
                id: 'frontend-design',
                name: 'Frontend Design',
                description: 'Diseño de interfaces frontend',
            },
            {
                id: 'web-design',
                name: 'Web Design Guidelines',
                description: 'Guías de diseño web',
            },
            {
                id: 'responsive-design',
                name: 'Responsive Design',
                description: 'Diseño responsivo',
            },
            {
                id: 'canvas-design',
                name: 'Canvas Design',
                description: 'Diseño con Canvas API',
            },
        ],
    },
    {
        id: 'backend',
        name: 'Backend Development',
        description: 'Habilidades de desarrollo backend',
        children: [
            {
                id: 'nodejs',
                name: 'Node.js',
                description: 'Desarrollo con Node.js',
                children: [
                    {
                        id: 'nodejs-patterns',
                        name: 'Node.js Backend Patterns',
                        description: 'Patrones de backend con Node.js',
                    },
                    {
                        id: 'nestjs',
                        name: 'NestJS',
                        description: 'Framework NestJS',
                        children: [
                            {
                                id: 'nestjs-best-practices',
                                name: 'NestJS Best Practices',
                                description: 'Mejores prácticas de NestJS',
                            },
                        ],
                    },
                    {
                        id: 'ai-sdk',
                        name: 'AI SDK',
                        description: 'Vercel AI SDK',
                    },
                ],
            },
            {
                id: 'python',
                name: 'Python',
                description: 'Desarrollo con Python',
                children: [
                    {
                        id: 'python-performance',
                        name: 'Python Performance Optimization',
                        description: 'Optimización de performance en Python',
                    },
                    {
                        id: 'python-testing',
                        name: 'Python Testing Patterns',
                        description: 'Patrones de testing en Python',
                    },
                    {
                        id: 'async-python',
                        name: 'Async Python Patterns',
                        description: 'Patrones asíncronos en Python',
                    },
                    {
                        id: 'fastapi',
                        name: 'FastAPI Templates',
                        description: 'Plantillas para FastAPI',
                    },
                ],
            },
            {
                id: 'databases',
                name: 'Bases de Datos',
                description: 'Trabajo con bases de datos',
                children: [
                    {
                        id: 'postgresql',
                        name: 'PostgreSQL',
                        description: 'PostgreSQL',
                        children: [
                            {
                                id: 'postgres-best-practices',
                                name: 'Supabase Postgres Best Practices',
                                description: 'Mejores prácticas de Supabase/PostgreSQL',
                            },
                            {
                                id: 'postgres-table-design',
                                name: 'PostgreSQL Table Design',
                                description: 'Diseño de tablas PostgreSQL',
                            },
                            {
                                id: 'sql-optimization',
                                name: 'SQL Optimization Patterns',
                                description: 'Patrones de optimización SQL',
                            },
                        ],
                    },
                    {
                        id: 'convex',
                        name: 'Convex',
                        description: 'Convex database',
                    },
                ],
            },
            {
                id: 'api-design',
                name: 'API Design Principles',
                description: 'Principios de diseño de APIs',
            },
        ],
    },
    {
        id: 'architecture',
        name: 'Arquitectura',
        description: 'Patrones y arquitectura de software',
        children: [
            {
                id: 'architecture-patterns',
                name: 'Architecture Patterns',
                description: 'Patrones arquitectónicos',
            },
            {
                id: 'clean-architecture',
                name: 'Clean Architecture',
                description: 'Arquitectura limpia',
            },
            {
                id: 'hexagonal',
                name: 'Hexagonal Architecture',
                description: 'Arquitectura hexagonal',
            },
            {
                id: 'microservices',
                name: 'Microservices',
                description: 'Arquitectura de microservicios',
            },
            {
                id: 'vercel-composition',
                name: 'Vercel Composition Patterns',
                description: 'Patrones de composición de Vercel',
            },
            {
                id: 'turborepo',
                name: 'Turborepo',
                description: 'Monorepos con Turborepo',
            },
        ],
    },
    {
        id: 'testing',
        name: 'Testing',
        description: 'Habilidades de testing',
        children: [
            {
                id: 'tdd',
                name: 'Test Driven Development',
                description: 'Desarrollo guiado por tests',
            },
            {
                id: 'webapp-testing',
                name: 'Webapp Testing',
                description: 'Testing de aplicaciones web',
            },
            {
                id: 'e2e-testing',
                name: 'E2E Testing Patterns',
                description: 'Patrones de testing end-to-end',
            },
            {
                id: 'javascript-testing',
                name: 'JavaScript Testing Patterns',
                description: 'Patrones de testing en JavaScript',
            },
            {
                id: 'vitest',
                name: 'Vitest',
                description: 'Testing con Vitest',
            },
        ],
    },
    {
        id: 'devops',
        name: 'DevOps & CI/CD',
        description: 'DevOps y automatización',
        children: [
            {
                id: 'github-actions',
                name: 'GitHub Actions Templates',
                description: 'Plantillas de GitHub Actions',
            },
            {
                id: 'docker',
                name: 'Docker',
                description: 'Contenedores Docker',
            },
            {
                id: 'pnpm',
                name: 'pnpm',
                description: 'Gestión de paquetes con pnpm',
            },
            {
                id: 'vite',
                name: 'Vite',
                description: 'Build tool Vite',
            },
            {
                id: 'vitepress',
                name: 'VitePress',
                description: 'Documentación con VitePress',
            },
        ],
    },
    {
        id: 'mobile',
        name: 'Mobile Development',
        description: 'Desarrollo móvil',
        children: [
            {
                id: 'ios-design',
                name: 'Mobile iOS Design',
                description: 'Diseño para iOS',
            },
            {
                id: 'android-design',
                name: 'Mobile Android Design',
                description: 'Diseño para Android',
            },
            {
                id: 'swiftui',
                name: 'SwiftUI Expert',
                description: 'Experto en SwiftUI',
            },
            {
                id: 'flutter',
                name: 'Flutter',
                description: 'Desarrollo con Flutter',
                children: [
                    {
                        id: 'flutter-animations',
                        name: 'Flutter Animations',
                        description: 'Animaciones en Flutter',
                    },
                ],
            },
        ],
    },
    {
        id: 'ai-ml',
        name: 'AI & Machine Learning',
        description: 'Inteligencia artificial y ML',
        children: [
            {
                id: 'prompt-engineering',
                name: 'Prompt Engineering Patterns',
                description: 'Patrones de ingeniería de prompts',
            },
            {
                id: 'mcp-builder',
                name: 'MCP Builder',
                description: 'Construcción de MCPs',
            },
            {
                id: 'enhance-prompt',
                name: 'Enhance Prompt',
                description: 'Mejora de prompts',
            },
            {
                id: 'brainstorming',
                name: 'Brainstorming',
                description: 'Habilidades de brainstorming con IA',
            },
        ],
    },
    {
        id: 'marketing',
        name: 'Marketing & Growth',
        description: 'Marketing y crecimiento',
        children: [
            {
                id: 'copywriting',
                name: 'Copywriting',
                description: 'Redacción publicitaria',
            },
            {
                id: 'seo',
                name: 'SEO',
                description: 'Optimización para motores de búsqueda',
                children: [
                    {
                        id: 'seo-audit',
                        name: 'SEO Audit',
                        description: 'Auditoría SEO',
                    },
                    {
                        id: 'programmatic-seo',
                        name: 'Programmatic SEO',
                        description: 'SEO programático',
                    },
                    {
                        id: 'schema-markup',
                        name: 'Schema Markup',
                        description: 'Marcado de schema',
                    },
                    {
                        id: 'seo-geo',
                        name: 'SEO GEO',
                        description: 'SEO geográfico',
                    },
                ],
            },
            {
                id: 'content-strategy',
                name: 'Content Strategy',
                description: 'Estrategia de contenidos',
            },
            {
                id: 'social-content',
                name: 'Social Content',
                description: 'Contenido para redes sociales',
            },
            {
                id: 'marketing-psychology',
                name: 'Marketing Psychology',
                description: 'Psicología del marketing',
            },
            {
                id: 'email-sequences',
                name: 'Email Sequence',
                description: 'Secuencias de email',
            },
            {
                id: 'landing-pages',
                name: 'Landing Pages',
                description: 'Páginas de destino',
                children: [
                    {
                        id: 'cro',
                        name: 'CRO (Conversion Rate Optimization)',
                        description: 'Optimización de conversión',
                        children: [
                            {
                                id: 'page-cro',
                                name: 'Page CRO',
                                description: 'CRO de páginas',
                            },
                            {
                                id: 'onboarding-cro',
                                name: 'Onboarding CRO',
                                description: 'CRO de onboarding',
                            },
                            {
                                id: 'form-cro',
                                name: 'Form CRO',
                                description: 'CRO de formularios',
                            },
                            {
                                id: 'signup-cro',
                                name: 'Signup Flow CRO',
                                description: 'CRO de flujo de registro',
                            },
                            {
                                id: 'paywall-cro',
                                name: 'Paywall Upgrade CRO',
                                description: 'CRO de paywall',
                            },
                            {
                                id: 'popup-cro',
                                name: 'Popup CRO',
                                description: 'CRO de popups',
                            },
                        ],
                    },
                ],
            },
            {
                id: 'pricing',
                name: 'Pricing Strategy',
                description: 'Estrategia de precios',
            },
            {
                id: 'launch',
                name: 'Launch Strategy',
                description: 'Estrategia de lanzamiento',
            },
            {
                id: 'paid-ads',
                name: 'Paid Ads',
                description: 'Publicidad pagada',
            },
            {
                id: 'analytics',
                name: 'Analytics Tracking',
                description: 'Tracking de analíticas',
            },
            {
                id: 'ab-testing',
                name: 'A/B Test Setup',
                description: 'Configuración de tests A/B',
            },
            {
                id: 'referral',
                name: 'Referral Program',
                description: 'Programas de referidos',
            },
            {
                id: 'competitor',
                name: 'Competitor Alternatives',
                description: 'Análisis de competidores',
            },
            {
                id: 'free-tool',
                name: 'Free Tool Strategy',
                description: 'Estrategia de herramientas gratuitas',
            },
        ],
    },
    {
        id: 'product',
        name: 'Product Management',
        description: 'Gestión de producto',
        children: [
            {
                id: 'product-context',
                name: 'Product Marketing Context',
                description: 'Contexto de marketing de producto',
            },
            {
                id: 'marketing-ideas',
                name: 'Marketing Ideas',
                description: 'Ideas de marketing',
            },
            {
                id: 'brand-guidelines',
                name: 'Brand Guidelines',
                description: 'Guías de marca',
            },
            {
                id: 'ui-ux',
                name: 'UI/UX',
                description: 'Diseño UI/UX',
                children: [
                    {
                        id: 'ui-ux-pro',
                        name: 'UI/UX Pro Max',
                        description: 'UI/UX avanzado',
                    },
                    {
                        id: 'interface-design',
                        name: 'Interface Design',
                        description: 'Diseño de interfaces',
                    },
                ],
            },
        ],
    },
    {
        id: 'auth',
        name: 'Authentication',
        description: 'Autenticación y autorización',
        children: [
            {
                id: 'better-auth',
                name: 'Better Auth',
                description: 'Better Auth library',
                children: [
                    {
                        id: 'better-auth-practices',
                        name: 'Better Auth Best Practices',
                        description: 'Mejores prácticas de Better Auth',
                    },
                    {
                        id: 'create-auth-skill',
                        name: 'Create Auth Skill',
                        description: 'Creación de skills de auth',
                    },
                ],
            },
            {
                id: 'security-extraction',
                name: 'Security Requirement Extraction',
                description: 'Extracción de requisitos de seguridad',
            },
        ],
    },
    {
        id: 'file-formats',
        name: 'File Formats',
        description: 'Trabajo con diferentes formatos de archivo',
        children: [
            {
                id: 'pdf',
                name: 'PDF',
                description: 'Manejo de PDFs',
            },
            {
                id: 'docx',
                name: 'DOCX',
                description: 'Manejo de documentos Word',
            },
            {
                id: 'xlsx',
                name: 'XLSX',
                description: 'Manejo de Excel',
            },
            {
                id: 'pptx',
                name: 'PPTX',
                description: 'Manejo de PowerPoint',
            },
        ],
    },
    {
        id: 'content-creation',
        name: 'Content Creation',
        description: 'Creación de contenido',
        children: [
            {
                id: 'doc-coauthoring',
                name: 'Doc Coauthoring',
                description: 'Coautoría de documentos',
            },
            {
                id: 'copy-editing',
                name: 'Copy Editing',
                description: 'Edición de textos',
            },
            {
                id: 'writing-plans',
                name: 'Writing Plans',
                description: 'Planes de escritura',
            },
            {
                id: 'writing-skills',
                name: 'Writing Skills',
                description: 'Habilidades de escritura',
            },
        ],
    },
    {
        id: 'tools',
        name: 'Tools & Utilities',
        description: 'Herramientas y utilidades',
        children: [
            {
                id: 'browser-use',
                name: 'Browser Use',
                description: 'Uso automatizado de navegadores',
            },
            {
                id: 'agent-browser',
                name: 'Agent Browser',
                description: 'Navegador para agentes',
            },
            {
                id: 'web-artifacts',
                name: 'Web Artifacts Builder',
                description: 'Constructor de artefactos web',
            },
            {
                id: 'algorithmic-art',
                name: 'Algorithmic Art',
                description: 'Arte algorítmico',
            },
            {
                id: 'theme-factory',
                name: 'Theme Factory',
                description: 'Fábrica de temas',
            },
            {
                id: 'firecrawl',
                name: 'Firecrawl',
                description: 'Scraping web con Firecrawl',
            },
        ],
    },
    {
        id: 'agent-skills',
        name: 'Agent Skills',
        description: 'Habilidades para agentes AI',
        children: [
            {
                id: 'find-skills',
                name: 'Find Skills',
                description: 'Encontrar skills disponibles',
            },
            {
                id: 'skill-creator',
                name: 'Skill Creator',
                description: 'Crear nuevos skills',
            },
            {
                id: 'agent-tools',
                name: 'Agent Tools',
                description: 'Herramientas para agentes',
            },
            {
                id: 'using-superpowers',
                name: 'Using Superpowers',
                description: 'Uso de superpoderes de agentes',
            },
            {
                id: 'systematic-debugging',
                name: 'Systematic Debugging',
                description: 'Debugging sistemático',
            },
            {
                id: 'executing-plans',
                name: 'Executing Plans',
                description: 'Ejecución de planes',
            },
            {
                id: 'requesting-review',
                name: 'Requesting Code Review',
                description: 'Solicitar revisiones de código',
            },
            {
                id: 'receiving-review',
                name: 'Receiving Code Review',
                description: 'Recibir revisiones de código',
            },
            {
                id: 'code-review-excellence',
                name: 'Code Review Excellence',
                description: 'Excelencia en revisiones de código',
            },
            {
                id: 'parallel-agents',
                name: 'Dispatching Parallel Agents',
                description: 'Despacho de agentes paralelos',
            },
            {
                id: 'subagent-dev',
                name: 'Subagent Driven Development',
                description: 'Desarrollo dirigido por subagentes',
            },
            {
                id: 'verification',
                name: 'Verification Before Completion',
                description: 'Verificación antes de completar',
            },
            {
                id: 'git-worktrees',
                name: 'Using Git Worktrees',
                description: 'Uso de git worktrees',
            },
            {
                id: 'finish-branch',
                name: 'Finishing a Development Branch',
                description: 'Finalización de ramas de desarrollo',
            },
            {
                id: 'episodic-memory',
                name: 'Remembering Conversations',
                description: 'Memoria episódica para conversaciones',
            },
        ],
    },
    {
        id: 'frameworks',
        name: 'Frameworks & Libraries',
        description: 'Frameworks y librerías especializadas',
        children: [
            {
                id: 'remotion',
                name: 'Remotion',
                description: 'Video con Remotion',
            },
            {
                id: 'mastra',
                name: 'Mastra',
                description: 'Framework Mastra',
            },
            {
                id: 'design-md',
                name: 'Design.md',
                description: 'Design.md por Google Labs',
            },
            {
                id: 'stitch-loop',
                name: 'Stitch Loop',
                description: 'Stitch Loop por Google Labs',
            },
        ],
    },
    {
        id: 'audits',
        name: 'Audits & Analysis',
        description: 'Auditorías y análisis',
        children: [
            {
                id: 'audit-website',
                name: 'Audit Website',
                description: 'Auditoría de sitios web',
            },
            {
                id: 'nblm',
                name: 'NBLM',
                description: 'NBLM analysis',
            },
        ],
    },
]

export function getAllSkillIds(nodes: SkillNode[]): string[] {
    const ids: string[] = []
    for (const node of nodes) {
        ids.push(node.id)
        if (node.children) {
            ids.push(...getAllSkillIds(node.children))
        }
    }
    return ids
}

export function findSkillById(nodes: SkillNode[], id: string): SkillNode | null {
    for (const node of nodes) {
        if (node.id === id) {
            return node
        }
        if (node.children) {
            const found = findSkillById(node.children, id)
            if (found) return found
        }
    }
    return null
}

export function getSkillPath(nodes: SkillNode[], id: string): string[] {
    const path: string[] = []
    
    function search(nodes: SkillNode[], targetId: string, currentPath: string[]): boolean {
        for (const node of nodes) {
            const newPath = [...currentPath, node.name]
            if (node.id === targetId) {
                path.push(...newPath)
                return true
            }
            if (node.children && search(node.children, targetId, newPath)) {
                return true
            }
        }
        return false
    }
    
    search(nodes, id, [])
    return path
}

export const skillDescriptions: Record<string, string> = {
    'react-best-practices': 'Aplica mejores prácticas de React: hooks, componentes funcionales, patrones de renderizado optimizados, manejo de estado eficiente y clean code.',
    'next-best-practices': 'Utiliza las mejores prácticas de Next.js: App Router, Server Components, caché inteligente, optimización de imágenes y SEO.',
    'next-cache': 'Implementa patrones avanzados de caché en Next.js: stale-while-revalidate, incremental static regeneration, y estrategias de caché personalizadas.',
    'vue-best-practices': 'Aplica mejores prácticas de Vue.js: composition API, reactivity, componentes optimizados y patrones de estado.',
    'shadcn-ui': 'Utiliza componentes shadcn/ui con Tailwind CSS para crear interfaces consistentes y accesibles.',
    'tailwind-design-system': 'Construye sistemas de diseño escalables con Tailwind CSS: tokens, componentes reutilizables y theming.',
    'frontend-design': 'Aplica principios de diseño frontend: jerarquía visual, tipografía, espaciado y sistemas de diseño.',
    'postgresql': 'Diseña esquemas eficientes, consultas optimizadas y utiliza características avanzadas de PostgreSQL.',
    'api-design': 'Diseña APIs RESTful y GraphQL con buenas prácticas: versionado, documentación, rate limiting y seguridad.',
    'testing': 'Escribe tests unitarios, de integración y e2e con cobertura completa y buenas prácticas.',
    'clean-architecture': 'Aplica principios de Clean Architecture: separación de responsabilidades, inversión de dependencias y testabilidad.',
    'microservices': 'Diseña arquitecturas de microservicios: comunicación, resiliencia, observabilidad y deployment.',
    'seo-audit': 'Realiza auditorías SEO completas: análisis técnico, contenido, backlinks y recomendaciones de mejora.',
    'copywriting': 'Escribe copy persuasivo: headlines, CTAs, storytelling y optimización de conversión.',
}
