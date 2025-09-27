import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { DialogTitle } from "@/components/ui/dialog";
import { Recycle, Plus, Minus } from "lucide-react";

interface Material {
  type: string;
  weight: number;
  credits: number;
}

interface AddRecyclingModalProps {
  onAddRecycling?: (materials: Material[], totalCredits: number) => void;
  onClose?: () => void;
}

const materialRates = {
  "PET": 10, // créditos por kg
  "Alumínio": 15,
  "Papel": 5,
  "Vidro": 8,
  "Eletrônicos": 20
};

const collectionPoints = [
  "Ponto UFRJ - Campus Cidade Universitária",
  "EcoPonto Shopping Tijuca", 
  "Recicla+ Metro Saens Peña",
  "EcoUniversidade - Campus UERJ",
  "Ponto Biblioteca Central"
];

export default function AddRecyclingModal({ onAddRecycling, onClose }: AddRecyclingModalProps) {
  const [materials, setMaterials] = useState<Material[]>([]);
  const [selectedMaterial, setSelectedMaterial] = useState("");
  const [weight, setWeight] = useState("");
  const [selectedPoint, setSelectedPoint] = useState("");

  const addMaterial = () => {
    if (selectedMaterial && weight) {
      const weightNum = parseFloat(weight);
      const credits = Math.round(weightNum * materialRates[selectedMaterial as keyof typeof materialRates]);
      
      const newMaterial: Material = {
        type: selectedMaterial,
        weight: weightNum,
        credits
      };

      setMaterials([...materials, newMaterial]);
      setSelectedMaterial("");
      setWeight("");
    }
  };

  const removeMaterial = (index: number) => {
    setMaterials(materials.filter((_, i) => i !== index));
  };

  const totalCredits = materials.reduce((sum, material) => sum + material.credits, 0);
  const totalWeight = materials.reduce((sum, material) => sum + material.weight, 0);

  const handleSubmit = () => {
    if (materials.length > 0 && selectedPoint) {
      onAddRecycling?.(materials, totalCredits);
      console.log('Reciclagem adicionada:', { materials, totalCredits, point: selectedPoint });
      onClose?.();
    }
  };

  return (
    <>
      <DialogTitle className="sr-only">Adicionar Nova Reciclagem</DialogTitle>
      <Card className="w-full max-w-lg mx-auto">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Recycle className="h-6 w-6 text-primary" />
          </div>
          <CardTitle>Nova Reciclagem</CardTitle>
          <p className="text-sm text-muted-foreground">
            Adicione os materiais que você reciclou para ganhar créditos
          </p>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Add Material Section */}
          <div className="space-y-4">
            <h3 className="font-semibold">Adicionar Material</h3>
            
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label>Tipo de Material</Label>
                <Select value={selectedMaterial} onValueChange={setSelectedMaterial}>
                  <SelectTrigger data-testid="select-material">
                    <SelectValue placeholder="Selecione..." />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(materialRates).map(([material, rate]) => (
                      <SelectItem key={material} value={material}>
                        {material} ({rate} créditos/kg)
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label>Peso (kg)</Label>
                <div className="flex gap-2">
                  <Input
                    type="number"
                    step="0.1"
                    min="0"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="0.0"
                    data-testid="input-weight"
                  />
                  <Button 
                    size="icon" 
                    onClick={addMaterial}
                    disabled={!selectedMaterial || !weight}
                    data-testid="button-add-material"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Materials List */}
          {materials.length > 0 && (
            <div className="space-y-3">
              <h3 className="font-semibold">Materiais Adicionados</h3>
              <div className="space-y-2">
                {materials.map((material, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-between p-3 bg-muted/30 rounded-lg"
                    data-testid={`material-${index}`}
                  >
                    <div className="flex items-center gap-3">
                      <Badge variant="outline">{material.type}</Badge>
                      <span className="text-sm">{material.weight}kg</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-primary">
                        +{material.credits} créditos
                      </span>
                      <Button 
                        size="icon" 
                        variant="ghost" 
                        onClick={() => removeMaterial(index)}
                        data-testid={`button-remove-${index}`}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Total */}
              <div className="border-t pt-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Total: {totalWeight.toFixed(1)}kg</span>
                  <span className="font-bold text-primary text-lg">
                    +{totalCredits} créditos
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Collection Point Selection */}
          <div className="space-y-2">
            <Label>Ponto de Coleta</Label>
            <Select value={selectedPoint} onValueChange={setSelectedPoint}>
              <SelectTrigger data-testid="select-point">
                <SelectValue placeholder="Selecione onde vai entregar..." />
              </SelectTrigger>
              <SelectContent>
                {collectionPoints.map((point) => (
                  <SelectItem key={point} value={point}>
                    {point}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 pt-4">
            <Button 
              className="flex-1"
              onClick={handleSubmit}
              disabled={materials.length === 0 || !selectedPoint}
              data-testid="button-confirm-recycling"
            >
              Confirmar Reciclagem
            </Button>
            <Button 
              variant="outline" 
              onClick={onClose}
              data-testid="button-cancel-recycling"
            >
              Cancelar
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
}