import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, CheckCircle, Clock, Mail, Phone, Shield, TrendingUp, Users } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="container mx-auto px-4 py-3 md:py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image
              src="/images/logo-wrmax.png"
              alt="WRMax Logo"
              width={120}
              height={40}
              className="h-6 md:h-8 lg:h-10 w-auto"
            />
          </div>
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <a href="#como-funciona" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Como Funciona
            </a>
            <a href="#beneficios" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Benefícios
            </a>
            <a href="#depoimentos" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Depoimentos
            </a>
            <Button asChild size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground px-3 py-2 font-semibold rounded-lg text-sm">
              <a href="https://api.whatsapp.com/send?phone=558699918753&text=Ol%C3%A1%20IA%20da%20Vipex%2C%20gostaria%20de%20viajar" target="_blank" rel="noopener noreferrer">
                DEMONSTRAÇÃO GRATUITA
              </a>
            </Button>

          </div>
          <div className="md:hidden">
            <Button asChild size="sm" className="bg-accent hover:bg-blue-700/90 text-accent-foreground px-3 py-1.5 font-semibold rounded-lg text-xs">
              <a href="https://api.whatsapp.com/send?phone=558699918753&text=Ol%C3%A1%20IA%20da%20Vipex%2C%20gostaria%20de%20viajar" target="_blank" rel="noopener noreferrer">
                DEMO
              </a>
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8 md:py-16 lg:py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-foreground mb-4 md:mb-6 leading-tight">
            Transforme o atendimento do seu negócio com uma
            <span className="text-foreground block mt-1 md:mt-2">
              IA que agenda e qualifica clientes sozinha no WhatsApp
            </span>
          </h1>

          <p className="text-sm md:text-lg lg:text-xl text-muted-foreground mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed">
            Nossa IA responde clientes 24h, qualifica leads, agenda reuniões direto na sua agenda e reduz faltas. Sem
            substituir sua equipe - apenas otimizando o primeiro contato.
          </p>

          <div className="flex flex-col gap-3 md:gap-4 justify-center items-center mb-6 md:mb-8">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 md:px-8 md:py-4 text-sm md:text-lg font-semibold rounded-lg w-full max-w-sm md:max-w-none md:w-auto">
              <a href="https://wa.me/5511918743332?text=Vim%20saber%20sobre%20a%20IA" target="_blank" rel="noopener noreferrer">
                QUERO AUTOMATIZAR MEU ATENDIMENTO
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-6 py-3 md:px-8 md:py-4 text-sm md:text-lg font-semibold rounded-lg bg-transparent w-full max-w-sm md:max-w-none md:w-auto">
              <a href="https://api.whatsapp.com/send?phone=558699918753&text=Ol%C3%A1%20IA%20da%20Vipex%2C%20gostaria%20de%20viajar" target="_blank" rel="noopener noreferrer">
                VER DEMONSTRAÇÃO
              </a>
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 md:gap-6 text-xs md:text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="w-3 md:w-4 h-3 md:h-4 text-accent" />
              <span>Dados protegidos LGPD</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-3 md:w-4 h-3 md:h-4 text-accent" />
              <span>+30 empresas atendidas</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-3 md:w-4 h-3 md:h-4 text-accent" />
              <span>Implementação em 72h</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-8 md:py-16 lg:py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6 md:mb-12">
            <h2 className="font-bold text-xl md:text-3xl lg:text-4xl text-card-foreground mb-3 md:mb-6">
              Estes problemas estão custando clientes para seu negócio?
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center max-w-6xl mx-auto">
            <div className="relative">
              <div className="bg-background rounded-xl p-4 md:p-8 border border-border">
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 md:mt-2 flex-shrink-0"></div>
                    <p className="text-foreground text-sm md:text-base">
                      Clientes desistem porque não recebem resposta rápida no WhatsApp
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 md:mt-2 flex-shrink-0"></div>
                    <p className="text-foreground text-sm md:text-base">
                      Equipe sobrecarregada com mensagens repetitivas sobre agendamentos
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 md:mt-2 flex-shrink-0"></div>
                    <p className="text-foreground text-sm md:text-base">
                      Alta taxa de faltas por falta de confirmação e lembretes
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 md:mt-2 flex-shrink-0"></div>
                    <p className="text-foreground text-sm md:text-base">
                      Perda de oportunidades fora do horário comercial
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 md:mt-2 flex-shrink-0"></div>
                    <p className="text-foreground text-sm md:text-base">
                      Dificuldade em qualificar leads urgentes de consultas simples
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg md:text-2xl lg:text-3xl text-card-foreground mb-4 md:mb-6">
                Nossa IA resolve todos esses problemas
              </h3>

              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="w-6 md:w-8 h-6 md:h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 md:mt-1">
                    <CheckCircle className="w-3 md:w-5 h-3 md:h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm md:text-lg text-card-foreground mb-1 md:mb-2">
                      Qualificação Inteligente 24/7
                    </h4>
                    <p className="text-muted-foreground leading-relaxed text-xs md:text-base">
                      Qualifica necessidades, identifica urgências e direciona clientes para o atendimento adequado.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="w-6 md:w-8 h-6 md:h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 md:mt-1">
                    <Calendar className="w-3 md:w-5 h-3 md:h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm md:text-lg text-card-foreground mb-1 md:mb-2">
                      Agendamento Direto na Agenda
                    </h4>
                    <p className="text-muted-foreground leading-relaxed text-xs md:text-base">
                      Integração com Google Agenda ou sistema da empresa para agendamentos automáticos em tempo real.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="w-6 md:w-8 h-6 md:h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 md:mt-1">
                    <Mail className="w-3 md:w-5 h-3 md:h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm md:text-lg text-card-foreground mb-1 md:mb-2">
                      Follow-up Automático
                    </h4>
                    <p className="text-muted-foreground leading-relaxed text-xs md:text-base">
                      Lembretes automáticos para reuniões, acompanhamentos e follow-ups personalizados.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-8 md:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="font-bold text-xl md:text-3xl lg:text-4xl text-foreground mb-3 md:mb-4">
              Benefícios diretos para seu negócio
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-xs md:text-base">
              Resultados comprovados em mais de 30 empresas de diversos segmentos
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-6xl mx-auto">
            <Card className="bg-card border-border text-center">
              <CardHeader className="pb-3 md:pb-4">
                <div className="w-10 md:w-12 h-10 md:h-12 bg-accent/20 rounded-full mx-auto mb-3 md:mb-4 flex items-center justify-center">
                  <TrendingUp className="w-5 md:w-6 h-5 md:h-6 text-accent" />
                </div>
                <CardTitle className="text-base md:text-xl text-card-foreground">+40% Agendamentos</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-xs md:text-base">
                  Mais clientes atendidos com resposta imediata 24h
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center">
              <CardHeader className="pb-3 md:pb-4">
                <div className="w-10 md:w-12 h-10 md:h-12 bg-accent/20 rounded-full mx-auto mb-3 md:mb-4 flex items-center justify-center">
                  <Clock className="w-5 md:w-6 h-5 md:h-6 text-accent" />
                </div>
                <CardTitle className="text-base md:text-xl text-card-foreground">-70% Faltas</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-xs md:text-base">
                  Redução drástica de faltas com confirmações automáticas
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center">
              <CardHeader className="pb-3 md:pb-4">
                <div className="w-10 md:w-12 h-10 md:h-12 bg-accent/20 rounded-full mx-auto mb-3 md:mb-4 flex items-center justify-center">
                  <Users className="w-5 md:w-6 h-5 md:h-6 text-accent" />
                </div>
                <CardTitle className="text-base md:text-xl text-card-foreground">Menos Sobrecarga</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-xs md:text-base">
                  Equipe focada em tarefas importantes, não em WhatsApp
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center">
              <CardHeader className="pb-3 md:pb-4">
                <div className="w-10 md:w-12 h-10 md:h-12 bg-accent/20 rounded-full mx-auto mb-3 md:mb-4 flex items-center justify-center">
                  <CheckCircle className="w-5 md:w-6 h-5 md:h-6 text-accent" />
                </div>
                <CardTitle className="text-base md:text-xl text-card-foreground">Melhor Experiência</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-xs md:text-base">
                  Clientes satisfeitos com atendimento rápido e eficiente
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-12 md:py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-card-foreground mb-4">
              O que nossos clientes falam sobre nossa IA
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            <Card className="bg-background border-border">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-muted rounded-full mx-auto mb-4 overflow-hidden">
                  <Image
                    src="/images/medico-01.jpg"
                    alt="Paulo Silveira"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="font-bold text-base md:text-lg text-foreground">Paulo Silveira</CardTitle>
                <CardDescription className="text-xs md:text-sm text-muted-foreground">
                  Diretor - Empresa de Consultoria
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground leading-relaxed text-sm md:text-base">
                  "Com a IA da WRMax, conseguimos reduzir em 70% as ligações perdidas e aumentamos os agendamentos. A
                  qualificação inicial é perfeita para identificar clientes prioritários."
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-background border-border">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-muted rounded-full mx-auto mb-4 overflow-hidden">
                  <Image
                    src="/images/medico-02.jpg"
                    alt="Carlos Mendes"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="font-bold text-base md:text-lg text-foreground">Carlos Mendes</CardTitle>
                <CardDescription className="text-xs md:text-sm text-muted-foreground">
                  CEO - Empresa de Serviços
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground leading-relaxed text-sm md:text-base">
                  "Nossa equipe agora foca no que realmente importa. A IA cuida de 80% das mensagens do WhatsApp e os
                  clientes adoram o atendimento rápido."
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-background border-border md:col-span-2 lg:col-span-1">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-muted rounded-full mx-auto mb-4 overflow-hidden">
                  <Image
                    src="/images/medico-03.jpg"
                    alt="Daniel Costa"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="font-bold text-base md:text-lg text-foreground">Daniel Costa</CardTitle>
                <CardDescription className="text-xs md:text-sm text-muted-foreground">
                  Gerente - Empresa de Tecnologia
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground leading-relaxed text-sm md:text-base">
                  "Implementação foi super rápida e o suporte é excepcional. Em 2 meses aumentamos 45% nossa taxa de
                  conversão. Recomendo para qualquer empresa."
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="como-funciona" className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-foreground mb-4">
              Como funciona na prática
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
              Processo simples e rápido para implementar em seu negócio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-xl md:text-2xl font-bold text-accent">1</span>
              </div>
              <h3 className="font-semibold text-lg md:text-xl text-foreground mb-4">Análise do seu negócio</h3>
              <p className="text-muted-foreground text-sm md:text-base">
                Entendemos seu fluxo de atendimento, produtos/serviços e necessidades específicas
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-xl md:text-2xl font-bold text-accent">2</span>
              </div>
              <h3 className="font-semibold text-lg md:text-xl text-foreground mb-4">Personalização da IA</h3>
              <p className="text-muted-foreground text-sm md:text-base">
                Treinamos a IA com seu protocolo de atendimento e integramos com sua agenda
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-xl md:text-2xl font-bold text-accent">3</span>
              </div>
              <h3 className="font-semibold text-lg md:text-xl text-foreground mb-4">Implementação em 48h</h3>
              <p className="text-muted-foreground text-sm md:text-base">
                Sua IA entra em funcionamento rapidamente com suporte completo da nossa equipe
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chat Example Section */}
      <section className="py-8 md:py-16 lg:py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="font-bold text-xl md:text-3xl lg:text-4xl text-card-foreground mb-3 md:mb-4">
              Veja como a IA atende seus clientes
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-xs md:text-base">
              Exemplo real de como nossa IA interage com clientes no WhatsApp
            </p>
          </div>

          <div className="max-w-xs sm:max-w-sm md:max-w-md mx-auto">
            {/* WhatsApp Header */}
            <div className="bg-[#075e54] text-white p-3 md:p-4 rounded-t-lg flex items-center space-x-3">
              <div className="w-8 md:w-10 h-8 md:h-10 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-xs md:text-sm font-semibold">IA</span>
              </div>
              <div>
                <h3 className="font-semibold text-sm md:text-base">Empresa</h3>
                <p className="text-xs opacity-75">online</p>
              </div>
            </div>

            {/* Chat Messages - 3 mensagens apenas */}
            <div className="bg-[#e5ddd5] p-3 md:p-4 space-y-3 min-h-[160px] md:min-h-[200px] rounded-b-lg">
              {/* Client message */}
              <div className="flex justify-end">
                <div className="bg-[#dcf8c6] p-2 md:p-3 rounded-lg max-w-[85%] shadow-sm">
                  <p className="text-xs md:text-sm text-gray-800">
                    Oi, gostaria de agendar uma reunião para conhecer seus serviços
                  </p>
                  <span className="text-xs text-gray-500 block mt-1">14:32</span>
                </div>
              </div>

              {/* AI response */}
              <div className="flex justify-start">
                <div className="bg-white p-2 md:p-3 rounded-lg max-w-[85%] shadow-sm">
                  <p className="text-xs md:text-sm text-gray-800">
                    Olá! Será um prazer apresentar nossas soluções. Para agendar a melhor data, qual seu nome e empresa?
                  </p>
                  <span className="text-xs text-gray-500 block mt-1">14:32</span>
                </div>
              </div>

              {/* Final scheduling */}
              <div className="flex justify-start">
                <div className="bg-white p-2 md:p-3 rounded-lg max-w-[85%] shadow-sm">
                  <p className="text-xs md:text-sm text-gray-800">Perfeito! Agendei para:</p>
                  <div className="bg-gray-50 p-2 rounded mt-2 text-xs md:text-sm text-black">
                    📅 <strong>Quinta, 15/02 - 14:30</strong>
                    <br />💻 <strong>Reunião Online</strong>
                  </div>
                  <span className="text-xs text-gray-500 block mt-1">14:35</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-4 md:mt-8">
            <p className="text-muted-foreground mb-4 text-xs md:text-base">
              <strong>Todo esse processo acontece automaticamente, 24 horas por dia</strong>
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 md:px-8 md:py-4 text-sm md:text-lg font-semibold rounded-lg w-full max-w-sm md:max-w-none md:w-auto">
              <a href="https://wa.me/5511918743332?text=Vim%20saber%20sobre%20a%20IA" target="_blank" rel="noopener noreferrer">
                QUERO ESSA IA NO MEU NEGÓCIO
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-8 md:py-16 lg:py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-bold text-xl md:text-3xl lg:text-4xl text-card-foreground mb-3 md:mb-6">
              Pronto para revolucionar o atendimento do seu negócio?
            </h2>
            <p className="text-sm md:text-lg text-muted-foreground mb-6 md:mb-8 leading-relaxed">
              Agende uma demonstração gratuita e veja como nossa IA pode aumentar suas conversões e reduzir a sobrecarga
              da sua equipe.
            </p>
            <div className="flex flex-col gap-3 md:gap-4 justify-center items-center mb-6 md:mb-8">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 md:px-8 md:py-4 text-sm md:text-lg font-semibold rounded-lg w-full max-w-sm md:max-w-none md:w-auto">
                <a href="https://api.whatsapp.com/send?phone=558699918753&text=Ol%C3%A1%20IA%20da%20Vipex%2C%20gostaria%20de%20viajar" target="_blank" rel="noopener noreferrer">
                  <Phone className="mr-2 w-4 md:w-5 h-4 md:h-5" />
                  AGENDAR DEMONSTRAÇÃO GRATUITA
                </a>
              </Button>

              <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-6 py-3 md:px-8 md:py-4 text-sm md:text-lg font-semibold rounded-lg bg-transparent w-full max-w-sm md:max-w-none md:w-auto">
                <a href="https://wa.me/5511918743332?text=Vim%20saber%20sobre%20a%20IA" target="_blank" rel="noopener noreferrer">
                  FALAR COM ESPECIALISTA
                </a>
              </Button>
            </div>

            <div className="p-3 md:p-4 bg-accent/10 rounded-lg border border-accent/20">
              <p className="text-xs md:text-sm text-card-foreground">
                <strong>Oferta limitada:</strong> Primeiras 20 empresas ganham 3 meses de suporte premium gratuito
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background py-8 md:py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="md:col-span-2">
              <Image
                src="/images/logo-wrmax.png"
                alt="WRMax Logo"
                width={120}
                height={40}
                className="h-8 md:h-10 w-auto mb-4"
              />
              <p className="text-muted-foreground leading-relaxed max-w-md text-sm md:text-base">
                Especialistas em IA de atendimento para empresas de diversos segmentos.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4 text-sm md:text-base">Soluções</h4>
              <ul className="space-y-2 text-muted-foreground text-sm md:text-base">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    IA para Empresas
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Agendamento Automático
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Qualificação Inteligente
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4 text-sm md:text-base">Contato</h4>
              <ul className="space-y-2 text-muted-foreground text-sm md:text-base">
                <li>atendimento@wrmaxmarketing.com.br</li>
                <li>+55 (86) 9918-8465</li>
                <li>Teresina, PI</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-6 md:mt-8 pt-6 md:pt-8 text-center">
            <p className="text-muted-foreground text-xs md:text-sm">
              © 2025 WRMax Marketing. Todos os direitos reservados. |
              <span className="text-accent font-semibold"> +30 empresas já automatizam seu atendimento conosco</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
