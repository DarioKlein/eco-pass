import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import RegisterForm from "@/components/RegisterForm";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export default function Home() {
  const [showRegister, setShowRegister] = useState(false);

  const handleRegister = (data: { name: string; cpf: string; email: string; phone: string }) => {
    console.log('Registering user:', data);
    setShowRegister(false);
  };

  const handleLogin = () => {
    setShowRegister(true);
  };

  const handleGetStarted = () => {
    setShowRegister(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        isLoggedIn={false}
        onLoginClick={handleLogin}
        onMenuClick={() => console.log('Menu clicked')}
      />
      
      <div className="fixed top-4 right-20 z-50">
        <ThemeToggle />
      </div>

      <main>
        <Hero onGetStarted={handleGetStarted} />
        <HowItWorks />
        
        {/* Benefits Section */}
        <section id="beneficios" className="py-16 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Por Que Escolher o EcoPass?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">🌱</span>
                </div>
                <h3 className="text-xl font-semibold">Sustentável</h3>
                <p className="text-muted-foreground">
                  Contribua para um meio ambiente mais limpo e ganhe recompensas
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-xl font-semibold">Econômico</h3>
                <p className="text-muted-foreground">
                  Economize dinheiro no transporte público todos os dias
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-xl font-semibold">Prático</h3>
                <p className="text-muted-foreground">
                  Interface simples e pontos de coleta próximos às universidades
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Pronto para Começar?
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Junte-se a centenas de universitários que já estão economizando e ajudando o meio ambiente
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleGetStarted}
                className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
                data-testid="button-cta-signup"
              >
                Criar Minha Conta Grátis
              </button>
              <a 
                href="/dashboard"
                className="bg-white/10 border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors text-center"
                data-testid="link-demo-dashboard"
              >
                Ver Demo do App
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 EcoPass. Conectando sustentabilidade e mobilidade.</p>
        </div>
      </footer>

      {/* Register Modal */}
      <Dialog open={showRegister} onOpenChange={setShowRegister}>
        <DialogContent className="max-w-md">
          <RegisterForm 
            onRegister={handleRegister}
            onClose={() => setShowRegister(false)}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}