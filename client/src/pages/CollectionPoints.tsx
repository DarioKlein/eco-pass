import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import { ThemeToggle } from "@/components/ThemeToggle";
import { 
  MapPin, 
  Clock, 
  Phone, 
  Star,
  Search,
  Filter,
  Navigation,
  CheckCircle,
  Users,
  Recycle,
  Building,
  GraduationCap
} from "lucide-react";

const collectionPoints = [
  {
    id: "1",
    name: "Ponto UFRJ - Campus Cidade Universitária",
    address: "Av. Pedro Calmon, 550 - Cidade Universitária, Rio de Janeiro",
    distance: "0.8 km",
    rating: 4.8,
    reviews: 124,
    hours: "Seg-Sex: 7h-19h, Sáb: 8h-14h",
    phone: "(21) 3938-0000",
    materials: ["PET", "Alumínio", "Papel", "Vidro"],
    type: "Universitário",
    verified: true,
    busy: "Médio movimento"
  },
  {
    id: "2", 
    name: "EcoPonto Shopping Tijuca",
    address: "Av. Maracanã, 987 - Tijuca, Rio de Janeiro",
    distance: "1.2 km",
    rating: 4.6,
    reviews: 89,
    hours: "Seg-Dom: 10h-22h",
    phone: "(21) 2234-5678",
    materials: ["PET", "Alumínio", "Papel"],
    type: "Shopping",
    verified: true,
    busy: "Alto movimento"
  },
  {
    id: "3",
    name: "Recicla+ Metro Saens Peña",
    address: "Praça Saens Peña, s/n - Tijuca, Rio de Janeiro", 
    distance: "2.1 km",
    rating: 4.5,
    reviews: 67,
    hours: "Seg-Sex: 6h-23h, Sáb-Dom: 7h-22h",
    phone: "(21) 2567-8900",
    materials: ["PET", "Alumínio"],
    type: "Metro",
    verified: true,
    busy: "Baixo movimento"
  },
  {
    id: "4",
    name: "EcoUniversidade - Campus UERJ",
    address: "R. São Francisco Xavier, 524 - Maracanã, Rio de Janeiro",
    distance: "3.5 km", 
    rating: 4.7,
    reviews: 156,
    hours: "Seg-Sex: 7h-18h",
    phone: "(21) 2334-0000",
    materials: ["PET", "Alumínio", "Papel", "Vidro", "Eletrônicos"],
    type: "Universitário",
    verified: true,
    busy: "Alto movimento"
  }
];

const materialColors: Record<string, string> = {
  "PET": "bg-blue-100 text-blue-800",
  "Alumínio": "bg-gray-100 text-gray-800", 
  "Papel": "bg-green-100 text-green-800",
  "Vidro": "bg-purple-100 text-purple-800",
  "Eletrônicos": "bg-red-100 text-red-800"
};

const typeIcons: Record<string, any> = {
  "Universitário": GraduationCap,
  "Shopping": Building,
  "Metro": Navigation
};

export default function CollectionPoints() {
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
        <section className="py-12 bg-gradient-to-br from-primary/5 to-primary/10">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                Pontos de Coleta
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Encontre Pontos de Coleta
                <span className="text-primary"> Próximos a Você</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Localize os pontos de coleta mais convenientes e transforme sua reciclagem em créditos para transporte
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-8 border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Buscar por CEP, bairro ou endereço..."
                  className="pl-10"
                  data-testid="input-search-location"
                />
              </div>
              <Button variant="outline" className="gap-2" data-testid="button-filters">
                <Filter className="h-4 w-4" />
                Filtros
              </Button>
              <Button variant="outline" className="gap-2" data-testid="button-my-location">
                <Navigation className="h-4 w-4" />
                Usar Minha Localização
              </Button>
            </div>

            {/* Quick Filters */}
            <div className="flex flex-wrap gap-2 mt-4">
              <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                Mais Próximos
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                Universitários
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                24 Horas
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                Aceita Eletrônicos
              </Badge>
            </div>
          </div>
        </section>

        {/* Map Placeholder */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <Card className="h-64 md:h-80 bg-muted/30 flex items-center justify-center">
              <div className="text-center space-y-2">
                <MapPin className="h-12 w-12 text-muted-foreground mx-auto" />
                <p className="text-muted-foreground">Mapa interativo dos pontos de coleta</p>
                <p className="text-sm text-muted-foreground">Visualização em desenvolvimento</p>
              </div>
            </Card>
          </div>
        </section>

        {/* Collection Points List */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-foreground">
                Pontos Próximos a Você
              </h2>
              <div className="text-sm text-muted-foreground">
                {collectionPoints.length} pontos encontrados
              </div>
            </div>

            <div className="grid gap-6">
              {collectionPoints.map((point) => {
                const TypeIcon = typeIcons[point.type];
                return (
                  <Card key={point.id} className="p-6 hover-elevate">
                    <div className="grid md:grid-cols-3 gap-4">
                      {/* Main Info */}
                      <div className="md:col-span-2 space-y-3">
                        <div className="flex items-start justify-between">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <h3 className="text-lg font-semibold text-foreground">
                                {point.name}
                              </h3>
                              {point.verified && (
                                <CheckCircle className="h-4 w-4 text-primary" />
                              )}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <MapPin className="h-4 w-4" />
                              {point.address}
                            </div>
                          </div>
                          <Badge variant="secondary" className="gap-1">
                            <TypeIcon className="h-3 w-3" />
                            {point.type}
                          </Badge>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {point.materials.map((material) => (
                            <Badge 
                              key={material} 
                              variant="outline"
                              className={materialColors[material] || "bg-gray-100 text-gray-800"}
                            >
                              {material}
                            </Badge>
                          ))}
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span>{point.hours}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone className="h-4 w-4 text-muted-foreground" />
                            <span>{point.phone}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-medium">{point.rating}</span>
                            <span className="text-muted-foreground">({point.reviews} avaliações)</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4 text-muted-foreground" />
                            <span className="text-muted-foreground">{point.busy}</span>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="space-y-3">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary">{point.distance}</div>
                          <div className="text-xs text-muted-foreground">de distância</div>
                        </div>

                        <div className="space-y-2">
                          <Button className="w-full gap-2" data-testid={`button-navigate-${point.id}`}>
                            <Navigation className="h-4 w-4" />
                            Como Chegar
                          </Button>
                          <Button variant="outline" className="w-full gap-2" data-testid={`button-details-${point.id}`}>
                            <MapPin className="h-4 w-4" />
                            Ver Detalhes
                          </Button>
                        </div>

                        <div className="text-center">
                          <Badge variant={point.busy.includes("Alto") ? "destructive" : point.busy.includes("Médio") ? "secondary" : "default"} className="text-xs">
                            {point.busy}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <Button variant="outline" data-testid="button-load-more">
                Carregar Mais Pontos
              </Button>
            </div>
          </div>
        </section>

        {/* How to Use */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Como Usar os Pontos de Coleta
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Processo simples e rápido para transformar sua reciclagem em créditos
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center p-6">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-primary">1</span>
                  </div>
                  <h3 className="text-xl font-semibold">Separe os Materiais</h3>
                  <p className="text-muted-foreground">
                    Colete e separe os materiais recicláveis aceitos no ponto escolhido
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-primary">2</span>
                  </div>
                  <h3 className="text-xl font-semibold">Vá ao Ponto</h3>
                  <p className="text-muted-foreground">
                    Leve seus materiais ao ponto de coleta e apresente seu QR Code
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-primary">3</span>
                  </div>
                  <h3 className="text-xl font-semibold">Receba Créditos</h3>
                  <p className="text-muted-foreground">
                    Os créditos são automaticamente adicionados ao seu EcoPass
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Pronto Para Começar a Reciclar?
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Cadastre-se agora e comece a transformar sua reciclagem em economia no transporte
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90"
              data-testid="button-register-cta"
            >
              Criar Minha Conta Grátis
            </Button>
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