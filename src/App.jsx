import { useState, useEffect } from 'react'
import { 
  Github, 
  Mail, 
  Phone, 
  ExternalLink, 
  ChevronDown,
  Code2,
  Database,
  Palette,
  Terminal,
  Layers,
  Flame
} from 'lucide-react'

// Project Data
const projects = [
  {
    id: 1,
    title: "Football Recruitment Profile",
    description: "Custom recruitment profile built for a high school quarterback, featuring dynamic stats display, embedded highlight reels, and coach contact integration. Designed to make a strong impression on college recruiters.",
    tech: ["React", "CSS3", "Responsive Design"],
    link: "https://patrick-bailey-qb.netlify.app/",
    image: "/patrick.png",
    accent: "#3b82f6"
  },
  {
    id: 2,
    title: "Photography Studio",
    description: "Full-featured business website for a North Alabama photography studio. Includes secure user authentication, dynamic gallery management, and Supabase-powered image hosting with optimized delivery.",
    tech: ["React", "JavaScript", "Supabase", "SQL"],
    link: "https://heirloomandcophotography.vercel.app/",
    image: "/marie.png",
    accent: "#f59e0b"
  },
  {
    id: 3,
    title: "Region Companion",
    description: "Interactive companion web app for tabletop strategy gaming. Features real-time multi-user synchronization, persistent game state management, and secure authentication powered by Firebase.",
    tech: ["React", "Firebase", "Real-time DB", "Auth"],
    link: "https://region-companion.web.app/",
    image: "/region.png",
    accent: "#10b981"
  }
]

const skills = [
  { name: "React", icon: Code2, category: "Frontend" },
  { name: "JavaScript", icon: Terminal, category: "Language" },
  { name: "Firebase", icon: Flame, category: "Backend" },
  { name: "Supabase", icon: Database, category: "Backend" },
  { name: "SQL", icon: Database, category: "Database" },
  { name: "CSS/Tailwind", icon: Palette, category: "Styling" },
  { name: "Git", icon: Layers, category: "Tools" },
  { name: "Responsive Design", icon: Layers, category: "Design" },
]

// Components
function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      padding: '16px 0',
      background: scrolled ? 'rgba(10, 10, 11, 0.9)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border-color)' : '1px solid transparent',
      transition: 'all 0.3s ease'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <a href="#" style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.5rem',
          fontStyle: 'italic',
          color: 'var(--text-primary)'
        }}>
          JB
        </a>
        <div style={{
          display: 'flex',
          gap: '32px',
          alignItems: 'center'
        }}>
          {['Projects', 'Skills', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                fontSize: '0.875rem',
                fontWeight: 500,
                color: 'var(--text-secondary)',
                transition: 'color 0.2s ease',
                letterSpacing: '0.025em'
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      padding: '120px 24px 80px',
      background: 'radial-gradient(ellipse at 50% 0%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)'
    }}>
      {/* Background grid pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)'
      }} />
      
      <div style={{ 
        textAlign: 'center', 
        maxWidth: '800px',
        position: 'relative',
        zIndex: 1
      }}>
        <p 
          className="animate-fade-in-up"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.875rem',
            color: 'var(--accent-primary)',
            marginBottom: '24px',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            opacity: 0
          }}
        >
          Full Stack Developer
        </p>
        
        <h1 
          className="animate-fade-in-up delay-1"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3rem, 10vw, 6rem)',
            fontWeight: 400,
            lineHeight: 1.1,
            marginBottom: '24px',
            opacity: 0
          }}
        >
          Jeremy Bailey
        </h1>
        
        <p 
          className="animate-fade-in-up delay-2"
          style={{
            fontSize: '1.125rem',
            color: 'var(--text-secondary)',
            maxWidth: '560px',
            margin: '0 auto 48px',
            lineHeight: 1.7,
            opacity: 0
          }}
        >
          I build modern web applications with React, Firebase, and Supabase. 
          Focused on creating clean, performant experiences that solve real problems.
        </p>
        
        <div 
          className="animate-fade-in-up delay-3"
          style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            opacity: 0
          }}
        >
          <a
            href="#projects"
            style={{
              padding: '14px 28px',
              background: 'var(--gradient-1)',
              borderRadius: '8px',
              fontWeight: 600,
              fontSize: '0.9rem',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              boxShadow: '0 0 30px rgba(59, 130, 246, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)'
              e.target.style.boxShadow = '0 0 40px rgba(59, 130, 246, 0.4)'
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)'
              e.target.style.boxShadow = '0 0 30px rgba(59, 130, 246, 0.3)'
            }}
          >
            View Projects
          </a>
          <a
            href="https://github.com/jbailey6200"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '14px 28px',
              background: 'var(--bg-tertiary)',
              border: '1px solid var(--border-color)',
              borderRadius: '8px',
              fontWeight: 600,
              fontSize: '0.9rem',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = 'var(--border-hover)'
              e.target.style.background = 'var(--bg-card-hover)'
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = 'var(--border-color)'
              e.target.style.background = 'var(--bg-tertiary)'
            }}
          >
            <Github size={18} />
            GitHub
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <a
        href="#projects"
        className="animate-fade-in delay-5"
        style={{
          position: 'absolute',
          bottom: '40px',
          opacity: 0,
          animation: 'fadeIn 0.6s var(--ease-out-quart) 0.5s forwards, float 3s ease-in-out infinite 1s'
        }}
      >
        <ChevronDown size={28} style={{ color: 'var(--text-muted)' }} />
      </a>
    </section>
  )
}

function ProjectCard({ project, index }) {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <article
      className="animate-fade-in-up"
      style={{
        background: 'var(--bg-card)',
        borderRadius: '16px',
        border: '1px solid var(--border-color)',
        overflow: 'hidden',
        transition: 'all 0.4s var(--ease-out-expo)',
        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
        boxShadow: isHovered 
          ? `0 20px 40px rgba(0,0,0,0.3), 0 0 0 1px ${project.accent}30`
          : '0 4px 20px rgba(0,0,0,0.1)',
        opacity: 0,
        animationDelay: `${index * 0.15}s`
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
<div style={{
  height: '220px',
  borderBottom: '1px solid var(--border-color)',
  overflow: 'hidden',
  position: 'relative'
}}>
  <img 
    src={project.image} 
    alt={project.title}
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.4s ease',
      transform: isHovered ? 'scale(1.05)' : 'scale(1)'
    }}
  />
</div>
      
      {/* Content */}
      <div style={{ padding: '28px' }}>
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.5rem',
          marginBottom: '12px'
        }}>
          {project.title}
        </h3>
        
        <p style={{
          color: 'var(--text-secondary)',
          fontSize: '0.95rem',
          lineHeight: 1.7,
          marginBottom: '20px'
        }}>
          {project.description}
        </p>
        
        {/* Tech Stack */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px',
          marginBottom: '24px'
        }}>
          {project.tech.map((tech) => (
            <span
              key={tech}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                padding: '6px 12px',
                background: `${project.accent}15`,
                color: project.accent,
                borderRadius: '6px',
                border: `1px solid ${project.accent}30`
              }}
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Link */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontWeight: 600,
            fontSize: '0.9rem',
            color: project.accent,
            transition: 'gap 0.2s ease'
          }}
          onMouseEnter={(e) => e.target.style.gap = '12px'}
          onMouseLeave={(e) => e.target.style.gap = '8px'}
        >
          View Live Site
          <ExternalLink size={16} />
        </a>
      </div>
    </article>
  )
}

function Projects() {
  return (
    <section id="projects" style={{ padding: '120px 0' }}>
      <div className="container">
        <div style={{ marginBottom: '64px' }}>
          <p 
            className="animate-fade-in"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.875rem',
              color: 'var(--accent-primary)',
              marginBottom: '16px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase'
            }}
          >
            Selected Work
          </p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            maxWidth: '500px'
          }}>
            Projects I've built
          </h2>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '32px'
        }}>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" style={{ 
      padding: '120px 0',
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border-color)',
      borderBottom: '1px solid var(--border-color)'
    }}>
      <div className="container">
        <div style={{ marginBottom: '64px' }}>
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.875rem',
            color: 'var(--accent-primary)',
            marginBottom: '16px',
            letterSpacing: '0.1em',
            textTransform: 'uppercase'
          }}>
            Expertise
          </p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            maxWidth: '500px'
          }}>
            Technologies & Tools
          </h2>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '16px'
        }}>
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <div
                key={skill.name}
                className="animate-fade-in-up"
                style={{
                  padding: '24px',
                  background: 'var(--bg-card)',
                  borderRadius: '12px',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  transition: 'all 0.3s ease',
                  opacity: 0,
                  animationDelay: `${index * 0.08}s`,
                  cursor: 'default'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-primary)'
                  e.currentTarget.style.background = 'var(--bg-card-hover)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-color)'
                  e.currentTarget.style.background = 'var(--bg-card)'
                }}
              >
                <Icon size={22} style={{ color: 'var(--accent-primary)' }} />
                <div>
                  <p style={{ fontWeight: 600, fontSize: '0.95rem' }}>{skill.name}</p>
                  <p style={{ 
                    fontSize: '0.75rem', 
                    color: 'var(--text-muted)',
                    fontFamily: 'var(--font-mono)'
                  }}>
                    {skill.category}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'jeremybailey2312@gmail.com',
      href: 'mailto:jeremybailey2312@gmail.com'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'jbailey6200',
      href: 'https://github.com/jbailey6200'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '(256) 684-5130',
      href: 'tel:+12566845130'
    }
  ]
  
  return (
    <section id="contact" style={{ padding: '120px 0' }}>
      <div className="container">
        <div style={{ 
          maxWidth: '700px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.875rem',
            color: 'var(--accent-primary)',
            marginBottom: '16px',
            letterSpacing: '0.1em',
            textTransform: 'uppercase'
          }}>
            Get In Touch
          </p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            marginBottom: '24px'
          }}>
            Let's work together
          </h2>
          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '1.1rem',
            lineHeight: 1.7,
            marginBottom: '48px'
          }}>
            I'm currently available for freelance projects and full-time opportunities. 
            If you have a project in mind or just want to chat, feel free to reach out.
          </p>
          
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            maxWidth: '400px',
            margin: '0 auto'
          }}>
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <a
                  key={method.label}
                  href={method.href}
                  target={method.label === 'GitHub' ? '_blank' : undefined}
                  rel={method.label === 'GitHub' ? 'noopener noreferrer' : undefined}
                  className="animate-fade-in-up"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    padding: '20px 24px',
                    background: 'var(--bg-card)',
                    borderRadius: '12px',
                    border: '1px solid var(--border-color)',
                    transition: 'all 0.3s ease',
                    opacity: 0,
                    animationDelay: `${index * 0.1}s`
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent-primary)'
                    e.currentTarget.style.transform = 'translateX(8px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-color)'
                    e.currentTarget.style.transform = 'translateX(0)'
                  }}
                >
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '10px',
                    background: 'var(--accent-glow)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Icon size={20} style={{ color: 'var(--accent-primary)' }} />
                  </div>
                  <div style={{ textAlign: 'left' }}>
                    <p style={{ 
                      fontSize: '0.8rem', 
                      color: 'var(--text-muted)',
                      marginBottom: '2px'
                    }}>
                      {method.label}
                    </p>
                    <p style={{ fontWeight: 500 }}>{method.value}</p>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer style={{
      padding: '40px 0',
      borderTop: '1px solid var(--border-color)',
      background: 'var(--bg-secondary)'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '16px'
      }}>
        <p style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.25rem',
          fontStyle: 'italic'
        }}>
          Jeremy Bailey
        </p>
        <p style={{
          fontSize: '0.875rem',
          color: 'var(--text-muted)'
        }}>
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div>
      <Navigation />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
