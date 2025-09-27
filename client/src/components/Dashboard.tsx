import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Recycle, Bus, TrendingUp, Leaf, Plus, ArrowUpRight } from "lucide-react";
import EcoPassCard from "./EcoPassCard";

interface Transaction {
  id: string;
  type: 'deposit' | 'withdrawal';
  amount: number;
  description: string;
  date: string;
  location?: string;
}

interface DashboardProps {
  user: {
    name: string;
    cpf: string;
    cardNumber: string;
    balance: number;
  };
  transactions: Transaction[];
  onAddRecycling?: () => void;
  onUseCredits?: () => void;
}

// Todo: remove mock functionality
const mockTransactions: Transaction[] = [
  {
    id: '1',
    type: 'deposit',
    amount: 15,
    description: 'Reciclagem - Garrafas PET (1.5kg)',
    date: '2024-01-15',
    location: 'Ponto UFRJ'
  },
  {
    id: '2',
    type: 'withdrawal',
    amount: -5,
    description: 'Viagem de Ônibus - Linha 485',
    date: '2024-01-14',
    location: 'Terminal Alvorada'
  },
  {
    id: '3',
    type: 'deposit',
    amount: 12,
    description: 'Reciclagem - Latas de Alumínio (0.8kg)',
    date: '2024-01-12',
    location: 'Ponto Shopping'
  }
];

export default function Dashboard({ 
  user, 
  transactions = mockTransactions, 
  onAddRecycling, 
  onUseCredits 
}: DashboardProps) {
  const totalRecycled = transactions
    .filter(t => t.type === 'deposit')
    .reduce((sum, t) => sum + t.amount, 0);
    
  const totalUsed = Math.abs(transactions
    .filter(t => t.type === 'withdrawal')
    .reduce((sum, t) => sum + t.amount, 0));

  return (
    <div className="space-y-6 p-4">
      {/* User Card */}
      <div className="text-center">
        <h1 className="text-2xl font-bold text-foreground mb-6">
          Olá, {user.name.split(' ')[0]}! 👋
        </h1>
        <EcoPassCard
          userCpf={user.cpf}
          cardNumber={user.cardNumber}
          balance={user.balance}
          userName={user.name}
          onUseCredits={onUseCredits}
        />
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4">
        <Button 
          onClick={onAddRecycling} 
          className="h-16 gap-2"
          data-testid="button-add-recycling"
        >
          <Plus className="h-5 w-5" />
          <div className="text-left">
            <div className="font-medium">Adicionar</div>
            <div className="text-xs opacity-90">Reciclagem</div>
          </div>
        </Button>
        
        <Button 
          onClick={onUseCredits} 
          variant="outline"
          className="h-16 gap-2"
          disabled={user.balance === 0}
          data-testid="button-use-credits-dashboard"
        >
          <Bus className="h-5 w-5" />
          <div className="text-left">
            <div className="font-medium">Usar</div>
            <div className="text-xs opacity-70">Créditos</div>
          </div>
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Recycle className="h-4 w-4 text-primary" />
              <div className="text-sm text-muted-foreground">Coletado</div>
            </div>
            <div className="text-2xl font-bold text-foreground" data-testid="text-total-recycled">
              {totalRecycled}
            </div>
            <div className="text-xs text-muted-foreground">créditos ganhos</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Bus className="h-4 w-4 text-primary" />
              <div className="text-sm text-muted-foreground">Viagens</div>
            </div>
            <div className="text-2xl font-bold text-foreground" data-testid="text-total-trips">
              {Math.floor(totalUsed / 5)}
            </div>
            <div className="text-xs text-muted-foreground">realizadas</div>
          </CardContent>
        </Card>
      </div>

      {/* Environmental Impact */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <Leaf className="h-5 w-5 text-primary" />
            Impacto Ambiental
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">CO₂ Economizado</span>
            <span className="font-semibold text-primary">2.5kg</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Material Reciclado</span>
            <span className="font-semibold text-primary">5.2kg</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Economia Total</span>
            <span className="font-semibold text-primary">R$ {(totalUsed * 0.5).toFixed(2)}</span>
          </div>
        </CardContent>
      </Card>

      {/* Recent Transactions */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center justify-between">
            <span>Transações Recentes</span>
            <TrendingUp className="h-5 w-5 text-muted-foreground" />
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {transactions.slice(0, 5).map((transaction) => (
            <div 
              key={transaction.id} 
              className="flex items-center justify-between p-3 rounded-lg bg-muted/30"
              data-testid={`transaction-${transaction.id}`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  transaction.type === 'deposit' 
                    ? 'bg-primary/10 text-primary' 
                    : 'bg-muted-foreground/10 text-muted-foreground'
                }`}>
                  {transaction.type === 'deposit' ? (
                    <Recycle className="h-4 w-4" />
                  ) : (
                    <Bus className="h-4 w-4" />
                  )}
                </div>
                <div>
                  <div className="text-sm font-medium">{transaction.description}</div>
                  <div className="text-xs text-muted-foreground">
                    {new Date(transaction.date).toLocaleDateString('pt-BR')}
                    {transaction.location && ` • ${transaction.location}`}
                  </div>
                </div>
              </div>
              
              <div className="text-right">
                <div className={`font-semibold ${
                  transaction.type === 'deposit' ? 'text-primary' : 'text-muted-foreground'
                }`}>
                  {transaction.type === 'deposit' ? '+' : ''}{transaction.amount}
                </div>
                <div className="text-xs text-muted-foreground">créditos</div>
              </div>
            </div>
          ))}
          
          <Button variant="ghost" className="w-full gap-2 mt-4" data-testid="button-view-all">
            Ver Todas as Transações
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}