import { Card } from "@/components/ui/card";
import { Recycle, QrCode, Bus, ArrowRight } from "lucide-react";
import processImage from "@assets/generated_images/How_EcoPass_works_process_7769d58e.png";

const steps = [
  {
    icon: Recycle,
    title: "1. Recicle",
    description: "Colete materiais recicláveis como garrafas plásticas, latas de alumínio e papel",
    details: "Aceito: PET, alumínio, papel, vidro"
  },
  {
    icon: QrCode,
    title: "2. Troque",
    description: "Vá até um ponto de coleta e apresente seu QR Code para trocar por créditos",
    details: "Valores variam por material"
  },
  {
    icon: Bus,
    title: "3. Viaje",
    description: "Use seus créditos para pagar passagens de ônibus e outros transportes públicos",
    details: "1 viagem = 5 créditos"
  }
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Como Funciona o EcoPass
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Três passos simples para transformar sua atitude sustentável em mobilidade urbana
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Process illustration */}
          <div className="order-2 md:order-1">
            <img 
              src={processImage} 
              alt="Processo de funcionamento do EcoPass"
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Steps */}
          <div className="order-1 md:order-2 space-y-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} className="p-6 hover-elevate">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {step.description}
                      </p>
                      <p className="text-sm text-primary font-medium">
                        {step.details}
                      </p>
                    </div>

                    {index < steps.length - 1 && (
                      <ArrowRight className="h-5 w-5 text-muted-foreground mt-3 hidden md:block" />
                    )}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary">10</div>
            <div className="text-sm text-muted-foreground">Créditos por kg de PET</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary">15</div>
            <div className="text-sm text-muted-foreground">Créditos por kg de alumínio</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary">5</div>
            <div className="text-sm text-muted-foreground">Créditos por viagem</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary">R$ 2,50</div>
            <div className="text-sm text-muted-foreground">Valor economizado por viagem</div>
          </div>
        </div>
      </div>
    </section>
  );
}