"use client"

import Image from "next/image"
import {
  CheckCircle2,
  ArrowRight,
  Users,
  TrendingUp,
  Target,
  Clock,
  Shield,
  Star,
  Zap,
  BarChart3,
  TrendingDown,
  DollarSign,
  RefreshCw,
  UserX,
  AlertCircle,
  Settings,
  Search,
  FileText,
  Cog,
  BarChart,
  Award,
  CheckCircle,
  Handshake,
  ShieldCheck,
  User,
  Building2,
  Wrench,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import WhatsAppButton from "@/components/whatsapp-button"

export default function Home() {
  const handleCTA = (message: string) => {
    window.open(`https://wa.me/554185113598?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* HERO SECTION - MODERNO */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="w-full h-full bg-gradient-to-br from-white/5 to-transparent"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Conteúdo */}
              <div className="text-white space-y-6 lg:col-span-1">
                {/* Logo */}
                <div className="mb-8 lg:text-center">
                  <Image
                    src="/images/logo-new.png"
                    alt="Magnum Consultoria Empresarial"
                    width={220}
                    height={110}
                    className="h-auto brightness-0 invert"
                    priority
                  />
                </div>

                {/* Badge */}
                <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium backdrop-blur-sm">
                  <Zap className="w-4 h-4 mr-2" />
                  Transformação Empresarial Comprovada
                </div>

                {/* Headline */}
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
                  Transforme sua empresa em uma{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    máquina de crescimento
                  </span>
                </h1>

                {/* Subtítulo */}
                <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed">
                  Pare de depender da sorte. Construa um negócio com{" "}
                  <span className="text-white font-semibold">vendas previsíveis</span>,{" "}
                  <span className="text-white font-semibold">processos otimizados</span> e{" "}
                  <span className="text-white font-semibold">crescimento sustentável</span>.
                </p>

                {/* Stats */}
                <div className="flex flex-wrap gap-4 lg:gap-8 text-sm">
                  <div className="flex items-center text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mr-2" />
                    <span>
                      <strong className="text-white">1.500+</strong> empresas transformadas
                    </span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mr-2" />
                    <span>
                      <strong className="text-white">85%</strong> de crescimento médio
                    </span>
                  </div>
                </div>

                {/* CTA - Com espaçamento adequado */}
                <div className="pt-8 pb-12">
                  <Button
                    size="lg"
                    className="relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 lg:px-10 py-5 text-lg lg:text-xl font-bold rounded-xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 group border-2 border-blue-500 w-full sm:w-auto before:absolute before:-inset-1 before:bg-gradient-to-r before:from-blue-600 before:to-cyan-600 before:rounded-xl before:blur before:opacity-75 hover:before:opacity-100 before:transition before:duration-1000 hover:before:duration-200 before:animate-pulse before:-z-10"
                    onClick={() =>
                      handleCTA(
                        "Olá! Quero agendar minha Consultoria Estratégica Gratuita para transformar minha empresa!",
                      )
                    }
                  >
                    <span className="flex items-center justify-center relative z-10">
                      <Zap className="mr-3 w-6 h-6 animate-pulse" />
                      <span className="text-center">Agendar Consultoria Gratuita</span>
                      <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>

                  {/* Texto de apoio */}
                  <p className="text-blue-200 text-sm mt-4 font-medium text-center sm:text-left">
                    ⚡ Resposta em até 2 horas • 100% Gratuito
                  </p>
                </div>
              </div>

              {/* Imagem - Oculta no mobile */}
              <div className="relative h-full hidden lg:flex items-end justify-center lg:justify-end">
                <div className="relative z-10 w-full max-w-[600px] h-full flex items-end">
                  <Image
                    src="/images/businessman.png"
                    alt="Consultor Empresarial"
                    width={600}
                    height={700}
                    className="w-full h-auto object-contain object-bottom"
                    priority
                  />
                </div>
                {/* Elementos decorativos */}
                <div className="absolute top-10 right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* PROBLEMAS - MODERNO */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 lg:mb-20">
              <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-medium mb-6">
                <Target className="w-4 h-4 mr-2" />
                Identifique os Gargalos
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Sua empresa está <span className="text-red-600">travada</span> em algum desses pontos?
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
                Reconheça os sinais que impedem seu crescimento e descobra como superá-los
              </p>
            </div>

            {/* Grid de Problemas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  icon: TrendingDown,
                  title: "Vendas Instáveis",
                  description:
                    "Um mês vende muito, outro quase nada. Receita imprevisível que gera ansiedade constante.",
                  color: "text-red-500",
                },
                {
                  icon: DollarSign,
                  title: "Marketing Sem Retorno",
                  description: "Investe em anúncios e redes sociais, mas os leads não se convertem em clientes reais.",
                  color: "text-orange-500",
                },
                {
                  icon: RefreshCw,
                  title: "Processos Desorganizados",
                  description:
                    "Cada funcionário faz de um jeito. Nada é padronizado, tudo depende de pessoas específicas.",
                  color: "text-yellow-500",
                },
                {
                  icon: UserX,
                  title: "Time Desalinhado",
                  description:
                    "Equipe desmotivada, sem direção clara. Todos trabalham, mas poucos resultados aparecem.",
                  color: "text-purple-500",
                },
                {
                  icon: AlertCircle,
                  title: "Decisões no 'Achismo'",
                  description: "Falta dados confiáveis para tomar decisões estratégicas. Tudo baseado em intuição.",
                  color: "text-blue-500",
                },
                {
                  icon: Settings,
                  title: "Você É o Gargalo",
                  description: "A empresa para quando você não está. Você trabalha DENTRO do negócio, não NO negócio.",
                  color: "text-gray-500",
                },
              ].map((problem, index) => (
                <Card
                  key={index}
                  className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white hover:bg-red-50"
                >
                  <CardContent className="p-6 lg:p-8 text-center">
                    <div className={`${problem.color} mb-4 flex justify-center`}>
                      <problem.icon className="w-12 h-12" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                      {problem.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{problem.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA Section - Aumentado */}
            <div className="text-center mt-16 lg:mt-20">
              <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-8 lg:p-12 xl:p-16 text-white max-w-4xl mx-auto shadow-2xl">
                <div className="flex justify-center mb-6">
                  <AlertCircle className="w-16 h-16 text-red-200" />
                </div>
                <p className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 leading-tight">
                  Se você se identificou com <span className="text-red-200">2 ou mais situações</span>,
                  <br className="hidden sm:block" />
                  está na hora de uma <span className="text-yellow-300">transformação estratégica</span>.
                </p>
                <p className="text-base lg:text-lg text-red-100 mb-8 max-w-2xl mx-auto">
                  Não deixe que esses problemas continuem limitando o potencial da sua empresa. A solução está ao seu
                  alcance.
                </p>
                <Button
                  size="lg"
                  className="bg-white text-red-600 hover:bg-gray-100 px-6 lg:px-10 py-3 lg:py-4 text-lg lg:text-xl font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
                  onClick={() =>
                    handleCTA("Olá! Me identifiquei com os problemas e quero uma transformação estratégica!")
                  }
                >
                  Quero Resolver Isso Agora
                  <ArrowRight className="ml-2 w-6 h-6" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRANSFORMAÇÃO - MODERNO */}
      <section id="resultados" className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 lg:mb-20">
              <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-medium mb-6">
                <TrendingUp className="w-4 h-4 mr-2" />
                Transformação Comprovada
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                A{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  transformação
                </span>{" "}
                que sua empresa precisa
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
                Veja o antes e depois de trabalhar conosco
              </p>
            </div>

            {/* Antes vs Depois */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 lg:mb-20">
              {/* ANTES */}
              <div className="relative">
                <div className="absolute -top-4 -left-4 bg-red-500 text-white px-4 py-2 rounded-lg font-bold text-sm flex items-center">
                  <AlertCircle className="w-4 h-4 mr-2" />
                  ANTES
                </div>
                <Card className="border-2 border-red-200 bg-red-50/50 pt-8">
                  <CardContent className="p-6 lg:p-8">
                    <ul className="space-y-4">
                      {[
                        "Vendas instáveis e imprevisíveis",
                        "Marketing sem retorno claro",
                        "Processos bagunçados e ineficientes",
                        "Time perdido e desmotivado",
                        "Decisões baseadas no 'achismo'",
                        "Você é escravo do próprio negócio",
                        "Crescimento limitado e estressante",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <div className="text-red-500 mr-3 mt-1 flex-shrink-0">
                            <AlertCircle className="w-5 h-5" />
                          </div>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* DEPOIS */}
              <div className="relative">
                <div className="absolute -top-4 -left-4 bg-green-500 text-white px-4 py-2 rounded-lg font-bold text-sm flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  DEPOIS
                </div>
                <Card className="border-2 border-green-200 bg-green-50/50 pt-8">
                  <CardContent className="p-6 lg:p-8">
                    <ul className="space-y-4">
                      {[
                        "Vendas previsíveis e crescentes",
                        "Marketing que gera leads qualificados",
                        "Processos padronizados e eficientes",
                        "Time alinhado e produtivo",
                        "Decisões baseadas em dados reais",
                        "Você trabalha NO negócio, não nele",
                        "Crescimento sustentável e escalável",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <div className="text-green-500 mr-3 mt-1 flex-shrink-0">
                            <CheckCircle className="w-5 h-5" />
                          </div>
                          <span className="text-gray-700 font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Resultados Numéricos */}
            <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-3xl p-8 lg:p-12 text-white text-center">
              <h3 className="text-2xl lg:text-3xl font-bold mb-8 lg:mb-12 flex flex-col sm:flex-row items-center justify-center">
                <Target className="w-8 h-8 mb-2 sm:mb-0 sm:mr-3 text-blue-300" />
                <span>
                  Resultados que você pode esperar em <span className="text-blue-300">12 meses</span>:
                </span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                {[
                  {
                    metric: "40-80%",
                    description: "Aumento no faturamento",
                    icon: <TrendingUp className="w-8 h-8" />,
                  },
                  {
                    metric: "60%",
                    description: "Redução de custos operacionais",
                    icon: <BarChart3 className="w-8 h-8" />,
                  },
                  {
                    metric: "3x",
                    description: "Melhoria na produtividade",
                    icon: <Zap className="w-8 h-8" />,
                  },
                ].map((result, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-4 text-blue-300">{result.icon}</div>
                    <div className="text-4xl lg:text-5xl font-bold text-blue-300 mb-4">{result.metric}</div>
                    <p className="text-gray-300 text-lg">{result.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AUTORIDADE - MODERNO */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 lg:mb-20">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-6">
                <Shield className="w-4 h-4 mr-2" />
                Por Que Confiar
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Não somos mais uma consultoria.{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Somos seus parceiros
                </span>{" "}
                de crescimento.
              </h2>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
              {[
                {
                  icon: Users,
                  number: "1.500+",
                  description: "Empresas transformadas",
                  color: "from-blue-500 to-blue-600",
                },
                {
                  icon: TrendingUp,
                  number: "85%",
                  description: "Clientes com crescimento acima de 40%",
                  color: "from-green-500 to-green-600",
                },
                {
                  icon: Target,
                  number: "12",
                  description: "Anos de experiência no mercado",
                  color: "from-purple-500 to-purple-600",
                },
                {
                  icon: Shield,
                  number: "90%",
                  description: "Taxa de renovação de contratos",
                  color: "from-red-500 to-red-600",
                },
              ].map((stat, index) => (
                <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all bg-white">
                  <CardContent className="p-6 lg:p-8">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}
                    >
                      <stat.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                    <p className="text-gray-600 text-sm leading-relaxed">{stat.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Diferenciais */}
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 lg:mb-12 text-center flex flex-col sm:flex-row items-center justify-center">
                <Award className="w-8 h-8 mb-2 sm:mb-0 sm:mr-3 text-blue-600" />
                <span>
                  Nossos <span className="text-blue-600">Diferenciais</span>
                </span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {[
                  {
                    icon: Target,
                    title: "Metodologia Comprovada",
                    description:
                      "Sistema proprietário testado e aprovado em centenas de empresas de diversos segmentos.",
                    color: "text-blue-600",
                  },
                  {
                    icon: BarChart,
                    title: "Foco em Resultados",
                    description: "Não vendemos horas de consultoria. Vendemos transformação e crescimento mensurável.",
                    color: "text-green-600",
                  },
                  {
                    icon: Handshake,
                    title: "Acompanhamento Contínuo",
                    description: "Suporte durante toda implementação. Você nunca fica sozinho no processo de mudança.",
                    color: "text-purple-600",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Garantia de Satisfação",
                    description: "Se não ficar satisfeito nos primeiros 30 dias, devolvemos 100% do investimento.",
                    color: "text-red-600",
                  },
                ].map((diff, index) => (
                  <div
                    key={index}
                    className="flex items-start p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    <div className={`${diff.color} mr-4 flex-shrink-0`}>
                      <diff.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 text-lg">{diff.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{diff.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS - MODERNO */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 lg:mb-20">
              <div className="inline-flex items-center px-4 py-2 bg-yellow-100 text-yellow-600 rounded-full text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                Prova Social
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                O que nossos <span className="text-blue-600">clientes</span> falam sobre nós
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
                Resultados reais de empresários que transformaram seus negócios
              </p>
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  name: "Carlos Mendes",
                  company: "TechSolutions",
                  result: "Faturamento +67% em 8 meses",
                  testimonial:
                    "Antes da Magnum, nossa empresa era um caos. Vendas instáveis, time perdido, processos inexistentes. Hoje temos um negócio que funciona como um relógio.",
                  avatar: User,
                },
                {
                  name: "Ana Paula Silva",
                  company: "Moda & Estilo",
                  result: "3 novas lojas em 12 meses",
                  testimonial:
                    "A metodologia da Magnum nos deu a estrutura para crescer de forma organizada. Saímos de 1 loja para 4 lojas, mantendo qualidade e lucratividade.",
                  avatar: User,
                },
                {
                  name: "Roberto Oliveira",
                  company: "Construtech",
                  result: "Margem de lucro: 12% → 28%",
                  testimonial:
                    "Pensava que conhecia meu negócio, mas a Magnum me mostrou oportunidades que eu nem imaginava. Hoje tenho dados claros para decisões estratégicas.",
                  avatar: Wrench,
                },
              ].map((testimonial, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white group"
                >
                  <CardContent className="p-6 lg:p-8">
                    {/* Stars */}
                    <div className="flex mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    {/* Result Badge */}
                    <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-6 inline-flex items-center">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      {testimonial.result}
                    </div>

                    {/* Testimonial */}
                    <p className="text-gray-700 italic mb-8 leading-relaxed text-lg">"{testimonial.testimonial}"</p>

                    {/* Author */}
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mr-4">
                        <testimonial.avatar className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-600">{testimonial.company}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESSO - MODERNO */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 lg:mb-20">
              <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-medium mb-6">
                <Clock className="w-4 h-4 mr-2" />
                Como Funciona
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Nossa{" "}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  metodologia
                </span>{" "}
                em 4 etapas
              </h2>
              <p className="text-lg lg:text-xl text-gray-600">Sistema simples e eficaz para transformar sua empresa</p>
            </div>

            {/* Process Steps */}
            <div className="space-y-6 lg:space-y-8">
              {[
                {
                  step: "01",
                  title: "Diagnóstico Estratégico Completo",
                  description:
                    "Analisamos profundamente sua empresa: vendas, marketing, processos, time e finanças. Identificamos exatamente onde estão os gargalos.",
                  duration: "1-2 semanas",
                  color: "from-blue-500 to-blue-600",
                  icon: Search,
                },
                {
                  step: "02",
                  title: "Plano de Ação Personalizado",
                  description:
                    "Criamos um roadmap específico para sua realidade, com metas claras, prazos definidos e indicadores de sucesso.",
                  duration: "1 semana",
                  color: "from-green-500 to-green-600",
                  icon: FileText,
                },
                {
                  step: "03",
                  title: "Implementação Acompanhada",
                  description:
                    "Colocamos a mão na massa junto com você. Implementamos processos, treinamos seu time, otimizamos marketing e vendas.",
                  duration: "3-6 meses",
                  color: "from-purple-500 to-purple-600",
                  icon: Cog,
                },
                {
                  step: "04",
                  title: "Monitoramento e Otimização",
                  description:
                    "Acompanhamos os resultados, ajustamos estratégias e garantimos que sua empresa continue crescendo de forma sustentável.",
                  duration: "Contínuo",
                  color: "from-red-500 to-red-600",
                  icon: BarChart,
                },
              ].map((phase, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all bg-white group">
                  <CardContent className="p-6 lg:p-8">
                    <div className="flex flex-col sm:flex-row items-start">
                      <div
                        className={`w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br ${phase.color} rounded-2xl flex items-center justify-center mb-4 sm:mb-0 sm:mr-6 lg:mr-8 flex-shrink-0 group-hover:scale-110 transition-transform`}
                      >
                        <span className="text-white font-bold text-lg lg:text-xl">{phase.step}</span>
                      </div>
                      <div className="flex-grow">
                        <div className="flex flex-col sm:flex-row sm:items-center mb-4">
                          <div className="text-gray-600 mb-2 sm:mb-0 sm:mr-4">
                            <phase.icon className="w-6 h-6 lg:w-8 lg:h-8" />
                          </div>
                          <div>
                            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                              {phase.title}
                            </h3>
                            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium inline-flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {phase.duration}
                            </span>
                          </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed text-base lg:text-lg">{phase.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL - MODERNO */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-8">
              Está pronto para{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                transformar
              </span>{" "}
              sua empresa?
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-12 leading-relaxed">
              Pare de adiar seu crescimento. Agende agora sua{" "}
              <span className="text-white font-semibold">Consultoria Estratégica Gratuita</span> e descubra exatamente o
              que sua empresa precisa para decolar.
            </p>

            {/* Urgência */}
            <div className="bg-red-600/20 border border-red-500/30 rounded-2xl p-4 lg:p-6 mb-12 backdrop-blur-sm">
              <p className="text-red-300 font-bold text-base lg:text-lg flex flex-col sm:flex-row items-center justify-center">
                <AlertCircle className="w-6 h-6 mb-2 sm:mb-0 sm:mr-2" />
                <span>
                  <span className="text-white">ATENÇÃO:</span> Atendemos apenas{" "}
                  <span className="text-red-200">10 empresas por mês</span> para garantir qualidade máxima
                </span>
              </p>
            </div>

            {/* CTA Principal */}
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 lg:px-10 py-6 text-base sm:text-lg lg:text-xl font-bold rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 mb-8 w-full sm:w-auto"
              onClick={() =>
                handleCTA(
                  "Olá! Quero garantir minha vaga para a Consultoria Estratégica Gratuita e transformar minha empresa!",
                )
              }
            >
              <span className="flex items-center justify-center">
                <span className="text-center">QUERO GARANTIR MINHA VAGA AGORA</span>
                <ArrowRight className="ml-3 h-6 w-6 flex-shrink-0" />
              </span>
            </Button>

            {/* Garantias */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mt-16">
              {[
                {
                  icon: Target,
                  title: "100% Personalizado",
                  description: "Diagnóstico específico para sua empresa",
                },
                {
                  icon: DollarSign,
                  title: "Totalmente Gratuito",
                  description: "Sem compromisso ou taxas ocultas",
                },
                {
                  icon: ShieldCheck,
                  title: "Garantia de Satisfação",
                  description: "30 dias para testar sem risco",
                },
              ].map((guarantee, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10"
                >
                  <div className="flex justify-center mb-4 text-blue-300">
                    <guarantee.icon className="w-10 h-10" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{guarantee.title}</h3>
                  <p className="text-gray-300 text-sm">{guarantee.description}</p>
                </div>
              ))}
            </div>

            {/* Destaque maior para a empresa */}
            <div className="mt-16 p-6 lg:p-8 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
              <div className="flex items-center justify-center mb-4">
                <Building2 className="w-8 h-8 text-blue-300 mr-3" />
                <Award className="w-8 h-8 text-yellow-400" />
              </div>
              <p className="text-xl lg:text-2xl font-bold text-white mb-2">Magnum Consultoria Empresarial</p>
              <p className="text-base lg:text-lg text-blue-200 font-medium">
                Transformando empresas há mais de 12 anos
              </p>
              <div className="flex items-center justify-center mt-4 text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span>Excelência comprovada em resultados</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </main>
  )
}
