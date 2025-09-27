import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { DialogTitle } from "@/components/ui/dialog";
import { Bus, CreditCard, Plus, Minus, MapPin } from "lucide-react";

interface UseCreditsModalProps {
  currentBalance: number;
  onUseCredits?: (amount: number, type: string, details: any) => void;
  onClose?: () => void;
}

const transportOptions = [
  { 
    type: "Ônibus Municipal", 
    cost: 5, 
    description: "Linhas municipais da cidade",
    lines: ["315", "485", "623", "741", "892"]
  },
  { 
    type: "Ônibus Intermunicipal", 
    cost: 8, 
    description: "Ligação entre cidades",
    lines: ["1001", "1014", "1020", "1035"]
  },
  { 
    type: "Metro", 
    cost: 6, 
    description: "Sistema metroviário",
    lines: ["Linha 1", "Linha 2", "Linha 4"]
  },
  { 
    type: "Trem", 
    cost: 7, 
    description: "Rede ferroviária urbana",
    lines: ["Ramal Japeri", "Ramal Santa Cruz", "Ramal Belford Roxo"]
  }
];

export default function UseCreditsModal({ currentBalance, onUseCredits, onClose }: UseCreditsModalProps) {
  const [selectedTransport, setSelectedTransport] = useState("");
  const [selectedLine, setSelectedLine] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [destination, setDestination] = useState("");

  const selectedOption = transportOptions.find(option => option.type === selectedTransport);
  const totalCost = selectedOption ? selectedOption.cost * quantity : 0;
  const remainingBalance = currentBalance - totalCost;
  const canAfford = remainingBalance >= 0;

  const handleQuantityChange = (change: number) => {
    const newQuantity = Math.max(1, quantity + change);
    setQuantity(newQuantity);
  };

  const handleConfirm = () => {
    if (selectedTransport && selectedLine && canAfford && destination.trim()) {
      const details = {
        transport: selectedTransport,
        line: selectedLine,
        quantity,
        destination: destination.trim(),
        totalCost
      };
      
      onUseCredits?.(totalCost, selectedTransport, details);
      console.log('Créditos utilizados:', details);
      onClose?.();
    }
  };

  return (
    <>
      <DialogTitle className="sr-only">Resgatar Créditos para Transporte</DialogTitle>
      <Card className="w-full max-w-lg mx-auto">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <CreditCard className="h-6 w-6 text-primary" />
          </div>
          <CardTitle>Resgatar Créditos</CardTitle>
          <p className="text-sm text-muted-foreground">
            Use seus créditos para pagar passagens de transporte público
          </p>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Current Balance */}
          <div className="text-center p-4 bg-primary/5 rounded-lg">
            <div className="text-sm text-muted-foreground">Saldo Atual</div>
            <div className="text-2xl font-bold text-primary" data-testid="text-current-balance">
              {currentBalance} créditos
            </div>
            <div className="text-xs text-muted-foreground">
              R$ {(currentBalance * 2.5).toFixed(2)} em economia
            </div>
          </div>

          {/* Transport Type Selection */}
          <div className="space-y-2">
            <Label>Tipo de Transporte</Label>
            <Select value={selectedTransport} onValueChange={setSelectedTransport}>
              <SelectTrigger data-testid="select-transport">
                <SelectValue placeholder="Selecione o tipo de transporte..." />
              </SelectTrigger>
              <SelectContent>
                {transportOptions.map((option) => (
                  <SelectItem key={option.type} value={option.type}>
                    <div className="flex items-center justify-between w-full">
                      <span>{option.type}</span>
                      <Badge variant="outline" className="ml-2">
                        {option.cost} créditos
                      </Badge>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {selectedOption && (
              <p className="text-xs text-muted-foreground">
                {selectedOption.description}
              </p>
            )}
          </div>

          {/* Line Selection */}
          {selectedOption && (
            <div className="space-y-2">
              <Label>Linha/Ramal</Label>
              <Select value={selectedLine} onValueChange={setSelectedLine}>
                <SelectTrigger data-testid="select-line">
                  <SelectValue placeholder="Selecione a linha..." />
                </SelectTrigger>
                <SelectContent>
                  {selectedOption.lines.map((line) => (
                    <SelectItem key={line} value={line}>
                      {line}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          {/* Destination */}
          {selectedLine && (
            <div className="space-y-2">
              <Label>Destino</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="Ex: Centro, Copacabana, Barra..."
                  className="pl-10"
                  data-testid="input-destination"
                />
              </div>
            </div>
          )}

          {/* Quantity Selection */}
          {selectedOption && (
            <div className="space-y-2">
              <Label>Quantidade de Passagens</Label>
              <div className="flex items-center gap-3">
                <Button 
                  size="icon" 
                  variant="outline"
                  onClick={() => handleQuantityChange(-1)}
                  disabled={quantity <= 1}
                  data-testid="button-decrease-quantity"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                
                <div className="flex-1 text-center">
                  <div className="text-2xl font-bold" data-testid="text-quantity">{quantity}</div>
                  <div className="text-xs text-muted-foreground">passagem(s)</div>
                </div>
                
                <Button 
                  size="icon" 
                  variant="outline"
                  onClick={() => handleQuantityChange(1)}
                  disabled={totalCost + selectedOption.cost > currentBalance}
                  data-testid="button-increase-quantity"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          {/* Cost Summary */}
          {selectedOption && (
            <div className="space-y-3 p-4 bg-muted/30 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-sm">Custo por passagem:</span>
                <span className="font-medium">{selectedOption.cost} créditos</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Quantidade:</span>
                <span className="font-medium">{quantity}x</span>
              </div>
              <div className="border-t pt-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Total:</span>
                  <span className="text-lg font-bold text-primary">
                    {totalCost} créditos
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Saldo restante:</span>
                  <span className={remainingBalance >= 0 ? "text-green-600" : "text-red-600"}>
                    {remainingBalance} créditos
                  </span>
                </div>
              </div>
              
              {!canAfford && (
                <div className="text-sm text-red-600 text-center">
                  Saldo insuficiente para esta compra
                </div>
              )}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-2 pt-4">
            <Button 
              className="flex-1 gap-2"
              onClick={handleConfirm}
              disabled={!selectedTransport || !selectedLine || !canAfford || !destination.trim()}
              data-testid="button-confirm-use-credits"
            >
              <Bus className="h-4 w-4" />
              Confirmar Compra
            </Button>
            <Button 
              variant="outline" 
              onClick={onClose}
              data-testid="button-cancel-use-credits"
            >
              Cancelar
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
}