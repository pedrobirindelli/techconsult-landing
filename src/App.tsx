import { motion } from 'framer-motion'
import { 
  ShieldCheck, 
  Zap, 
  Camera, 
  Database, 
  ArrowRight, 
  CheckCircle2, 
  BrainCircuit
} from 'lucide-react'

function App() {
  const PRODUCTION_URL = "https://app.fielddatacap.com"

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  }

  return (
    <div className="landing-container">
      <header className="container">
        <div className="logo">
          <ShieldCheck className="text-primary" size={28} />
          <span>TechConsult</span>
        </div>
        <nav className="nav-links">
          <a href="#solucao">Solução</a>
          <a href="#vantagens">Vantagens</a>
          <a href="#demonstracao">Demonstração</a>
          <a href={PRODUCTION_URL} className="btn-login">Entrar na Plataforma</a>
        </nav>
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="hero container">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="badge"
          >
            SaaS Especializado para Perícias e Vistorias
          </motion.div>
          
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Transforme horas de vistoria em <span className="text-primary">minutos de relatório.</span>
          </motion.h1>

          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            A primeira plataforma que integra coleta de campo offline com Inteligência Artificial 
            especializada para gerar laudos técnicos impecáveis no seu estilo.
          </motion.p>

          <motion.div 
            className="cta-group"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <a href="#demonstracao" className="btn-primary">Solicitar Demonstração</a>
            <a href={PRODUCTION_URL} className="btn-login flex items-center gap-2" style={{padding: '1rem 2rem'}}>
              Acessar Agora <ArrowRight size={18} />
            </a>
          </motion.div>
        </section>

        {/* PAIN POINTS */}
        <section id="solucao" className="container" style={{paddingTop: '100px'}}>
          <div className="section-title">
            <h2 className="text-primary">O fim dos gargalos na perícia</h2>
            <p className="text-muted">Desenhado por quem entende as dores do engenheiro em campo.</p>
          </div>

          <motion.div 
            className="grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}
          >
            <motion.div variants={itemVariants} className="card">
              <div className="card-icon"><Camera size={24} /></div>
              <h3>Vistoria em campo</h3>
              <p>Tire fotos e grave audios, mesmo sem internet - simples assim. Foque nos apontamentos e deixe que a captura e organização dos dados com agente.</p>
            </motion.div>

            <motion.div variants={itemVariants} className="card">
              <div className="card-icon"><BrainCircuit size={24} /></div>
              <h3>Laudos com IA</h3>
              <p>Nossa IA é personalizada: ela se adequa à sua linguagem, aprende com seus trabalhos anteriores, aceita manuais e normas, e recebe treinamento constante seu para ser cada vez melhor.</p>
            </motion.div>

            <motion.div variants={itemVariants} className="card">
              <div className="card-icon"><Zap size={24} /></div>
              <h3>Você no controle</h3>
              <p className="mb-4">Três fatores são fundamentais:</p>
              <div className="space-y-3 mb-6">
                <p><span className="text-primary font-bold">a.</span> Qualidade das Referências: Quanto melhores forem os laudos antigos que você subir, melhor será o novo.</p>
                <p><span className="text-primary font-bold">b.</span> Regras Claras: Seja específico nas regras e comportamentos que deseja da IA.</p>
                <p><span className="text-primary font-bold">c.</span> Revisão Final: Você recebe o Word para dar o toque final e assinar com confiança.</p>
              </div>
              <div className="pt-4 border-t border-white/5 text-center">
                <p className="text-primary font-bold tracking-widest text-sm italic">LEMBRE-SE: O PERITO É VOCÊ</p>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* HOW IT WORKS SECTION */}
        <section id="como-funciona" style={{background: 'linear-gradient(180deg, rgba(99, 102, 241, 0.03) 0%, rgba(99, 102, 241, 0.08) 100%)', padding: '100px 0'}}>
          <div className="container">
            <div className="section-title">
              <h2 className="text-primary">Como a mágica acontece</h2>
              <p className="text-muted">Do campo ao laudo final: um fluxo pensado para a alta performance.</p>
            </div>

            <div className="steps-container" style={{display: 'flex', flexDirection: 'column', gap: '3rem'}}>
              
              {/* Passo 1 & 2 */}
              <div className="grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
                <motion.div 
                  className="step-card bg-white p-8 rounded-2xl border border-slate-100 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="step-number text-indigo-100 font-bold text-6xl mb-[-2rem]">01</div>
                  <div className="flex items-center gap-4 mb-4 relative">
                    <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl"><Database size={32} /></div>
                    <h3 className="text-xl font-bold">Configuração Mestra</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    O engenheiro configura o formulário sob medida para os vistoriantes. Fotos e áudios costumam ser o foco, mas você pode criar campos diversos para capturar cada detalhe necessário.
                  </p>
                </motion.div>

                <motion.div 
                  className="step-card bg-white p-8 rounded-2xl border border-slate-100 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="step-number text-indigo-100 font-bold text-6xl mb-[-2rem]">02</div>
                  <div className="flex items-center gap-4 mb-4 relative">
                    <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl"><Camera size={32} /></div>
                    <h3 className="text-xl font-bold">Coleta Resiliente</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    O vistoriante vai a campo e registra tudo em imagem e áudio. Liberdade total para usar Web ou App, sendo o App ultra-resiliente para trabalhar 100% offline. O sistema avisa o momento exato de sincronizar.
                  </p>
                </motion.div>
              </div>

              {/* Passo 3 & 4 */}
              <div className="grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
                <motion.div 
                  className="step-card bg-white p-8 rounded-2xl border border-slate-100 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="step-number text-indigo-100 font-bold text-6xl mb-[-2rem]">03</div>
                  <div className="flex items-center gap-4 mb-4 relative">
                    <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl"><Zap size={32} /></div>
                    <h3 className="text-xl font-bold">Consolidação de Dados</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    O sistema recebe, consolida e analisa automaticamente as imagens, áudios e informações. Nada se perde, tudo se organiza para alimentar o cérebro digital da plataforma.
                  </p>
                </motion.div>

                <motion.div 
                  className="step-card bg-white p-8 rounded-2xl border border-slate-100 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="step-number text-indigo-100 font-bold text-6xl mb-[-2rem]">04</div>
                  <div className="flex items-center gap-4 mb-4 relative">
                    <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl"><BrainCircuit size={32} /></div>
                    <h3 className="text-xl font-bold">Alquimia de Laudo</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Os dados de campo se fundem a referências técnicas (manuais e regras) e fontes de inspiração (seus laudos antigos). Com o seu template padrão, a IA gera um rascunho estruturado exatamente como você deseja.
                  </p>
                </motion.div>
              </div>

              {/* Passo 5 - Destaque Final */}
              <motion.div 
                className="bg-indigo-600 text-white p-10 rounded-3xl shadow-xl flex flex-col md:flex-row items-center gap-8"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="p-5 bg-white/10 rounded-2xl"><CheckCircle2 size={48} /></div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">Revisão do Perito</h3>
                  <p className="text-indigo-100 leading-relaxed text-lg">
                    Um laudo técnico é gerado para sua revisão final. Por se tratar de IA, a supervisão humana é essencial para garantir a precisão e integridade. 
                  </p>
                  <p className="mt-4 font-black tracking-widest text-xl uppercase italic opacity-80 border-t border-white/20 pt-4">
                    Lembre-se sempre: O perito é você.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* DEMO FORM */}
        <section id="demonstracao" className="container" style={{padding: '100px 0'}}>
          <div className="contact-section">
            <div className="section-title">
              <h2>Solicite uma Demonstração</h2>
              <p className="text-muted">Descubra como o TechConsult pode escalar seu escritório de perícias.</p>
            </div>

            <div className="form-container">
              <ActualForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="container" style={{paddingBottom: '50px', textAlign: 'center', borderTop: '1px solid var(--glass-border)', paddingTop: '50px'}}>
        <div className="logo" style={{justifyContent: 'center', marginBottom: '1.5rem'}}>
          <ShieldCheck size={24} />
          <span>TechConsult AI</span>
        </div>
        <p className="text-muted text-sm">© 2026 TechConsult - Soluções Inteligentes para Engenharia Legal.</p>
      </footer>
    </div>
  )
}

import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'

function ActualForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('https://agfkghlczqpyikphmsog.supabase.co/functions/v1/send-demo-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error('Falha ao enviar e-mail')

      setStatus('success')
      setFormData({ name: '', email: '', company: '', message: '' })
    } catch (error) {
      console.error(error)
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-emerald-50 border border-emerald-200 p-8 rounded-2xl text-center">
        <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-emerald-900 mb-2">Solicitação Enviada!</h3>
        <p className="text-emerald-700">Obrigado pelo interesse. Em breve nossa equipe entrará em contato com você.</p>
        <button 
          onClick={() => setStatus('idle')}
          className="mt-6 text-emerald-600 font-bold hover:underline"
        >
          Enviar outra mensagem
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="form-group">
          <label>Seu Nome</label>
          <input 
            type="text" 
            placeholder="Nome Completo" 
            required 
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            disabled={status === 'loading'}
          />
        </div>
        <div className="form-group">
          <label>E-mail Corporativo</label>
          <input 
            type="email" 
            placeholder="email@empresa.com.br" 
            required 
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            disabled={status === 'loading'}
          />
        </div>
      </div>
      <div className="form-group">
        <label>Empresa / CREA</label>
        <input 
          type="text" 
          placeholder="Sua empresa ou registro profissional" 
          required 
          value={formData.company}
          onChange={(e) => setFormData({...formData, company: e.target.value})}
          disabled={status === 'loading'}
        />
      </div>
      <div className="form-group">
        <label>Como podemos ajudar?</label>
        <textarea 
          rows={4} 
          placeholder="Conte-nos sobre seu volume de laudos atual..." 
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
          disabled={status === 'loading'}
        ></textarea>
      </div>
      
      {status === 'error' && (
        <p className="text-red-500 text-sm font-bold">Ocorreu um erro ao enviar. Por favor, tente novamente.</p>
      )}

      <button 
        type="submit" 
        className="btn-submit w-full flex justify-center items-center gap-2"
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Enviando...' : (
          <>Quero otimizar meus laudos <ArrowRight size={20} /></>
        )}
      </button>
    </form>
  )
}

export default App
