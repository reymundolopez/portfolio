export const translations = {
  en: {
    nav: {
      role: "Staff Architect & AI",
      statusBadge: "Available for High-Impact Projects & Advisory",
      experience: "Experience",
      architecture: "Architecture & AI",
      impact: "Milestones",
      techStack: "Tech Stack",
      services: "Capabilities",
      contact: "Contact",
      downloadCv: "Download CV",
      cvFileName: "CV_Reymundo_Lopez_EN.pdf",
      getInTouch: "Get in touch"
    },
    hero: {
      status: "STATUS:",
      statusText: "Open for Staff / Principal Roles & Strategic Advisory",
      location: "Mexico (UTC-6) • Remote & On-Site Consultation",
      tagline: "Distributed Systems • Cloud Scale • Agentic AI",
      tenureBadge: "15+ YRS PROD",
      title: "High-Throughput Distributed Systems & Autonomous AI Architectures.",
      description: "Senior engineering architect turning complex distributed infrastructure, sub-second telemetry, and agentic workflows into resilient, revenue-generating engines.",
      stats: [
        { key: "exp15", num: "15+ Years", label: "Staff & Principal Systems", title: "Tenure" },
        { key: "mobility", num: "5M+ Users", label: "Transit Platforms via Unosquare", title: "Scale Impact" },
        { key: "endpoints", num: "5,000+", label: "Active Enterprise Devices", title: "Concurrency" },
        { key: "agentic", num: "100% Agentic", label: "Deterministic CI/CD Pipelines", title: "Automation" }
      ]
    },
    services: {
      eyebrow: "01 • Engineering Capabilities",
      title: "Solutions Engineered for Scale & Reliability.",
      subtitle: "From tailored business platforms to distributed cloud backends and intelligent automation.",
      items: [
        {
          id: "srv_software",
          title: "Custom Business Platforms & Web Apps",
          desc: "End-to-end architecture and modern web systems designed to streamline business operations, administrative workflows, and real-time inventory.",
          tags: ["TypeScript", "React", "Node.js", "PostgreSQL", "Tailwind"]
        },
        {
          id: "srv_ai",
          title: "AI Automation & Autonomous Workflows",
          desc: "Intelligent agentic assistants, automated WhatsApp response systems, and deterministic LLM tool-calling pipelines that reduce manual repetitive tasks.",
          tags: ["Agentic AI", "LLMs", "WhatsApp APIs", "Tool-Calling", "RAG"]
        },
        {
          id: "srv_cloud",
          title: "Cloud Infrastructure & High Availability",
          desc: "Fault-tolerant cloud setups, zero-downtime deployment pipelines, Kubernetes container orchestration, and multi-tenant security.",
          tags: ["AWS", "Docker", "Kubernetes", "Terraform", "Zero-Downtime"]
        }
      ]
    },
    architecture: {
      eyebrow: "02 • Core Infrastructure",
      title: "Battle-Tested Architectural Pillars.",
      subtitle: "Built for fault isolation, cryptographic zero-trust, and continuous enterprise availability.",
      pillars: [
        {
          id: "pillar_migration",
          pillarNum: "PILLAR 01",
          title: "Monolith ↔ Microservices",
          desc: "Decoupled microservice isolation and pragmatic consolidation back into modular monoliths.",
          badge: "Strangler Fig Pattern"
        },
        {
          id: "pillar_biometric",
          pillarNum: "PILLAR 02",
          title: "Biometric 2FA & Cryptographic Auth",
          desc: "Eliminated paid 3rd-party auth vendors with sub-second device cryptographic handshakes.",
          badge: "0% Vendor Lock-in"
        },
        {
          id: "pillar_fleet",
          pillarNum: "PILLAR 03",
          title: "Zero-Downtime Fleet K8s",
          desc: "Rolling Kubernetes nodes and socket reconciliation for 5,000+ active edge hardware units.",
          badge: "99.995% SLA"
        },
        {
          id: "pillar_elk",
          pillarNum: "PILLAR 04",
          title: "Real-Time ELK Streaming",
          desc: "Sub-second multi-format log ingestion pipeline with proactive anomaly alert triggers.",
          badge: "Logstash → Elastic"
        }
      ]
    },
    experience: {
      eyebrow: "03 • Leadership Track Record",
      title: "Engineering Milestones.",
      subtitle: "15+ YEARS ENTERPRISE DELIVERY",
      roles: [
        {
          id: "exp_coforge",
          period: "2021 – Present • Full-Time",
          title: "Lead Software Engineer",
          company: "Coforge (Global Digital Services)",
          desc: "Directing enterprise core API and hardware fleet infrastructure powering 5,000+ operational devices across high-availability environments.",
          tags: ["Kubernetes", "Vault", "Biometric 2FA", "ELK Stack"]
        },
        {
          id: "exp_hatch",
          period: "2021 • Startup Velocity",
          title: "Senior Architect & Full-Stack",
          company: "Hatch Startups (HealthTech & InsurTech)",
          desc: "Led greenfield cloud architectures via Terraform IaC, automated serverless Lambda microservices, and reactive customer portals.",
          tags: ["Terraform", "AWS Lambda", "Firebase", "React"]
        },
        {
          id: "exp_anexinet",
          period: "2018 – 2021 • Cloud Modernization",
          title: "Software Architect & Senior Engineer",
          company: "Anexinet (Enterprise Modernization)",
          desc: "Architected enterprise Monolith-to-Microservices modernization and resilient AWS EKS container clusters with automated CI/CD.",
          tags: ["AWS EKS", "Microservices", "API Gateway", "Docker"]
        },
        {
          id: "exp_unosquare",
          period: "2014 – 2018 • Urban Scale Mobility",
          title: "Senior Mobile Systems Engineer",
          company: "Unosquare (Digital Engineering Services)",
          desc: "Core engineering contributor to high-scale urban transit & ticketing platforms serving 5M+ daily commuter trips, implementing Apple Pay and zero-failure transactions.",
          tags: ["Swift / Obj-C", "Apple Pay", "High Concurrency", "PCI Compliance"]
        }
      ]
    },
    techStack: {
      eyebrow: "04 • Verified Stack",
      title: "Core Competencies.",
      subtitle: "100% PRODUCTION VERIFIED",
      categories: [
        {
          id: "tech_ai",
          category: "AGENTIC AI",
          title: "Workflows & Tool Calling",
          skills: ["LangChain", "Claude Code", "OpenAI SDK", "Ollama", "RAG Systems"]
        },
        {
          id: "tech_cloud",
          category: "CLOUD & DEVOPS",
          title: "Kubernetes & Containers",
          skills: ["AWS EKS", "Docker", "Helm", "Nginx", "Linux SysAdmin"]
        },
        {
          id: "tech_sec",
          category: "SECURITY",
          title: "Identity & Zero-Trust",
          skills: ["HashiCorp Vault", "Biometrics", "OAuth2 / OIDC", "mTLS", "Audit Readiness"]
        },
        {
          id: "tech_data",
          category: "TELEMETRY",
          title: "ELK Stack & Streaming",
          skills: ["Elasticsearch", "Logstash", "Kibana", "Redis Queues", "Real-Time Telemetry"]
        },
        {
          id: "tech_lang",
          category: "LANGUAGES",
          title: "Polyglot Engineering",
          skills: ["TypeScript", "Node.js", "React", "Swift", "Python", "SQL"]
        },
        {
          id: "tech_iac",
          category: "IAC & GITOPS",
          title: "Terraform & CI/CD",
          skills: ["Terraform", "GitHub Actions", "AWS Lambda", "GitOps", "Docker Compose"]
        }
      ]
    },
    certifications: {
      eyebrow: "05 • Continuous Mastery",
      title: "Recognized Certifications & Accreditations",
      subtitle: "Verified Records",
      items: [
        {
          icon: "auto_awesome",
          title: "GenAI Training Track",
          issuer: "Agentic, Technical & Foundational",
          desc: "Comprehensive curriculum covering Agentic AI systems, prompt engineering, multi-turn reasoning, and LLM deployment pipelines.",
          badge: "Coursera • GenAI Path"
        },
        {
          icon: "badge",
          title: "Titanium Certified Expert & Instructor",
          issuer: "Certified Trainer Accreditation",
          desc: "Official credential validating mastery over cross-platform mobile architectures, native modules, and enterprise engineer training.",
          badge: "Appcelerator / ITexico"
        },
        {
          icon: "school",
          title: "Master’s in Web Technology",
          issuer: "De La Salle Bajío University",
          desc: "Advanced degree focusing on distributed web protocols, client-server architectures, and information security. Former Operating Systems professor.",
          badge: "Graduate Degree • Honor"
        }
      ]
    },
    aiMultiplier: {
      eyebrow: "06 • Autonomous AI Acceleration",
      title: "Eliminating Engineering Friction.",
      subtitle: "Deterministic LLM guards, agentic PR validation, and context-aware developer tools built for velocity.",
      cards: [
        {
          id: "ai_pr",
          icon: "policy",
          title: "Autonomous PR Gates",
          desc: "Automated pre-merge evaluations guarding against race conditions, breaking API contracts, and schema drift.",
          metricLabel: "Velocity Gain",
          metricVal: "-68% Wait Time"
        },
        {
          id: "ai_skills",
          icon: "psychology",
          title: "Domain LLM Skills",
          desc: "Tool-calling CLI utilities allowing engineers to query repositories with strict RAG boundaries.",
          metricLabel: "Onboarding",
          metricVal: "3.4x Faster"
        },
        {
          id: "ai_sdlc",
          icon: "account_tree",
          title: "SDLC Traceability",
          desc: "End-to-end sync linking issue tickets, conventional commits, and immutable deployment tags.",
          metricLabel: "Compliance",
          metricVal: "100% Automated"
        }
      ]
    },
    contact: {
      eyebrow: "07 • Direct Engagement",
      title: "Let's Architect Something Resilient.",
      description: "Whether you require custom business software, workflow automation with AI, or high-scale cloud architecture, I offer direct engineering leadership and strategic technical guidance.",
      responseNotice: "Rapid response guaranteed • Timezone: UTC-6 (Mexico / Central US)",
      cards: {
        email: {
          label: "Direct Email",
          tag: "Direct Inbox",
          value: "me@reymundolopez.com",
          desc: "Send architecture inquiries, project proposals, or consulting requests."
        },
        whatsapp: {
          label: "WhatsApp",
          tag: "Instant Chat",
          value: "+52 476 728 0600",
          desc: "Direct messaging for syncs, urgent advisory, and project discussions.",
          prefilled: "Hello Reymundo, I am interested in discussing a project..."
        },
        github: {
          label: "GitHub",
          tag: "Code & Repos",
          value: "github.com/reymundolopez",
          desc: "Inspect open-source architectural patterns, repos, and pipelines."
        },
        linkedin: {
          label: "LinkedIn",
          tag: "Network",
          value: "linkedin.com/in/reymundolopez",
          desc: "Trajectory, enterprise network, recommendations, and credentials."
        }
      }
    },
    footer: {
      role: "Lead Software Engineer, Senior Full-Stack Architect & AI Specialist crafting fault-tolerant systems.",
      location: "Mexico (UTC-6) • Remote & Regional Consultation",
      coreTitle: "Core Systems & Focus",
      coreDesc: "15+ Years Designing Resilient Distributed Systems & Autonomous AI Pipelines.",
      connectTitle: "Direct Channels",
      availTitle: "Availability & Engagement",
      availDesc: "Open for fractional advisory, strategic software consultations, and high-impact enterprise roles.",
      scheduleReview: "Schedule Technical Consultation →",
      copyright: "© 2025 Reymundo López. Crafted with warm precision and minimal overhead.",
      edition: "Bilingual Portfolio • Global Edition (EN / ES)"
    },
    modal: {
      close: "Close Overview",
      tagsLabel: "Technologies"
    }
  },

  es: {
    nav: {
      role: "Staff Architect & IA",
      statusBadge: "Disponible para Proyectos de Alto Impacto & Asesoría",
      experience: "Experiencia",
      architecture: "Arquitectura & IA",
      impact: "Hitos",
      techStack: "Stack Tecnológico",
      services: "Capacidades",
      contact: "Contacto",
      downloadCv: "Descargar CV",
      cvFileName: "CV_Reymundo_Lopez_ES.pdf",
      getInTouch: "Iniciar Conversación"
    },
    hero: {
      status: "ESTADO:",
      statusText: "Disponible para Roles Staff / Principal & Asesoría Estratégica",
      location: "México (UTC-6) • Consultoría Remota & Presencial",
      tagline: "Sistemas Distribuidos • Escala Cloud • IA Agéntica",
      tenureBadge: "15+ AÑOS EN PROD",
      title: "Sistemas Distribuidos de Alto Rendimiento & Arquitecturas de IA Autónoma.",
      description: "Arquitecto de software senior transformando infraestructura distribuida compleja, telemetría de sub-segundo y flujos agénticos en motores de software empresariales y rentables.",
      stats: [
        { key: "exp15", num: "15+ Años", label: "Sistemas Staff & Principal", title: "Trayectoria" },
        { key: "mobility", num: "5M+ Usuarios", label: "Plataformas de Tránsito en Unosquare", title: "Impacto y Escala" },
        { key: "endpoints", num: "5,000+", label: "Dispositivos Empresariales Activos", title: "Concurrencia" },
        { key: "agentic", num: "100% Agéntico", label: "Pipelines CI/CD Deterministas", title: "Automatización" }
      ]
    },
    services: {
      eyebrow: "01 • Capacidades Técnicas",
      title: "Soluciones Diseñadas para Crecer y Operar sin Fallas.",
      subtitle: "Desde plataformas web y sistemas empresariales a la medida hasta infraestructura en la nube y automatización inteligente.",
      items: [
        {
          id: "srv_software",
          title: "Plataformas Empresariales & Aplicaciones Web",
          desc: "Arquitectura completa y desarrollo de aplicaciones web modernas para optimizar la gestión operativa, flujos administrativos y control de inventarios en tiempo real.",
          tags: ["TypeScript", "React", "Node.js", "PostgreSQL", "Tailwind"]
        },
        {
          id: "srv_ai",
          title: "Automatización con IA & Flujos Autónomos",
          desc: "Asistentes inteligentes, sistemas de respuesta automatizados vía WhatsApp y pipelines deterministas con LLMs que eliminan tareas repetitivas y aceleran la atención.",
          tags: ["IA Agéntica", "LLMs", "APIs WhatsApp", "Tool-Calling", "RAG"]
        },
        {
          id: "srv_cloud",
          title: "Infraestructura Cloud & Alta Disponibilidad",
          desc: "Arquitectura en la nube tolerante a fallos, despliegues continuos sin interrupciones, orquestación de contenedores con Kubernetes y seguridad multicapa.",
          tags: ["AWS", "Docker", "Kubernetes", "Terraform", "Cero Caídas"]
        }
      ]
    },
    architecture: {
      eyebrow: "02 • Infraestructura Central",
      title: "Pilares Arquitectónicos Probados en Producción.",
      subtitle: "Diseñados para aislamiento de fallas, seguridad criptográfica zero-trust y disponibilidad continua.",
      pillars: [
        {
          id: "pillar_migration",
          pillarNum: "PILAR 01",
          title: "Monolito ↔ Microservicios",
          desc: "Aislamiento desacoplado de microservicios y consolidación pragmática hacia monolitos modulares según la necesidad del negocio.",
          badge: "Patrón Strangler Fig"
        },
        {
          id: "pillar_biometric",
          pillarNum: "PILAR 02",
          title: "2FA Biométrico & Autenticación Criptográfica",
          desc: "Eliminación de costos recurrentes de autenticación de terceros mediante handshakes criptográficos directos entre dispositivos.",
          badge: "0% Dependencia de Proveedor"
        },
        {
          id: "pillar_fleet",
          pillarNum: "PILAR 03",
          title: "Flota K8s con Cero Caídas",
          desc: "Nodos rotativos en Kubernetes y reconciliación continua de sockets para más de 5,000 unidades de hardware activas.",
          badge: "SLA 99.995%"
        },
        {
          id: "pillar_elk",
          pillarNum: "PILAR 04",
          title: "Streaming ELK en Tiempo Real",
          desc: "Ingesta multiformato en menos de un segundo con alertas proactivas ante cualquier anomalía operativa.",
          badge: "Logstash → Elastic"
        }
      ]
    },
    experience: {
      eyebrow: "03 • Trayectoria Profesional",
      title: "Hitos y Experiencia de Ingeniería.",
      subtitle: "15+ AÑOS DE ENTREGA EN PRODUCCIÓN",
      roles: [
        {
          id: "exp_coforge",
          period: "2021 – Presente • Tiempo Completo",
          title: "Lead Software Engineer",
          company: "Coforge (Servicios Digitales Globales)",
          desc: "Liderando la arquitectura de APIs centrales y la infraestructura para una flota de más de 5,000 dispositivos operativos en entornos de alta concurrencia.",
          tags: ["Kubernetes", "Vault", "2FA Biométrico", "ELK Stack"]
        },
        {
          id: "exp_hatch",
          period: "2021 • Startups de Alto Crecimiento",
          title: "Senior Architect & Full-Stack",
          company: "Hatch Startups (HealthTech & InsurTech)",
          desc: "Diseño de arquitecturas en la nube desde cero con Terraform IaC, microservicios serverless en AWS Lambda y portales de usuario reactivos.",
          tags: ["Terraform", "AWS Lambda", "Firebase", "React"]
        },
        {
          id: "exp_anexinet",
          period: "2018 – 2021 • Modernización Cloud",
          title: "Software Architect & Senior Engineer",
          company: "Anexinet (Modernización Empresarial)",
          desc: "Arquitectura para la transición de sistemas monolíticos hacia clusters de contenedores en AWS EKS con despliegues automatizados CI/CD.",
          tags: ["AWS EKS", "Microservicios", "API Gateway", "Docker"]
        },
        {
          id: "exp_unosquare",
          period: "2014 – 2018 • Movilidad Urbana Masiva",
          title: "Senior Mobile Systems Engineer",
          company: "Unosquare (Servicios de Ingeniería Digital)",
          desc: "Ingeniero central en plataformas móviles de tránsito y validación de boletos para más de 5 millones de usuarios diarios, integrando pagos sin contacto con Apple Pay bajo estrictos estándares financieros.",
          tags: ["Swift / Obj-C", "Apple Pay", "Alta Concurrencia", "Cumplimiento PCI"]
        }
      ]
    },
    techStack: {
      eyebrow: "04 • Tecnologías Verificadas",
      title: "Competencias Técnicas Principales.",
      subtitle: "100% COMPROBADO EN PRODUCCIÓN",
      categories: [
        {
          id: "tech_ai",
          category: "IA AGÉNTICA",
          title: "Flujos Autónomos & Tool-Calling",
          skills: ["LangChain", "Claude Code", "OpenAI SDK", "Ollama", "Sistemas RAG"]
        },
        {
          id: "tech_cloud",
          category: "CLOUD & DEVOPS",
          title: "Kubernetes & Contenedores",
          skills: ["AWS EKS", "Docker", "Helm", "Nginx", "Linux SysAdmin"]
        },
        {
          id: "tech_sec",
          category: "SEGURIDAD",
          title: "Identidad & Zero-Trust",
          skills: ["HashiCorp Vault", "Biometría", "OAuth2 / OIDC", "mTLS", "Auditoría de Seguridad"]
        },
        {
          id: "tech_data",
          category: "TELEMETRÍA",
          title: "Stack ELK & Streaming",
          skills: ["Elasticsearch", "Logstash", "Kibana", "Colas Redis", "Telemetría en Tiempo Real"]
        },
        {
          id: "tech_lang",
          category: "LENGUAJES",
          title: "Ingeniería Políglota",
          skills: ["TypeScript", "Node.js", "React", "Swift", "Python", "SQL"]
        },
        {
          id: "tech_iac",
          category: "IAC & GITOPS",
          title: "Terraform & CI/CD",
          skills: ["Terraform", "GitHub Actions", "AWS Lambda", "GitOps", "Docker Compose"]
        }
      ]
    },
    certifications: {
      eyebrow: "05 • Aprendizaje Continuo",
      title: "Certificaciones y Acreditaciones Oficiales",
      subtitle: "Registros Verificados",
      items: [
        {
          icon: "auto_awesome",
          title: "GenAI Training Track",
          issuer: "Enfoque Agéntico, Técnico & Fundacional",
          desc: "Formación integral en sistemas de IA Agéntica, ingeniería de prompts, razonamiento de múltiples turnos y pipelines de despliegue de LLMs.",
          badge: "Coursera • GenAI Path"
        },
        {
          icon: "badge",
          title: "Titanium Certified Expert & Instructor",
          issuer: "Acreditación de Instructor Certificado",
          desc: "Credencial oficial que valida el dominio en arquitecturas móviles multiplataforma, módulos nativos y capacitación de ingenieros de software.",
          badge: "Appcelerator / ITexico"
        },
        {
          icon: "school",
          title: "Maestría en Tecnologías Web",
          issuer: "Universidad De La Salle Bajío",
          desc: "Posgrado con enfoque en protocolos web distribuidos, arquitecturas cliente-servidor y seguridad de la información. Exprofesor de Sistemas Operativos.",
          badge: "Grado Académico • Mención de Honor"
        }
      ]
    },
    aiMultiplier: {
      eyebrow: "06 • Aceleración con IA Autónoma",
      title: "Eliminando la Fricción en el Desarrollo.",
      subtitle: "Evaluaciones deterministas con LLMs, validación agéntica de pull requests y herramientas contextuales para maximizar la velocidad de entrega.",
      cards: [
        {
          id: "ai_pr",
          icon: "policy",
          title: "Filtros Autónomos de PRs",
          desc: "Evaluaciones automatizadas previas al merge para prevenir condiciones de carrera y cambios no planeados en schemas de APIs.",
          metricLabel: "Ganancia en Velocidad",
          metricVal: "-68% Tiempo de Espera"
        },
        {
          id: "ai_skills",
          icon: "psychology",
          title: "Herramientas CLI con IA",
          desc: "Utilidades de línea de comandos con llamadas a herramientas que permiten consultar código con límites estrictos de contexto.",
          metricLabel: "Curva de Entrada",
          metricVal: "3.4x Más Rápido"
        },
        {
          id: "ai_sdlc",
          icon: "account_tree",
          title: "Trazabilidad del Ciclo de Vida",
          desc: "Sincronización bidireccional entre tickets, commits convencionales y etiquetas inmutables de despliegue en producción.",
          metricLabel: "Cumplimiento",
          metricVal: "100% Automatizado"
        }
      ]
    },
    contact: {
      eyebrow: "07 • Contacto Directo",
      title: "Construyamos Algo Resiliente y Escalable.",
      description: "Ya sea que requieras desarrollo de software a la medida, automatización de procesos con inteligencia artificial o arquitectura de nube para alta demanda, ofrezco liderazgo técnico directo y asesoría estratégica.",
      responseNotice: "Respuesta rápida garantizada • Zona Horaria: UTC-6 (México / Centro)",
      cards: {
        email: {
          label: "Correo Directo",
          tag: "Bandeja Directa",
          value: "me@reymundolopez.com",
          desc: "Escribe para consultas de arquitectura, propuestas de proyectos o asesorías técnicas."
        },
        whatsapp: {
          label: "WhatsApp",
          tag: "Chat Inmediato",
          value: "+52 476 728 0600",
          desc: "Mensajería directa para coordinación ágil, llamadas y consultas prioritarias.",
          prefilled: "Hola Reymundo, me interesa platicar sobre un proyecto..."
        },
        github: {
          label: "GitHub",
          tag: "Código & Repos",
          value: "github.com/reymundolopez",
          desc: "Explora patrones arquitectónicos, repositorios y pipelines de código abierto."
        },
        linkedin: {
          label: "LinkedIn",
          tag: "Red Profesional",
          value: "linkedin.com/in/reymundolopez",
          desc: "Trayectoria, red empresarial, recomendaciones y respaldo profesional."
        }
      }
    },
    footer: {
      role: "Lead Software Engineer, Arquitecto Senior Full-Stack & Especialista en IA creando sistemas tolerantes a fallos.",
      location: "México (UTC-6) • Consultoría Remota & Presencial",
      coreTitle: "Enfoque & Sistemas Principales",
      coreDesc: "15+ Años Diseñando Sistemas Distribuidos Resilientes & Flujos Autónomos de IA.",
      connectTitle: "Canales Directos",
      availTitle: "Disponibilidad & Colaboración",
      availDesc: "Abierto para asesoría técnica fraccionada, consultoría estratégica de software y proyectos empresariales de alto impacto.",
      scheduleReview: "Agendar Consulta Técnica →",
      copyright: "© 2025 Reymundo López. Creado con precisión y calidez.",
      edition: "Portafolio Bilingüe • Edición Global (EN / ES)"
    },
    modal: {
      close: "Cerrar Detalle",
      tagsLabel: "Tecnologías"
    }
  }
};

export const modalDeepDives = {
  exp15: {
    en: {
      cat: "LEADERSHIP TENURE",
      title: "15+ Years Systems Architecture",
      tags: ["Staff Architect", "Principal", "Distributed Systems", "Bilingual EN/ES"],
      body: "Over fifteen years of engineering leadership across high-availability enterprise services, startup velocity, and scalable web platforms. Experience directing multidisciplinary engineering teams, shaping system architectures, and aligning business requirements with robust, low-maintenance technology.",
      statLabel: "Continuous Production Time",
      statVal: "15+ Years In Prod"
    },
    es: {
      cat: "TRAYECTORIA DE LIDERAZGO",
      title: "15+ Años en Arquitectura de Sistemas",
      tags: ["Staff Architect", "Principal", "Sistemas Distribuidos", "Bilingüe EN/ES"],
      body: "Más de quince años de liderazgo técnico en servicios empresariales de alta disponibilidad, startups de rápido crecimiento y plataformas web escalables. Experiencia guiando equipos de ingeniería, definiendo arquitecturas de sistemas y conectando objetivos de negocio con tecnología sólida y mantenible.",
      statLabel: "Tiempo Continuo en Producción",
      statVal: "15+ Años en Prod"
    }
  },
  mobility: {
    en: {
      cat: "URBAN SCALE MOBILITY",
      title: "High-Volume Commuter Platforms at Unosquare",
      tags: ["Apple Pay", "High Concurrency", "Swift", "PCI-DSS Compliance"],
      body: "Contributed as core mobile systems engineer through Unosquare to large-scale urban transit platforms serving more than 5,000,000 daily commuter trips. Implemented contactless payment flows including Apple Pay and balance reconciliation under strict regulatory and audit requirements.",
      statLabel: "Daily Commuters Served",
      statVal: "5M+ Daily Trips"
    },
    es: {
      cat: "MOVILIDAD A ESCALA URBANA",
      title: "Plataformas Masivas de Tránsito en Unosquare",
      tags: ["Apple Pay", "Alta Concurrencia", "Swift", "Cumplimiento PCI-DSS"],
      body: "Ingeniero central en proyectos de movilidad urbana a gran escala a través de Unosquare, soportando la operación de más de 5,000,000 de traslados diarios. Implementación de flujos de pago sin contacto con Apple Pay y conciliación de saldo bajo estrictos estándares de seguridad y auditoría financiera.",
      statLabel: "Usuarios Diarios Atendidos",
      statVal: "5M+ Viajes Diarios"
    }
  },
  endpoints: {
    en: {
      cat: "FLEET CONCURRENCY",
      title: "Active Enterprise Device Orchestration",
      tags: ["Biometric 2FA", "Hardware Sync", "Zero-Downtime", "Vault"],
      body: "Architectural design and maintenance for core backends serving over 5,000 active operational edge devices. Replaced third-party authentication dependencies with cryptographic peer-to-peer handshakes and HashiCorp Vault secrets management, maximizing uptime and reducing operational overhead.",
      statLabel: "Active Managed Terminals",
      statVal: "5,000+ Devices"
    },
    es: {
      cat: "CONCURRENCIA DE DISPOSITIVOS",
      title: "Orquestación de Dispositivos Empresariales",
      tags: ["2FA Biométrico", "Sincronización Hardware", "Cero Caídas", "Vault"],
      body: "Diseño y mantenimiento arquitectónico para servicios que atienden a más de 5,000 terminales y dispositivos operativos activos. Eliminación de costos recurrentes de autenticación mediante protocolos criptográficos directos e integración con HashiCorp Vault, garantizando alta disponibilidad sin interrupciones.",
      statLabel: "Terminales Activas Gestionadas",
      statVal: "5,000+ Dispositivos"
    }
  },
  agentic: {
    en: {
      cat: "AGENTIC WORKFLOWS",
      title: "Autonomous CI/CD & AI-Assisted Pipelines",
      tags: ["Claude Code", "LangChain", "OpenAI SDK", "GitOps", "PR Gates"],
      body: "Design and deployment of deterministic agentic workflows within modern development cycles: pre-merge code review filters, semantic verification against API breaking changes, and custom developer CLI tools that shorten ramp-up time and ensure continuous compliance.",
      statLabel: "Review Latency Reduction",
      statVal: "-68% Wait Time"
    },
    es: {
      cat: "FLUJOS AGÉNTICOS",
      title: "Pipelines CI/CD Autónomos y Asistidos por IA",
      tags: ["Claude Code", "LangChain", "OpenAI SDK", "GitOps", "Filtros de PR"],
      body: "Diseño e implementación de flujos agénticos deterministas en el ciclo de desarrollo: filtros de revisión de código antes de merge, verificación semántica para prevenir cambios destructivos en APIs y herramientas CLI con IA que reducen tiempos de adopción y garantizan cumplimiento continuo.",
      statLabel: "Reducción de Tiempo de Espera",
      statVal: "-68% Menor Latencia"
    }
  },
  pillar_migration: {
    en: {
      cat: "ARCHITECTURE PILLAR 01",
      title: "Monolith ↔ Microservices Bidirectional Evolution",
      tags: ["Strangler Fig", "Modular Monolith", "Docker", "Kubernetes"],
      body: "Pragmatic architectural choices: breaking monolithic systems into decoupled microservices when scale requires independent deployments, or deliberately consolidating fragmented services back into cohesive modular monoliths to eliminate needless network latency and operational complexity.",
      statLabel: "Design Pattern",
      statVal: "Pragmatic Strangler Fig"
    },
    es: {
      cat: "PILAR DE ARQUITECTURA 01",
      title: "Evolución Bidireccional: Monolito ↔ Microservicios",
      tags: ["Strangler Fig", "Monolito Modular", "Docker", "Kubernetes"],
      body: "Enfoque pragmático de arquitectura: desacoplar sistemas monolíticos en microservicios independientes cuando la escala y los equipos lo ameritan, o consolidar microservicios fragmentados de vuelta hacia monolitos modulares limpios para eliminar complejidad operativa y latencia innecesaria.",
      statLabel: "Patrón de Diseño",
      statVal: "Strangler Fig Pragmático"
    }
  },
  pillar_biometric: {
    en: {
      cat: "ARCHITECTURE PILLAR 02",
      title: "Biometric 2FA & Cryptographic Peer Handshakes",
      tags: ["FaceID", "SHA-256", "HashiCorp Vault", "Zero-Trust"],
      body: "Replacing expensive external SMS/OTP vendors with native on-device biometric signatures and cryptographic challenge-response handshakes, reducing operating costs while delivering sub-second authentication security.",
      statLabel: "Vendor Lock-in Reduction",
      statVal: "0% Third-Party Fees"
    },
    es: {
      cat: "PILAR DE ARQUITECTURA 02",
      title: "2FA Biométrico & Handshakes Criptográficos",
      tags: ["FaceID", "SHA-256", "HashiCorp Vault", "Zero-Trust"],
      body: "Sustitución de proveedores externos de SMS/OTP por verificación biométrica nativa en el dispositivo y protocolos criptográficos de desafío-respuesta, reduciendo costos recurrentes y alcanzando tiempos de validación en milisegundos.",
      statLabel: "Reducción de Dependencia Externa",
      statVal: "0% Costos de Terceros"
    }
  },
  pillar_fleet: {
    en: {
      cat: "ARCHITECTURE PILLAR 03",
      title: "Zero-Downtime Fleet Kubernetes Operations",
      tags: ["Rolling Updates", "TLS Sockets", "K8s Node Drain", "High SLA"],
      body: "Continuous bidirectional socket streams, health telemetry, and state reconciliation across thousands of edge hardware terminals. Automated rolling node drains guarantee upgrades and rollbacks without dropped sessions or user disruption.",
      statLabel: "Target Reliability",
      statVal: "99.995% SLA"
    },
    es: {
      cat: "PILAR DE ARQUITECTURA 03",
      title: "Operaciones Kubernetes con Cero Caídas para Flotas",
      tags: ["Actualizaciones Continuas", "Sockets TLS", "K8s Node Drain", "Alto SLA"],
      body: "Manejo continuo de conexiones socket bidireccionales, telemetría de salud y sincronización de estado para miles de terminales de hardware. Actualizaciones automatizadas de nodos sin desconexión de usuarios ni pérdida de sesiones.",
      statLabel: "Confiabilidad Operativa",
      statVal: "99.995% SLA"
    }
  },
  pillar_elk: {
    en: {
      cat: "ARCHITECTURE PILLAR 04",
      title: "Sub-Second Ingestion with ELK & Asynchronous Queues",
      tags: ["Elasticsearch", "Logstash", "Kibana", "Anomaly Triggers"],
      body: "High-throughput asynchronous event ingestion converting heterogeneous payloads into structured Elasticsearch indices with real-time alerting to intercept anomalies before they impact end-user transactions.",
      statLabel: "Log Ingestion Speed",
      statVal: "Sub-Second Streaming"
    },
    es: {
      cat: "PILAR DE ARQUITECTURA 04",
      title: "Ingesta en Sub-Segundo con ELK y Colas Asíncronas",
      tags: ["Elasticsearch", "Logstash", "Kibana", "Alertas Proactivas"],
      body: "Ingesta asíncrona de eventos de alto rendimiento que convierte registros heterogéneos en índices estructurados de Elasticsearch con alertas en tiempo real para detectar incidencias antes de que afecten la operación.",
      statLabel: "Velocidad de Ingesta",
      statVal: "Streaming en Sub-Segundo"
    }
  },
  exp_coforge: {
    en: {
      cat: "CAREER MILESTONE",
      title: "Lead Software Engineer • Coforge",
      tags: ["2021 – Present", "Kubernetes", "Vault", "ELK", "Fleet Architecture"],
      body: "Directing architectural health and rollout strategies for core API platforms backing 5,000+ operational devices. Designed internal biometric 2FA protocols, secure credential distribution via Vault, and continuous telemetry pipelines.",
      statLabel: "Scale Managed",
      statVal: "5,000+ Active Terminals"
    },
    es: {
      cat: "HITO PROFESIONAL",
      title: "Lead Software Engineer • Coforge",
      tags: ["2021 – Presente", "Kubernetes", "Vault", "ELK", "Arquitectura de Flotas"],
      body: "Liderazgo técnico y arquitectónico para plataformas de APIs centrales que dan soporte a más de 5,000 dispositivos operativos. Diseño de protocolos de 2FA biométrico, distribución segura de credenciales con Vault y pipelines continuos de telemetría.",
      statLabel: "Escala Administrada",
      statVal: "5,000+ Terminales Activas"
    }
  },
  exp_hatch: {
    en: {
      cat: "CAREER MILESTONE",
      title: "Senior Architect & Full-Stack • Hatch Startups",
      tags: ["2021", "Terraform", "AWS Lambda", "InsurTech", "HealthTech"],
      body: "Architected greenfield cloud environments using Terraform Infrastructure-as-Code for fast-growing ventures. Implemented serverless microservices with AWS Lambda, secure patient data pipelines, and responsive portal applications.",
      statLabel: "Infrastructure Pattern",
      statVal: "100% Terraform IaC"
    },
    es: {
      cat: "HITO PROFESIONAL",
      title: "Senior Architect & Full-Stack • Hatch Startups",
      tags: ["2021", "Terraform", "AWS Lambda", "InsurTech", "HealthTech"],
      body: "Diseño de infraestructura en la nube desde cero utilizando Terraform como código para startups de rápido crecimiento. Implementación de microservicios serverless con AWS Lambda, protección de datos y portales web reactivos.",
      statLabel: "Patrón de Infraestructura",
      statVal: "100% Terraform IaC"
    }
  },
  exp_anexinet: {
    en: {
      cat: "CAREER MILESTONE",
      title: "Software Architect & Senior Engineer • Anexinet",
      tags: ["2018 – 2021", "AWS EKS", "Microservices", "API Gateway", "Docker"],
      body: "Guided enterprise clients through legacy modernization, migrating monolithic services to containerized microservices running on AWS EKS with fully automated CI/CD deployment pipelines.",
      statLabel: "Cloud Platform",
      statVal: "AWS Enterprise EKS"
    },
    es: {
      cat: "HITO PROFESIONAL",
      title: "Software Architect & Senior Engineer • Anexinet",
      tags: ["2018 – 2021", "AWS EKS", "Microservicios", "API Gateway", "Docker"],
      body: "Asesoría y modernización técnica para clientes empresariales, migrando sistemas legados hacia microservicios en contenedores sobre AWS EKS con pipelines automatizados de integración y despliegue continuo.",
      statLabel: "Plataforma Cloud",
      statVal: "AWS Enterprise EKS"
    }
  },
  exp_unosquare: {
    en: {
      cat: "CAREER MILESTONE",
      title: "Senior Mobile Systems Engineer • Unosquare",
      tags: ["2014 – 2018", "Urban Transit", "Apple Pay", "High Concurrency", "Swift"],
      body: "Core engineering contributor at Unosquare delivering high-concurrency mobile ticketing and payment platforms serving millions of commuter trips daily. Led the integration of Apple Pay and contactless payment processing adhering to strict financial audit and zero-downtime requirements.",
      statLabel: "Commuters Impacted",
      statVal: "5M+ Daily Trips"
    },
    es: {
      cat: "HITO PROFESIONAL",
      title: "Senior Mobile Systems Engineer • Unosquare",
      tags: ["2014 – 2018", "Tránsito Urbano", "Apple Pay", "Alta Concurrencia", "Swift"],
      body: "Ingeniero central en Unosquare en el desarrollo de plataformas móviles de pago y emisión de boletos de transporte masivo que atienden a millones de usuarios al día. Implementación de pagos sin contacto con Apple Pay bajo rigurosas normativas financieras y operación ininterrumpida.",
      statLabel: "Impacto en Pasajeros",
      statVal: "5M+ Viajes Diarios"
    }
  }
};
