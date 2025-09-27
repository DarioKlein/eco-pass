import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import { ThemeToggle } from "@/components/ThemeToggle";
import { 
  Leaf, 
  Coins, 
  Users, 
  TrendingUp, 
  Shield, 
  Smartphone,
  Recycle,
  Bus,
  Heart,
  Star,
  ArrowRight
} from "lucide-react";

const benefits = [
  {
    icon: Leaf,
    title: "Sustentabilidade Real",
    description: "Cada reciclagem faz diferença no meio ambiente",
    details: ["Redução de CO₂", "Economia de água", "Menos lixo em aterros"],
    color: "text-green-600"
  },
  {
    icon: Coins,
    title: "Economia Garantida",
    description: "Transforme lixo em economia real no transporte",
    details: ["Até 50% de desconto", "Créditos não expiram", "Sem taxas"],
    color: "text-yellow-600"
  },
  {
    icon: Users,
    title: "Comunidade Ativa",
    description: "Faça parte de um movimento sustentável",
    details: ["500+ usuários ativos", "Ranking mensal", "Desafios semanais"],
    color: "text-blue-600"
  },
  {
    icon: Shield,
    title: "Segurança Total",
    description: "Dados protegidos e transações seguras",
    details: ["Criptografia avançada", "QR Code único", "Suporte 24/7"],
    color: "text-purple-600"
  }
];

const impactStats = [
  { value: "2.5T", label: "Material Reciclado", icon: Recycle },
  { value: "1.2T", label: "CO₂ Economizado", icon: Leaf },
  { value: "500+", label: "Usuários Ativos", icon: Users },
  { value: "10K+", label: "Viagens Realizadas", icon: Bus }
];

const testimonials = [
  {
    name: "Maria Silva",
    role: "Estudante UFRJ",
    comment: "Economizo R$ 60 por mês no transporte e ainda ajudo o meio ambiente!",
    rating: 5
  },
  {
    name: "João Santos",
    role: "Estudante UFMG",
    comment: "Super prático! Os pontos de coleta ficam perto da universidade.",
    rating: 5
  },
  {
    name: "Ana Costa",
    role: "Estudante USP",
    comment: "Adoro ver meu impacto ambiental crescendo a cada mês.",
    rating: 5
  }
];

export default function Benefits() {
  return (
    <div className="min-h-screen bg-background">
      <Header 
        isLoggedIn={false}
        onLoginClick={() => console.log('Login clicked')}
        onMenuClick={() => console.log('Menu clicked')}
      />
      
      <div className="fixed top-4 right-20 z-50">
        <ThemeToggle />
      </div>

      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-primary/10">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                Benefícios EcoPass
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Mais Que Economia, Um
                <span className="text-primary"> Estilo de Vida</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Descubra como o EcoPass está transformando a vida de universitários em todo o Brasil,
                conectando sustentabilidade e mobilidade urbana de forma inteligente.
              </p>
            </div>
          </div>
        </section>

        {/* Main Benefits */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card key={index} className="p-6 hover-elevate">
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center`}>
                          <Icon className={`h-6 w-6 ${benefit.color}`} />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{benefit.title}</CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{benefit.description}</p>
                      <ul className="space-y-2">
                        {benefit.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Nosso Impacto em Números
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Veja como nossa comunidade está fazendo a diferença para o planeta
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {impactStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index} className="text-center p-6">
                    <CardContent className="space-y-3">
                      <Icon className="h-8 w-8 text-primary mx-auto" />
                      <div className="text-2xl md:text-3xl font-bold text-foreground">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                O Que Nossos Usuários Dizem
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Histórias reais de estudantes que estão transformando seus hábitos
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6">
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground italic">
                      "{testimonial.comment}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Heart className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm">{testimonial.name}</div>
                        <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How to Start */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold">
                Pronto Para Fazer a Diferença?
              </h2>
              <p className="text-lg opacity-90">
                Comece hoje mesmo a transformar sua reciclagem em economia e ajude a construir um futuro mais sustentável
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="bg-white text-primary hover:bg-white/90 gap-2"
                  data-testid="button-start-now"
                >
                  Começar Agora
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                  data-testid="button-find-points"
                >
                  Encontrar Pontos de Coleta
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <Smartphone className="h-8 w-8 mx-auto mb-2 opacity-80" />
                  <div className="text-sm opacity-90">1. Baixe o app</div>
                </div>
                <div className="text-center">
                  <Recycle className="h-8 w-8 mx-auto mb-2 opacity-80" />
                  <div className="text-sm opacity-90">2. Recicle</div>
                </div>
                <div className="text-center">
                  <Bus className="h-8 w-8 mx-auto mb-2 opacity-80" />
                  <div className="text-sm opacity-90">3. Economize</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-muted py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 EcoPass. Conectando sustentabilidade e mobilidade.</p>
        </div>
      </footer>
    </div>
  );
}