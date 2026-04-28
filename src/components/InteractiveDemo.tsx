import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ChevronLeft, Shield, Users, FileText, 
  Smartphone, BarChart3, Sparkles, Download, 
  ArrowRight, Layout, Zap, Camera, Mic, Type, Plus,
  CheckCircle2
} from 'lucide-react'

export default function InteractiveDemo() {
  const [currentStep, setCurrentStep] = useState(0)
  const [direction, setDirection] = useState(0)

  const steps = [
    {
      id: 'landing',
      title: 'TechConsult AI',
      subtitle: 'A revolução na gestão de vistorias.',
      description: 'Uma solução completa que integra campo e escritório, potencializada por inteligência artificial.',
      icon: <Sparkles size={32} />,
      color: '#6366f1'
    },
    {
      id: 'onboarding',
      title: 'Controle de Equipe',
      subtitle: 'Gestão centralizada.',
      description: 'Cadastre sua equipe, gerencie permissões e acompanhe a atividade em tempo real.',
      icon: <Users size={32} />,
      color: '#8b5cf6'
    },
    {
      id: 'builder',
      title: 'Builder Inteligente',
      subtitle: 'Crie formulários em minutos.',
      description: 'Arraste e solte campos de texto, números, listas, fotos e até gravação de áudio.',
      icon: <Layout size={32} />,
      color: '#10b981'
    },
    {
      id: 'field',
      title: 'App de Campo',
      subtitle: 'Funciona 100% offline.',
      description: 'O vistoriante preenche os dados e anexa evidências, sincronizando quando houver conexão.',
      icon: <Smartphone size={32} />,
      color: '#f59e0b'
    },
    {
      id: 'records',
      title: 'Gestão de Dados',
      subtitle: 'Visualização clara e filtros.',
      description: 'Acompanhe todos os registros enviados, edite informações e filtre dados com alta performance.',
      icon: <BarChart3 size={32} />,
      color: '#64748b'
    },
    {
      id: 'exports',
      title: 'Exportação Direta',
      subtitle: 'Excel e Word com um clique.',
      description: 'Gere planilhas de dados brutos ou documentos Word pré-formatados automaticamente.',
      icon: <Download size={32} />,
      color: '#a855f7'
    },
    {
      id: 'ai',
      title: 'Relatório por IA',
      subtitle: 'O "Joorrge" escreve por você.',
      description: 'Nossa IA analisa os dados da vistoria e redige o relatório técnico final economizando horas.',
      icon: <Sparkles size={32} />,
      color: '#f43f5e'
    }
  ]

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setDirection(1)
      setCurrentStep(prev => prev + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setDirection(-1)
      setCurrentStep(prev => prev - 1)
    }
  }

  return (
    <div className="interactive-demo-card">
      <div className="demo-layout">
        {/* Left Content */}
        <div className="demo-content">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentStep}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -50 : 50 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="step-indicator">
                <div className="step-icon-wrapper" style={{ color: steps[currentStep].color, background: `${steps[currentStep].color}15` }}>
                  {steps[currentStep].icon}
                </div>
                <span className="step-count">Passo {currentStep + 1} de {steps.length}</span>
              </div>
              
              <h3 className="demo-title">{steps[currentStep].title}</h3>
              <h4 className="demo-subtitle" style={{ color: steps[currentStep].color }}>{steps[currentStep].subtitle}</h4>
              <p className="demo-description">{steps[currentStep].description}</p>
            </motion.div>
          </AnimatePresence>

          <div className="demo-nav">
            <button onClick={prevStep} disabled={currentStep === 0} className="demo-btn-nav">
              <ChevronLeft size={20} />
            </button>
            <button onClick={nextStep} className="demo-btn-next">
              {currentStep === steps.length - 1 ? 'Começar Agora' : 'Próximo Passo'}
              <ArrowRight size={18} />
            </button>
          </div>
          
          <div className="demo-dots">
            {steps.map((_, i) => (
              <div 
                key={i} 
                className={`demo-dot ${currentStep === i ? 'active' : ''}`}
                style={{ backgroundColor: currentStep === i ? steps[currentStep].color : undefined }}
                onClick={() => {
                  setDirection(i > currentStep ? 1 : -1)
                  setCurrentStep(i)
                }}
              />
            ))}
          </div>
        </div>

        {/* Right Visual */}
        <div className="demo-visual">
          <div className="mockup-container">
            <div className="mockup-header">
              <div className="dots"><span/><span/><span/></div>
              <div className="url">app.techconsult.ai</div>
            </div>
            
            <div className="mockup-body">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  className="mockup-content"
                >
                  {currentStep === 0 && (
                    <div className="visual-step-0">
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="visual-orb"
                      />
                      <Shield size={64} className="visual-icon-main" />
                      <h4>Portal Especialista</h4>
                    </div>
                  )}

                  {currentStep === 1 && (
                    <div className="visual-step-1">
                      {[
                        { n: 'Eng. Roberto', r: 'Mestre', s: 'online' },
                        { n: 'Vist. Ana', r: 'Campo', s: 'offline' },
                        { n: 'Vist. Marcos', r: 'Campo', s: 'online' }
                      ].map((u, i) => (
                        <motion.div 
                          initial={{ x: 20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: i * 0.1 }}
                          key={i} 
                          className="user-row"
                        >
                          <div className="avatar">{u.n[0]}</div>
                          <div className="info">
                            <span className="name">{u.n}</span>
                            <span className="role">{u.r}</span>
                          </div>
                          <div className={`status ${u.s}`}>{u.s}</div>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {currentStep === 2 && (
                    <div className="visual-step-2">
                      <div className="builder-tabs">
                        <div className="tab active">ESTRUTURA</div>
                        <div className="tab">ELÉTRICA</div>
                      </div>
                      <div className="builder-canvas">
                        <div className="field-item"><Type size={14}/> <span>Descrição</span></div>
                        <div className="field-item"><Camera size={14}/> <span>Foto Evidência</span></div>
                        <div className="field-item"><Mic size={14}/> <span>Áudio Técnico</span></div>
                        <div className="add-btn"><Plus size={14}/> Novo Campo</div>
                      </div>
                    </div>
                  )}

                  {currentStep === 3 && (
                    <div className="visual-step-3">
                      <div className="phone-frame">
                        <div className="phone-screen">
                          <div className="phone-header">Vistoria #482</div>
                          <div className="phone-body">
                            <div className="camera-box"><Camera size={32}/></div>
                            <div className="input-mock"/>
                            <div className="input-mock"/>
                            <div className="btn-mock">SALVAR</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {currentStep === 4 && (
                    <div className="visual-step-4">
                      <div className="stats-grid">
                        <div className="stat"><span>REGISTROS</span><strong>142</strong></div>
                        <div className="stat"><span>FOTOS</span><strong>489</strong></div>
                      </div>
                      <div className="table-mock">
                        {[1,2,3].map(i => (
                          <div key={i} className="tr">
                            <div className="td">Sala {i}</div>
                            <div className="td">22/04</div>
                            <div className="td"><span className="tag">OK</span></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {currentStep === 5 && (
                    <div className="visual-step-5">
                      <div className="export-options">
                        <motion.div whileHover={{ scale: 1.1 }} className="opt excel"><FileText size={40}/><span>EXCEL</span></motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} className="opt word"><FileText size={40}/><span>WORD</span></motion.div>
                      </div>
                      <div className="progress-bar"><motion.div initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 2, repeat: Infinity }} className="fill"/></div>
                    </div>
                  )}

                  {currentStep === 6 && (
                    <div className="visual-step-6">
                      <div className="ai-brain">
                        <Sparkles size={48} className="brain-icon" />
                        <motion.div 
                          animate={{ scale: [1, 1.2, 1] }} 
                          transition={{ duration: 2, repeat: Infinity }}
                          className="brain-glow"
                        />
                      </div>
                      <p>"Analisando 42 registros... Detectado 3 pontos críticos de infiltração..."</p>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          
          {/* Floating badges */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="floating-badge top-right"
          >
            <Zap size={14} /> 10x Mais Rápido
          </motion.div>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="floating-badge bottom-left"
          >
            <CheckCircle2 size={14} /> Precisão Técnica
          </motion.div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .interactive-demo-card {
          background: rgba(30, 41, 59, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 32px;
          padding: 3rem;
          margin-top: 2rem;
          backdrop-filter: blur(20px);
        }
        .demo-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        .demo-content {
          text-align: left;
        }
        .step-indicator {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }
        .step-icon-wrapper {
          padding: 1rem;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .step-count {
          font-size: 0.75rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #64748b;
        }
        .demo-title {
          font-size: 3rem !important;
          font-weight: 800;
          margin-bottom: 0.5rem !important;
          color: #fff;
          background: none !important;
          -webkit-text-fill-color: initial !important;
        }
        .demo-subtitle {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
        }
        .demo-description {
          font-size: 1.1rem;
          color: #94a3b8;
          line-height: 1.6;
          margin-bottom: 3rem;
        }
        .demo-nav {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
        }
        .demo-btn-nav {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #fff;
          width: 56px;
          height: 56px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
        }
        .demo-btn-nav:hover:not(:disabled) {
          background: rgba(255, 255, 255, 0.1);
        }
        .demo-btn-nav:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
        .demo-btn-next {
          flex: 1;
          background: #6366f1;
          border: none;
          color: #fff;
          border-radius: 16px;
          padding: 0 2rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          cursor: pointer;
          transition: all 0.2s;
        }
        .demo-btn-next:hover {
          background: #4f46e5;
          transform: translateY(-2px);
        }
        .demo-dots {
          display: flex;
          gap: 0.5rem;
        }
        .demo-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          cursor: pointer;
          transition: all 0.3s;
        }
        .demo-dot.active {
          width: 24px;
          border-radius: 4px;
        }

        /* Mockup */
        .demo-visual {
          position: relative;
        }
        .mockup-container {
          background: #0f172a;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          aspect-ratio: 4/3;
          display: flex;
          flex-direction: column;
        }
        .mockup-header {
          height: 32px;
          background: rgba(255, 255, 255, 0.05);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          padding: 0 1rem;
          gap: 1rem;
        }
        .mockup-header .dots {
          display: flex;
          gap: 4px;
        }
        .mockup-header .dots span {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
        }
        .mockup-header .url {
          font-size: 10px;
          color: #64748b;
          font-family: monospace;
        }
        .mockup-body {
          flex: 1;
          padding: 1.5rem;
          position: relative;
        }
        .mockup-content {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Visual Steps */
        .visual-step-0 { text-align: center; }
        .visual-orb {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 150px;
          height: 150px;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, transparent 70%);
          border-radius: 50%;
        }
        .visual-icon-main { color: #6366f1; margin-bottom: 1rem; position: relative; }
        
        .visual-step-1 { width: 100%; display: flex; flex-direction: column; gap: 0.75rem; }
        .user-row {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 0.75rem;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .user-row .avatar { width: 32px; height: 32px; border-radius: 50%; background: #1e293b; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold; }
        .user-row .info { flex: 1; display: flex; flex-direction: column; }
        .user-row .name { font-size: 14px; font-weight: bold; }
        .user-row .role { font-size: 10px; color: #64748b; text-transform: uppercase; }
        .user-row .status { font-size: 9px; padding: 2px 6px; border-radius: 10px; text-transform: uppercase; font-weight: 800; }
        .status.online { background: rgba(16, 185, 129, 0.1); color: #10b981; }
        .status.offline { background: rgba(100, 116, 139, 0.1); color: #64748b; }

        .visual-step-2 { width: 100%; height: 100%; display: flex; flex-direction: column; gap: 1rem; }
        .builder-tabs { display: flex; gap: 0.5rem; }
        .builder-tabs .tab { font-size: 10px; font-weight: 800; padding: 4px 12px; border-radius: 6px; background: rgba(255, 255, 255, 0.05); color: #64748b; }
        .builder-tabs .tab.active { background: #6366f1; color: #fff; }
        .builder-canvas { flex: 1; border: 2px dashed rgba(255, 255, 255, 0.1); border-radius: 16px; padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem; }
        .field-item { background: rgba(255, 255, 255, 0.03); padding: 0.75rem; border-radius: 10px; display: flex; align-items: center; gap: 0.5rem; font-size: 12px; color: #94a3b8; }
        .add-btn { text-align: center; font-size: 10px; font-weight: 800; color: #64748b; margin-top: auto; padding: 0.5rem; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 0.5rem; }

        .visual-step-3 .phone-frame { width: 140px; height: 260px; background: #020617; border: 4px solid #1e293b; border-radius: 24px; padding: 6px; }
        .phone-screen { height: 100%; background: #0f172a; border-radius: 18px; display: flex; flex-direction: column; overflow: hidden; }
        .phone-header { height: 30px; background: #6366f1; font-size: 10px; font-weight: bold; display: flex; align-items: center; justify-content: center; }
        .phone-body { padding: 0.75rem; display: flex; flex-direction: column; gap: 0.5rem; }
        .camera-box { aspect-ratio: 1; background: rgba(255, 255, 255, 0.03); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: #334155; }
        .input-mock { height: 12px; background: rgba(255, 255, 255, 0.05); border-radius: 4px; }
        .btn-mock { height: 24px; background: #6366f1; border-radius: 6px; font-size: 10px; font-weight: 800; display: flex; align-items: center; justify-content: center; margin-top: auto; }

        .visual-step-4 { width: 100%; display: flex; flex-direction: column; gap: 1rem; }
        .stats-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; }
        .stat { background: rgba(99, 102, 241, 0.1); border: 1px solid rgba(99, 102, 241, 0.2); padding: 0.75rem; border-radius: 12px; }
        .stat span { display: block; font-size: 8px; font-weight: 800; color: #6366f1; }
        .stat strong { font-size: 20px; font-weight: 900; }
        .table-mock { display: flex; flex-direction: column; gap: 2px; }
        .tr { display: flex; justify-content: space-between; padding: 0.5rem; background: rgba(255, 255, 255, 0.02); font-size: 10px; }
        .tag { background: rgba(16, 185, 129, 0.1); color: #10b981; padding: 1px 4px; border-radius: 4px; }

        .visual-step-5 { width: 100%; text-align: center; }
        .export-options { display: flex; justify-content: center; gap: 2rem; margin-bottom: 2rem; }
        .opt { display: flex; flex-direction: column; gap: 0.5rem; align-items: center; cursor: pointer; }
        .opt.excel { color: #10b981; }
        .opt.word { color: #3b82f6; }
        .opt span { font-size: 10px; font-weight: 900; }
        .progress-bar { height: 6px; background: rgba(255, 255, 255, 0.05); border-radius: 3px; overflow: hidden; }
        .progress-bar .fill { height: 100%; background: #6366f1; }

        .visual-step-6 { text-align: center; position: relative; }
        .ai-brain { position: relative; width: 100px; height: 100px; margin: 0 auto 1.5rem; display: flex; align-items: center; justify-content: center; }
        .brain-icon { color: #f43f5e; position: relative; z-index: 2; }
        .brain-glow { position: absolute; width: 80px; height: 80px; background: rgba(244, 63, 94, 0.3); blur: 20px; border-radius: 50%; }
        .visual-step-6 p { font-size: 12px; color: #94a3b8; font-style: italic; max-width: 200px; }

        .floating-badge {
          position: absolute;
          padding: 0.5rem 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 12px;
          font-size: 10px;
          font-weight: 800;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }
        .top-right { top: -20px; right: -20px; color: #6366f1; }
        .bottom-left { bottom: -20px; left: -20px; color: #10b981; }

        @media (max-width: 992px) {
          .demo-layout { grid-template-columns: 1fr; gap: 3rem; }
          .interactive-demo-card { padding: 2rem; }
          .demo-title { font-size: 2.5rem !important; }
        }
      `}} />
    </div>
  )
}
