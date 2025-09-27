import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Leaf, Recycle, Bus } from "lucide-react";
import heroImage from "@assets/generated_images/Students_recycling_for_transport_credits_37e458a9.png";

interface HeroProps {
  onGetStarted?: () => void;
}

export default function Hero({ onGetStarted }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-background py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-primary font-medium">
              <Leaf className="h-5 w-5" />
              <span>Sustentabilidade + Mobilidade</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Transforme Sua 
              <span className="text-primary"> Reciclagem</span> em 
              <span className="text-primary"> Créditos</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-md">
              Junte materiais recicláveis, troque por créditos no EcoPass e use para pagar seu transporte público. 
              Ideal para universitários e usuários de apps de mobilidade.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={onGetStarted}
                className="gap-2"
                data-testid="button-get-started"
              >
                Começar Agora
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                data-testid="button-learn-more"
              >
                Saiba Mais
              </Button>
            </div>

            {/* Quick stats */}
            <div className="flex gap-6 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Usuários</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Pontos de Coleta</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">2.5t</div>
                <div className="text-sm text-muted-foreground">Material Reciclado</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img 
              src={heroImage} 
              alt="Estudantes reciclando para ganhar créditos de transporte"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            
            {/* Floating cards */}
            <Card className="absolute -top-4 -left-4 p-3 bg-card shadow-lg max-w-32">
              <div className="flex items-center gap-2">
                <Recycle className="h-4 w-4 text-primary" />
                <div>
                  <div className="text-xs font-medium">Recicle</div>
                  <div className="text-xs text-muted-foreground">+10 créditos</div>
                </div>
              </div>
            </Card>
            
            <Card className="absolute -bottom-4 -right-4 p-3 bg-card shadow-lg max-w-32">
              <div className="flex items-center gap-2">
                <Bus className="h-4 w-4 text-primary" />
                <div>
                  <div className="text-xs font-medium">Viaje</div>
                  <div className="text-xs text-muted-foreground">-5 créditos</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}