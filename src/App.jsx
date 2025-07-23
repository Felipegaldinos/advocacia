
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  Menu, 
  X, 
  Scale, 
  Users, 
  Building, 
  Heart, 
  DollarSign, 
  Shield, 
  Phone, 
  Mail, 
  MapPin, 
  ChevronRight,
  Award,
  BookOpen,
  Clock,
  CheckCircle,
  Star,
  Linkedin,
  Instagram,
  Facebook
} from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    area: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (window.scrollY > 100) {
        header?.classList.add('bg-white', 'shadow-lg');
        header?.classList.remove('bg-transparent');
      } else {
        header?.classList.add('bg-transparent');
        header?.classList.remove('bg-white', 'shadow-lg');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const openModal = (modalId) => {
    setActiveModal(modalId);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = 'unset';
  };

  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Nome é obrigatório';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'E-mail é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'E-mail inválido';
    }
    
    if (!formData.phone.trim()) {
      errors.phone = 'Telefone é obrigatório';
    }
    
    if (!formData.area) {
      errors.area = 'Área de interesse é obrigatória';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Mensagem é obrigatória';
    }
    
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    
    if (Object.keys(errors).length === 0) {
      setShowSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        area: '',
        message: ''
      });
      setFormErrors({});
      
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    } else {
      setFormErrors(errors);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const practiceAreas = [
    {
      icon: <Scale className="w-8 h-8" />,
      title: "Direito Civil",
      description: "Contratos, responsabilidade civil, direitos reais e obrigações.",
      details: "Nossa equipe especializada em Direito Civil oferece assessoria completa em contratos, responsabilidade civil, direitos reais, sucessões e obrigações. Atuamos tanto na esfera consultiva quanto contenciosa, sempre buscando as melhores soluções para nossos clientes."
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Direito Empresarial",
      description: "Constituição de empresas, contratos comerciais e governança corporativa.",
      details: "Prestamos assessoria jurídica completa para empresas de todos os portes, desde a constituição até questões complexas de governança corporativa. Nossa expertise inclui fusões e aquisições, contratos comerciais, compliance e reestruturações societárias."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Direito Trabalhista",
      description: "Relações de trabalho, processos trabalhistas e compliance trabalhista.",
      details: "Oferecemos consultoria preventiva e representação em processos trabalhistas, auxiliando empresas e trabalhadores em questões relacionadas a contratos de trabalho, rescisões, compliance trabalhista e negociações coletivas."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Direito de Família",
      description: "Divórcio, guarda, pensão alimentícia e sucessões.",
      details: "Atuamos com sensibilidade e profissionalismo em questões familiares, incluindo divórcio, separação, guarda de filhos, pensão alimentícia, adoção e inventários. Priorizamos soluções consensuais sempre que possível."
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Direito Tributário",
      description: "Planejamento tributário, consultoria fiscal e defesas administrativas.",
      details: "Nossa equipe tributária oferece planejamento fiscal estratégico, consultoria em tributos, defesas administrativas e judiciais, além de assessoria em processos de recuperação de créditos tributários e compliance fiscal."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Direito Penal",
      description: "Defesa criminal, inquéritos policiais e processos penais.",
      details: "Prestamos defesa técnica qualificada em processos criminais, acompanhamento de inquéritos policiais, recursos e medidas cautelares. Atuamos com discrição e eficiência em casos de alta complexidade."
    }
  ];

  const lawyers = [
    {
      id: 1,
      name: "Dr. Ricardo Almeida",
      oab: "OAB/SP 123.456",
      specialty: "Direito Empresarial e Tributário",
      experience: "25 anos de experiência",
      education: "Graduado pela USP, Mestre em Direito Tributário pela PUC-SP",
      description: "Especialista em direito empresarial e tributário com vasta experiência em grandes corporações. Autor de diversos artigos sobre planejamento tributário e governança corporativa."
    },
    {
      id: 2,
      name: "Dra. Marina Torres",
      oab: "OAB/SP 234.567",
      specialty: "Direito Civil e de Família",
      experience: "18 anos de experiência",
      education: "Graduada pela PUC-SP, Especialista em Direito de Família pela FGV",
      description: "Reconhecida expertise em direito de família e sucessões. Mediadora certificada, priorizando soluções consensuais e preservação dos vínculos familiares."
    },
    {
      id: 3,
      name: "Dr. Carlos Mendes",
      oab: "OAB/SP 345.678",
      specialty: "Direito Trabalhista e Previdenciário",
      experience: "20 anos de experiência",
      education: "Graduado pela Mackenzie, Especialista em Direito do Trabalho pela USP",
      description: "Ampla experiência em direito trabalhista e previdenciário, atuando tanto para empresas quanto para trabalhadores. Especialista em compliance trabalhista."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Almeida & Torres Advocacia - Excelência Jurídica e Compromisso</title>
        <meta name="description" content="Escritório de advocacia especializado em Direito Civil, Empresarial, Trabalhista, de Família, Tributário e Penal. Excelência jurídica, ética e compromisso com você." />
      </Helmet>

      <div className="min-h-screen">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center">
                  <Scale className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-serif font-bold text-navy">Almeida & Torres</h1>
                  <p className="text-sm text-gray-600">Advocacia</p>
                </div>
              </div>

              {/* Desktop Menu */}
              <nav className="hidden md:flex items-center space-x-8">
                <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-navy transition-colors font-medium">
                  Home
                </button>
                <button onClick={() => scrollToSection('sobre')} className="text-gray-700 hover:text-navy transition-colors font-medium">
                  Sobre
                </button>
                <button onClick={() => scrollToSection('areas')} className="text-gray-700 hover:text-navy transition-colors font-medium">
                  Áreas de Atuação
                </button>
                <button onClick={() => scrollToSection('advogados')} className="text-gray-700 hover:text-navy transition-colors font-medium">
                  Advogados
                </button>
                <button onClick={() => scrollToSection('conteudo')} className="text-gray-700 hover:text-navy transition-colors font-medium">
                  Conteúdo
                </button>
                <button onClick={() => scrollToSection('contato')} className="btn-primary">
                  Contato
                </button>
              </nav>

              {/* Mobile Menu Button */}
              <button 
                className="md:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <div className="md:hidden bg-white shadow-lg rounded-lg mt-2 py-4">
                <nav className="flex flex-col space-y-4 px-4">
                  <button onClick={() => scrollToSection('home')} className="text-left text-gray-700 hover:text-navy transition-colors font-medium">
                    Home
                  </button>
                  <button onClick={() => scrollToSection('sobre')} className="text-left text-gray-700 hover:text-navy transition-colors font-medium">
                    Sobre
                  </button>
                  <button onClick={() => scrollToSection('areas')} className="text-left text-gray-700 hover:text-navy transition-colors font-medium">
                    Áreas de Atuação
                  </button>
                  <button onClick={() => scrollToSection('advogados')} className="text-left text-gray-700 hover:text-navy transition-colors font-medium">
                    Advogados
                  </button>
                  <button onClick={() => scrollToSection('conteudo')} className="text-left text-gray-700 hover:text-navy transition-colors font-medium">
                    Conteúdo
                  </button>
                  <button onClick={() => scrollToSection('contato')} className="btn-primary w-full">
                    Contato
                  </button>
                </nav>
              </div>
            )}
          </div>
        </header>

        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center justify-center">
          <div className="absolute inset-0">
            <img  className="w-full h-full object-cover" alt="Tribunal de Justiça com arquitetura clássica" src="https://images.unsplash.com/photo-1610688885772-940aeb79dc1d" />
            <div className="absolute inset-0 gradient-overlay"></div>
          </div>
          
          <div className="relative z-10 text-center text-white px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
                Excelência Jurídica
              </h1>
              <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto">
                Ética e compromisso com você
              </p>
              <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Há mais de duas décadas oferecendo soluções jurídicas estratégicas com transparência e resultados excepcionais
              </p>
              <button 
                onClick={() => scrollToSection('contato')} 
                className="btn-gold text-lg px-8 py-4 inline-flex items-center space-x-2"
              >
                <span>Fale Conosco</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="sobre" className="section-padding bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-6">
                Sobre o Escritório
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Fundado em 2001, o Almeida & Torres Advocacia consolidou-se como referência em excelência jurídica, 
                combinando tradição, inovação e compromisso ético em cada caso.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <img  className="w-full h-96 object-cover rounded-lg shadow-elegant" alt="Biblioteca jurídica moderna com estantes de livros" src="https://images.unsplash.com/photo-1677498411273-3ef14a27a037" />
              </div>
              <div>
                <h3 className="text-3xl font-serif font-bold text-navy mb-6">Nossa História</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Nascemos da visão de criar um escritório que combinasse excelência técnica com atendimento humanizado. 
                  Ao longo de mais de duas décadas, construímos uma reputação sólida baseada em resultados consistentes 
                  e relacionamentos duradouros com nossos clientes.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Nossa equipe multidisciplinar está preparada para enfrentar os desafios jurídicos mais complexos, 
                  sempre com foco na estratégia, transparência e eficiência.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="card text-center">
                <Award className="w-12 h-12 text-gold mx-auto mb-4" />
                <h3 className="text-xl font-bold text-navy mb-3">Missão</h3>
                <p className="text-gray-600">
                  Oferecer soluções jurídicas estratégicas e personalizadas, sempre pautadas pela ética, 
                  transparência e excelência técnica.
                </p>
              </div>
              <div className="card text-center">
                <Star className="w-12 h-12 text-gold mx-auto mb-4" />
                <h3 className="text-xl font-bold text-navy mb-3">Visão</h3>
                <p className="text-gray-600">
                  Ser reconhecido como o escritório de advocacia de referência, conhecido pela qualidade 
                  dos serviços e satisfação dos clientes.
                </p>
              </div>
              <div className="card text-center">
                <CheckCircle className="w-12 h-12 text-gold mx-auto mb-4" />
                <h3 className="text-xl font-bold text-navy mb-3">Valores</h3>
                <p className="text-gray-600">
                  Ética, transparência, compromisso, excelência técnica, atendimento personalizado 
                  e responsabilidade social.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Areas Section */}
        <section id="areas" className="section-padding">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-6">
                Áreas de Atuação
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Oferecemos assessoria jurídica especializada em diversas áreas do direito, 
                sempre com foco em resultados e satisfação do cliente.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {practiceAreas.map((area, index) => (
                <div key={index} className="card group cursor-pointer" onClick={() => openModal(`area-${index}`)}>
                  <div className="text-navy mb-4 group-hover:text-gold transition-colors">
                    {area.icon}
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-gold transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {area.description}
                  </p>
                  <button className="text-navy font-semibold inline-flex items-center space-x-2 group-hover:text-gold transition-colors">
                    <span>Saiba mais</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lawyers Section */}
        <section id="advogados" className="section-padding bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-6">
                Nossa Equipe
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Profissionais altamente qualificados e experientes, comprometidos com a excelência 
                e o sucesso de nossos clientes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {lawyers.map((lawyer) => (
                <div key={lawyer.id} className="card text-center group cursor-pointer" onClick={() => openModal(`lawyer-${lawyer.id}`)}>
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                    <img  className="w-full h-full object-cover" alt={`Foto profissional de ${lawyer.name}`} src="https://images.unsplash.com/photo-1585734333426-b96221fbb2bb" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-gold transition-colors">
                    {lawyer.name}
                  </h3>
                  <p className="text-gray-600 mb-2">{lawyer.oab}</p>
                  <p className="text-navy font-semibold mb-4">{lawyer.specialty}</p>
                  <button className="text-navy font-semibold inline-flex items-center space-x-2 group-hover:text-gold transition-colors">
                    <span>Ver perfil</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section id="conteudo" className="section-padding">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-6">
                Conteúdo Jurídico
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Mantenha-se atualizado com nossos artigos, análises e insights sobre o mundo jurídico.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <article className="card group">
                <div className="w-full h-48 mb-6 rounded-lg overflow-hidden">
                  <img  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt="Pessoa lendo documentos jurídicos" src="https://images.unsplash.com/photo-1519515610653-d54c776c9901" />
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                  <Clock className="w-4 h-4" />
                  <span>15 de Janeiro, 2024</span>
                </div>
                <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-gold transition-colors">
                  Mudanças na Legislação Trabalhista 2024
                </h3>
                <p className="text-gray-600 mb-4">
                  Análise das principais alterações na legislação trabalhista e seus impactos para empresas e trabalhadores.
                </p>
                <button className="text-navy font-semibold inline-flex items-center space-x-2 group-hover:text-gold transition-colors">
                  <span>Ler mais</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </article>

              <article className="card group">
                <div className="w-full h-48 mb-6 rounded-lg overflow-hidden">
                  <img  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt="Martelo de juiz sobre mesa" src="https://images.unsplash.com/photo-1555374018-13a8994ab246" />
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                  <Clock className="w-4 h-4" />
                  <span>10 de Janeiro, 2024</span>
                </div>
                <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-gold transition-colors">
                  Planejamento Sucessório: Guia Completo
                </h3>
                <p className="text-gray-600 mb-4">
                  Como estruturar um planejamento sucessório eficiente para proteger o patrimônio familiar.
                </p>
                <button className="text-navy font-semibold inline-flex items-center space-x-2 group-hover:text-gold transition-colors">
                  <span>Ler mais</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </article>

              <article className="card group">
                <div className="w-full h-48 mb-6 rounded-lg overflow-hidden">
                  <img  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt="Empresários em reunião" src="https://images.unsplash.com/photo-1551135049-8a33b5883817" />
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                  <Clock className="w-4 h-4" />
                  <span>5 de Janeiro, 2024</span>
                </div>
                <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-gold transition-colors">
                  Compliance Empresarial: Tendências 2024
                </h3>
                <p className="text-gray-600 mb-4">
                  As principais tendências em compliance empresarial e como implementar um programa eficaz.
                </p>
                <button className="text-navy font-semibold inline-flex items-center space-x-2 group-hover:text-gold transition-colors">
                  <span>Ler mais</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </article>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contato" className="section-padding bg-navy text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Entre em Contato
              </h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Estamos prontos para ajudá-lo. Entre em contato conosco e descubra como podemos 
                solucionar suas questões jurídicas.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="form-group">
                    <label className="form-label text-white">Nome Completo *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input text-gray-900"
                      placeholder="Seu nome completo"
                    />
                    {formErrors.name && <div className="form-error">{formErrors.name}</div>}
                  </div>

                  <div className="form-group">
                    <label className="form-label text-white">E-mail *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input text-gray-900"
                      placeholder="seu@email.com"
                    />
                    {formErrors.email && <div className="form-error">{formErrors.email}</div>}
                  </div>

                  <div className="form-group">
                    <label className="form-label text-white">Telefone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-input text-gray-900"
                      placeholder="(11) 99999-9999"
                    />
                    {formErrors.phone && <div className="form-error">{formErrors.phone}</div>}
                  </div>

                  <div className="form-group">
                    <label className="form-label text-white">Área de Interesse *</label>
                    <select
                      name="area"
                      value={formData.area}
                      onChange={handleInputChange}
                      className="form-select text-gray-900"
                    >
                      <option value="">Selecione uma área</option>
                      <option value="civil">Direito Civil</option>
                      <option value="empresarial">Direito Empresarial</option>
                      <option value="trabalhista">Direito Trabalhista</option>
                      <option value="familia">Direito de Família</option>
                      <option value="tributario">Direito Tributário</option>
                      <option value="penal">Direito Penal</option>
                    </select>
                    {formErrors.area && <div className="form-error">{formErrors.area}</div>}
                  </div>

                  <div className="form-group">
                    <label className="form-label text-white">Mensagem *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="5"
                      className="form-textarea text-gray-900"
                      placeholder="Descreva sua situação ou dúvida..."
                    ></textarea>
                    {formErrors.message && <div className="form-error">{formErrors.message}</div>}
                  </div>

                  <button type="submit" className="btn-gold w-full">
                    Enviar Mensagem
                  </button>

                  {showSuccess && (
                    <div className="success-message show">
                      <strong>Mensagem enviada com sucesso!</strong> Entraremos em contato em breve.
                    </div>
                  )}
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-serif font-bold mb-6">Informações de Contato</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <MapPin className="w-6 h-6 text-gold mt-1" />
                      <div>
                        <p className="font-semibold">Endereço</p>
                        <p className="opacity-90">Av. Paulista, 1000 - Conjunto 1501<br />Bela Vista, São Paulo - SP<br />CEP: 01310-100</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <Phone className="w-6 h-6 text-gold" />
                      <div>
                        <p className="font-semibold">Telefone</p>
                        <p className="opacity-90">(11) 3456-7890</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <Mail className="w-6 h-6 text-gold" />
                      <div>
                        <p className="font-semibold">E-mail</p>
                        <p className="opacity-90">contato@almeidatorres.com.br</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-4">Horário de Atendimento</h4>
                  <div className="space-y-2 opacity-90">
                    <p>Segunda a Sexta: 8h às 18h</p>
                    <p>Sábado: 8h às 12h</p>
                    <p>Domingo: Fechado</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-4">Redes Sociais</h4>
                  <div className="flex space-x-4">
                    <button className="w-10 h-10 bg-gold rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors">
                      <Linkedin className="w-5 h-5 text-white" />
                    </button>
                    <button className="w-10 h-10 bg-gold rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors">
                      <Instagram className="w-5 h-5 text-white" />
                    </button>
                    <button className="w-10 h-10 bg-gold rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors">
                      <Facebook className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>

                {/* Map */}
                <div className="h-64 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.openstreetmap.org/export/embed.html?bbox=-46.6566,-23.5650,-46.6466,-23.5550&layer=mapnik&marker=-23.5600,-46.6516"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização do escritório"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-dark-navy text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center">
                    <Scale className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="text-lg font-serif font-bold">Almeida & Torres</span>
                    <p className="text-sm opacity-75">Advocacia</p>
                  </div>
                </div>
                <p className="text-sm opacity-75">
                  Excelência jurídica, ética e compromisso com você desde 2001.
                </p>
              </div>

              <div>
                <span className="font-semibold mb-4 block">Links Rápidos</span>
                <div className="space-y-2">
                  <button onClick={() => scrollToSection('home')} className="block text-sm opacity-75 hover:opacity-100 transition-opacity">
                    Home
                  </button>
                  <button onClick={() => scrollToSection('sobre')} className="block text-sm opacity-75 hover:opacity-100 transition-opacity">
                    Sobre
                  </button>
                  <button onClick={() => scrollToSection('areas')} className="block text-sm opacity-75 hover:opacity-100 transition-opacity">
                    Áreas de Atuação
                  </button>
                  <button onClick={() => scrollToSection('contato')} className="block text-sm opacity-75 hover:opacity-100 transition-opacity">
                    Contato
                  </button>
                </div>
              </div>

              <div>
                <span className="font-semibold mb-4 block">Áreas de Atuação</span>
                <div className="space-y-2 text-sm opacity-75">
                  <p>Direito Civil</p>
                  <p>Direito Empresarial</p>
                  <p>Direito Trabalhista</p>
                  <p>Direito de Família</p>
                </div>
              </div>

              <div>
                <span className="font-semibold mb-4 block">Contato</span>
                <div className="space-y-2 text-sm opacity-75">
                  <p>Av. Paulista, 1000 - Conjunto 1501</p>
                  <p>São Paulo - SP</p>
                  <p>(11) 3456-7890</p>
                  <p>contato@almeidatorres.com.br</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-600 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm opacity-75 mb-4 md:mb-0">
                © 2024 Almeida & Torres Advocacia. Todos os direitos reservados.
              </p>
              <div className="flex space-x-6 text-sm opacity-75">
                <button className="hover:opacity-100 transition-opacity">Política de Privacidade</button>
                <span>OAB/SP 123.456 | OAB/SP 234.567</span>
              </div>
            </div>
          </div>
        </footer>

        {/* Modals */}
        {practiceAreas.map((area, index) => (
          <div key={`modal-area-${index}`} className={`modal ${activeModal === `area-${index}` ? 'active' : ''}`}>
            <div className="modal-content">
              <button className="close-modal" onClick={closeModal}>×</button>
              <div className="text-navy mb-4">
                {area.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold text-navy mb-4">{area.title}</h3>
              <p className="text-gray-600 leading-relaxed">{area.details}</p>
              <div className="mt-6">
                <button onClick={() => scrollToSection('contato')} className="btn-primary">
                  Solicitar Consultoria
                </button>
              </div>
            </div>
          </div>
        ))}

        {lawyers.map((lawyer) => (
          <div key={`modal-lawyer-${lawyer.id}`} className={`modal ${activeModal === `lawyer-${lawyer.id}` ? 'active' : ''}`}>
            <div className="modal-content">
              <button className="close-modal" onClick={closeModal}>×</button>
              <div className="text-center mb-6">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <img  className="w-full h-full object-cover" alt={`Foto profissional de ${lawyer.name}`} src="https://images.unsplash.com/photo-1585734333426-b96221fbb2bb" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-navy mb-2">{lawyer.name}</h3>
                <p className="text-gray-600 mb-1">{lawyer.oab}</p>
                <p className="text-navy font-semibold">{lawyer.specialty}</p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-navy mb-2">Experiência</h4>
                  <p className="text-gray-600">{lawyer.experience}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-navy mb-2">Formação</h4>
                  <p className="text-gray-600">{lawyer.education}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-navy mb-2">Sobre</h4>
                  <p className="text-gray-600 leading-relaxed">{lawyer.description}</p>
                </div>
              </div>
              
              <div className="mt-6">
                <button onClick={() => scrollToSection('contato')} className="btn-primary">
                  Agendar Consulta
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
