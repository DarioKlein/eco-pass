import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Leaf } from "lucide-react";
import { useState } from "react";

interface RegisterFormProps {
  onRegister?: (data: { name: string; cpf: string; email: string; phone: string }) => void;
  onClose?: () => void;
}

export default function RegisterForm({ onRegister, onClose }: RegisterFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    cpf: "",
    email: "",
    phone: ""
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateCPF = (cpf: string) => {
    const cleanCPF = cpf.replace(/\D/g, '');
    return cleanCPF.length === 11 && /^\d{11}$/.test(cleanCPF);
  };

  const formatCPF = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    const formatted = cleaned.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    return formatted;
  };

  const handleInputChange = (field: string, value: string) => {
    if (field === 'cpf') {
      value = formatCPF(value);
    }
    
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }
    
    if (!validateCPF(formData.cpf)) {
      newErrors.cpf = 'CPF inválido';
    }
    
    if (!formData.email.includes('@')) {
      newErrors.email = 'Email inválido';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefone é obrigatório';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      onRegister?.(formData);
      console.log('Registering user:', formData);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Leaf className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl">EcoPass</span>
        </div>
        <CardTitle>Criar Conta</CardTitle>
        <CardDescription>
          Junte-se ao movimento sustentável e comece a ganhar créditos
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nome Completo</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder="Digite seu nome completo"
              data-testid="input-name"
            />
            {errors.name && (
              <p className="text-sm text-destructive" data-testid="error-name">
                {errors.name}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="cpf">CPF</Label>
            <Input
              id="cpf"
              value={formData.cpf}
              onChange={(e) => handleInputChange('cpf', e.target.value)}
              placeholder="000.000.000-00"
              maxLength={14}
              data-testid="input-cpf"
            />
            {errors.cpf && (
              <p className="text-sm text-destructive" data-testid="error-cpf">
                {errors.cpf}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="seu@email.com"
              data-testid="input-email"
            />
            {errors.email && (
              <p className="text-sm text-destructive" data-testid="error-email">
                {errors.email}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Telefone</Label>
            <Input
              id="phone"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              placeholder="(11) 99999-9999"
              data-testid="input-phone"
            />
            {errors.phone && (
              <p className="text-sm text-destructive" data-testid="error-phone">
                {errors.phone}
              </p>
            )}
          </div>

          <div className="flex gap-2 pt-4">
            <Button 
              type="submit" 
              className="flex-1"
              data-testid="button-register"
            >
              Criar Conta
            </Button>
            {onClose && (
              <Button 
                type="button" 
                variant="outline" 
                onClick={onClose}
                data-testid="button-cancel"
              >
                Cancelar
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
}