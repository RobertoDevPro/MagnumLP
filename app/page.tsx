"use client"

import Image from "next/image"
import {
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Target,
  Shield,
  Star,
  Zap,
  BarChart3,
  TrendingDown,
  DollarSign,
  AlertCircle,
  Search,
  FileText,
  Cog,
  BarChart,
  CheckCircle,
  Handshake,
  User,
  Building2,
  Calculator,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import WhatsAppButton from "@/components/whatsapp-button"
import TestimonialCard from "@/components/testimonial-card"

export default function Home() {
  const handleCTA = (message: string) => {
    window.open(`https://wa.me/554185113598?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-slate-900 to-blue-900 text-white py-12 sm:py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* Logo */}
            <div className="mb-12">
              <Image
                src="/images/logo-new.png"
                alt="Magnum Consultoria Empresarial"
                width={250}
                height={125}
                className="h-auto brightness-0 invert mx-auto"
                priority
              />
            </div>

            <div className="inline-flex items-center px-4 sm:px-6 py-3 bg-green-500/20 border border-green-400/30 rounded-full text-green-300 text-xs sm:text-sm font-medium backdrop-blur-sm mb-8">
              <Calculator className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              <span className="text-center">Consultoria Financeira Completa para Fazer Sua Empresa Crescer</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-8">
              <span className="text-green-400">Consultoria Financeira Completa</span> para Fazer Sua Empresa Crescer de
              Verdade
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto">
              Comece com um diagnóstico gratuito e dê o primeiro passo para transformar a gestão financeira do seu
              negócio com a Magnum Consultoria Empresarial.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
              <div className="flex flex-col items-center text-center">
                <CheckCircle2 className="w-8 h-8 text-green-400 mb-3" />
                <span className="text-gray-300 font-medium text-sm sm:text-base">Consultoria 100% personalizada</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <CheckCircle2 className="w-8 h-8 text-green-400 mb-3" />
                <span className="text-gray-300 font-medium text-sm sm:text-base">
                  Metodologia prática, com resultados reais
                </span>
              </div>
              <div className="flex flex-col items-center text-center">
                <CheckCircle2 className="w-8 h-8 text-green-400 mb-3" />
                <span className="text-gray-300 font-medium text-sm sm:text-base">
                  Atendimento online para todo Brasil
                </span>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-4 sm:px-8 py-4 sm:py-5 text-sm sm:text-base lg:text-lg font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 mb-6 w-full max-w-sm sm:max-w-md lg:max-w-none lg:w-auto mx-auto flex items-center justify-center gap-2 sm:gap-3"
              onClick={() =>
                handleCTA(
                  "Olá! Quero agendar meu diagnóstico gratuito e saber mais sobre a consultoria financeira da Magnum. Pode me explicar?",
                )
              }
            >
              <Zap className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 flex-shrink-0" />
              <span className="text-center leading-tight">
                QUERO AGENDAR MEU
                <br className="sm:hidden" />
                DIAGNÓSTICO GRATUITO
              </span>
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 flex-shrink-0" />
            </Button>

            <p className="text-green-200 text-xs sm:text-sm font-medium">
              100% Gratuito • Resultados Reais • Online para Todo Brasil
            </p>
          </div>
        </div>
      </section>

      {/* PROBLEMAS SECTION */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-yellow-100 text-yellow-600 rounded-full text-sm font-medium mb-6">
                <AlertCircle className="w-4 h-4 mr-2" />
                Identifique o Problema
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Você trabalha muito, mas o <span className="text-red-600">lucro não aparece</span>?
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
                Sua empresa pode faturar, mas no fim do mês o caixa fica apertado ou zerado? Isso não é falta de
                esforço, nem de vendas. É falta de controle financeiro profissional.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all bg-white">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <TrendingDown className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
                    Sem clareza sobre receitas e despesas
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Você não sabe exatamente quanto entra e sai do caixa, dificultando o controle financeiro.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all bg-white">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
                    Sem planejamento real de crescimento
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Falta um plano estruturado para fazer a empresa crescer de forma sustentável.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all bg-white">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <AlertCircle className="h-8 w-8 text-yellow-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
                    Muitas dúvidas e decisões no escuro
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Sem dados financeiros claros, você toma decisões importantes baseadas apenas na intuição.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 sm:p-12 text-white max-w-4xl mx-auto">
                <div className="flex justify-center mb-6">
                  <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-green-200" />
                </div>
                <p className="text-lg sm:text-xl lg:text-2xl font-bold mb-8">
                  A solução é uma consultoria financeira completa, que organiza suas finanças, reduz desperdícios e gera
                  lucro sustentável.
                </p>
                <Button
                  size="lg"
                  className="bg-white text-green-600 hover:bg-gray-100 px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-bold rounded-lg w-full max-w-sm sm:max-w-md lg:max-w-none lg:w-auto mx-auto flex items-center justify-center gap-2"
                  onClick={() =>
                    handleCTA(
                      "Olá! Quero agendar meu diagnóstico gratuito e saber mais sobre a consultoria financeira da Magnum. Pode me explicar?",
                    )
                  }
                >
                  <span className="text-center leading-tight">
                    QUERO AGENDAR MEU
                    <br className="sm:hidden" />
                    DIAGNÓSTICO GRATUITO
                  </span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* METODOLOGIA SECTION */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-6">
                <Cog className="w-4 h-4 mr-2" />
                Nossa Metodologia
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Como funciona a <span className="text-blue-600">consultoria financeira</span> da Magnum?
              </h2>
              <p className="text-lg sm:text-xl text-gray-600">
                Nossa metodologia é simples, prática e focada no seu resultado:
              </p>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all bg-white">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
                      <span className="text-white font-bold text-xl">1</span>
                    </div>
                    <div className="text-center sm:text-left">
                      <div className="flex flex-col sm:flex-row items-center sm:items-start mb-4">
                        <Search className="w-6 h-6 text-blue-600 mr-0 sm:mr-3 mb-2 sm:mb-0" />
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Diagnóstico Financeiro Gratuito</h3>
                      </div>
                      <p className="text-gray-600 text-base sm:text-lg">
                        Analisamos a fundo sua situação atual para identificar os gargalos que impedem sua empresa de
                        crescer e ter clareza.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all bg-white">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
                      <span className="text-white font-bold text-xl">2</span>
                    </div>
                    <div className="text-center sm:text-left">
                      <div className="flex flex-col sm:flex-row items-center sm:items-start mb-4">
                        <FileText className="w-6 h-6 text-green-600 mr-0 sm:mr-3 mb-2 sm:mb-0" />
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Plano de Ação Estratégico</h3>
                      </div>
                      <p className="text-gray-600 text-base sm:text-lg">
                        Criamos um plano sob medida para reorganizar seus processos de gestão financeira e melhorar seus
                        resultados.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all bg-white">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
                      <span className="text-white font-bold text-xl">3</span>
                    </div>
                    <div className="text-center sm:text-left">
                      <div className="flex flex-col sm:flex-row items-center sm:items-start mb-4">
                        <Cog className="w-6 h-6 text-purple-600 mr-0 sm:mr-3 mb-2 sm:mb-0" />
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Implantação Guiada</h3>
                      </div>
                      <p className="text-gray-600 text-base sm:text-lg">
                        Acompanhamos você na implantação e execução, para garantir que o plano saia do papel e vire
                        resultado.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all bg-white">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
                      <span className="text-white font-bold text-xl">4</span>
                    </div>
                    <div className="text-center sm:text-left">
                      <div className="flex flex-col sm:flex-row items-center sm:items-start mb-4">
                        <BarChart className="w-6 h-6 text-red-600 mr-0 sm:mr-3 mb-2 sm:mb-0" />
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Acompanhamento Contínuo</h3>
                      </div>
                      <p className="text-gray-600 text-base sm:text-lg">
                        Monitoramos seu progresso e ajustamos a estratégia para manter o crescimento constante. Tenha um
                        especialista todo mês te auxiliando!
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-bold rounded-lg w-full max-w-sm sm:max-w-md lg:max-w-none lg:w-auto mx-auto flex items-center justify-center gap-2"
                onClick={() =>
                  handleCTA(
                    "Olá! Quero agendar meu diagnóstico gratuito e saber mais sobre a consultoria financeira da Magnum. Pode me explicar?",
                  )
                }
              >
                <span className="text-center leading-tight">
                  QUERO AGENDAR MEU
                  <br className="sm:hidden" />
                  DIAGNÓSTICO GRATUITO
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* AUTORIDADE SECTION */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-6">
                <User className="w-4 h-4 mr-2" />
                Quem Está Por Trás
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Quem está por trás da <span className="text-blue-600">Magnum</span>?
              </h2>
            </div>

            <Card className="border-0 shadow-xl bg-white">
              <CardContent className="p-8 sm:p-12">
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                  <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0 shadow-lg">
                    <Image
                      src="/images/businessman.png"
                      alt="Fernando Cruz Ferreira"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-grow text-center lg:text-left">
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Fernando Cruz Ferreira</h3>
                    <p className="text-base sm:text-lg text-gray-600 mb-6">
                      Consultor financeiro fundador da Magnum Consultoria Empresarial, com formação sólida e experiência
                      real em micro e pequenas empresas.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 text-sm sm:text-base">
                          Administrador com MBAs em Planejamento Estratégico e Finanças Corporativas
                        </span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 text-sm sm:text-base">
                          Atua como consultor empresarial desde 2020
                        </span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 text-sm sm:text-base">
                          Experiência sólida com empresas de indústria, comércio e serviços
                        </span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 text-sm sm:text-base">
                          Atendimento 100% online para todo o Brasil
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* RESULTADOS SECTION */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-6">
                <Target className="w-4 h-4 mr-2" />
                Seus Resultados
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                O que você vai conquistar com nossa <span className="text-green-600">consultoria</span>?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all bg-white">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <BarChart3 className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Controle financeiro claro e real</h3>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all bg-white">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <DollarSign className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
                    Redução de custos e melhor organização do caixa
                  </h3>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all bg-white">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
                    Planejamento que gera lucro e crescimento sustentável
                  </h3>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all bg-white">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shield className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
                    Segurança para tomar decisões estratégicas
                  </h3>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all bg-white lg:col-span-2">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Handshake className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
                    Consultoria focada em resultados, com acompanhamento constante
                  </h3>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS SECTION */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-yellow-100 text-yellow-600 rounded-full text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                Depoimentos Reais
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Depoimentos de quem já <span className="text-blue-600">contratou</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <TestimonialCard
                name="Juliana F."
                company="Escritório de advocacia"
                testimonial="Antes da consultoria, eu não sabia para onde meu dinheiro ia. Agora, com o Fernando, minha empresa é organizada e o lucro aparece todo mês."
              />

              <TestimonialCard
                name="Rafael D."
                company="Móveis planejados"
                testimonial="Com a consultoria da Magnum, deixei de me preocupar com dívidas e aprendi a controlar meu fluxo de caixa de verdade."
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL SECTION */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
              Vagas limitadas – Comece pelo <span className="text-green-400">diagnóstico gratuito</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-12">
              Quer transformar suas finanças e ver sua empresa crescer?
            </p>

            <div className="bg-red-600/20 border border-red-500/30 rounded-2xl p-6 mb-12 backdrop-blur-sm">
              <p className="text-red-300 font-bold text-base sm:text-lg flex items-center justify-center">
                <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 mr-2 flex-shrink-0" />
                <span>Para garantir qualidade, liberamos poucas vagas por semana. Não perca tempo!</span>
              </p>
            </div>

            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-4 sm:px-6 py-4 sm:py-6 text-sm sm:text-base lg:text-lg font-bold rounded-lg shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105 mb-8 w-full max-w-xs sm:max-w-sm lg:max-w-none lg:w-auto mx-auto flex items-center justify-center gap-2"
              onClick={() =>
                handleCTA(
                  "Olá! Quero agendar meu diagnóstico gratuito e saber mais sobre a consultoria financeira da Magnum. Pode me explicar?",
                )
              }
            >
              <span className="text-center leading-tight">
                QUERO AGENDAR MEU
                <br className="sm:hidden" />
                DIAGNÓSTICO GRATUITO
                <br className="sm:hidden" />
                <span className="hidden sm:inline"> PELO WHATSAPP</span>
              </span>
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 flex-shrink-0" />
            </Button>

            <div className="mt-16 p-6 sm:p-8 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
              <div className="flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-green-300 mr-3" />
                <Calculator className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
              </div>
              <p className="text-xl sm:text-2xl font-bold text-white mb-2">Magnum Consultoria Empresarial</p>
              <p className="text-base sm:text-lg text-green-200 font-medium">
                Transformando a gestão financeira de empresas desde 2020
              </p>
              <div className="flex items-center justify-center mt-4 text-gray-300">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mr-2 flex-shrink-0" />
                <span className="text-sm sm:text-base">Consultoria financeira especializada e personalizada</span>
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
