import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { QrCode, Leaf, CreditCard } from "lucide-react";
import QRCode from "qrcode";
import { useState, useEffect } from "react";

interface EcoPassCardProps {
  userCpf: string;
  cardNumber: string;
  balance: number;
  userName: string;
  onUseCredits?: () => void;
}

export default function EcoPassCard({ 
  userCpf, 
  cardNumber, 
  balance, 
  userName,
  onUseCredits 
}: EcoPassCardProps) {
  const [qrCode, setQrCode] = useState<string>("");

  useEffect(() => {
    // Gerar QR Code baseado no CPF e número do cartão
    const generateQR = async () => {
      try {
        const qrData = `${userCpf}-${cardNumber}`;
        const qrCodeUrl = await QRCode.toDataURL(qrData, {
          width: 200,
          margin: 2,
          color: {
            dark: '#2d5a3d', // primary color
            light: '#ffffff'
          }
        });
        setQrCode(qrCodeUrl);
      } catch (error) {
        console.error('Erro ao gerar QR Code:', error);
      }
    };

    generateQR();
  }, [userCpf, cardNumber]);

  return (
    <Card className="p-6 space-y-6 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground max-w-sm mx-auto">
      {/* Header do cartão */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Leaf className="h-6 w-6" />
          <span className="font-bold text-lg">EcoPass</span>
        </div>
        <CreditCard className="h-6 w-6 opacity-70" />
      </div>

      {/* QR Code */}
      <div className="flex justify-center">
        <div className="bg-white p-4 rounded-lg">
          {qrCode ? (
            <img src={qrCode} alt="QR Code do EcoPass" className="w-32 h-32" />
          ) : (
            <QrCode className="w-32 h-32 text-primary" />
          )}
        </div>
      </div>

      {/* Informações do usuário */}
      <div className="space-y-2 text-center">
        <h3 className="font-semibold text-lg" data-testid="text-username">{userName}</h3>
        <p className="text-sm opacity-90" data-testid="text-card-number">
          Cartão: {cardNumber}
        </p>
        <p className="text-xs opacity-75" data-testid="text-cpf">
          CPF: {userCpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.***.**$4")}
        </p>
      </div>

      {/* Saldo */}
      <div className="text-center space-y-2">
        <div className="text-sm opacity-90">Saldo Disponível</div>
        <div className="text-3xl font-bold" data-testid="text-balance">
          {balance} <span className="text-lg">créditos</span>
        </div>
        <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
          R$ {(balance * 2.5).toFixed(2)} em economia
        </Badge>
      </div>

      {/* Botão de usar créditos */}
      <Button 
        variant="secondary" 
        className="w-full bg-white text-primary hover:bg-white/90"
        onClick={onUseCredits}
        disabled={balance === 0}
        data-testid="button-use-credits"
      >
        Usar Créditos
      </Button>
    </Card>
  );
}