import { useState } from "react";
import Header from "@/components/Header";
import Dashboard from "@/components/Dashboard";
import AddRecyclingModal from "@/components/AddRecyclingModal";
import UseCreditsModal from "@/components/UseCreditsModal";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

// Mock data for demo purposes
const initialUser = {
  name: "Leonara de Oliveira Lima",
  cpf: "12345678901",
  cardNumber: "1234 5678 9012",
  balance: 25
};

const mockTransactions = [
  {
    id: '1',
    type: 'deposit' as const,
    amount: 15,
    description: 'Reciclagem - Garrafas PET (1.5kg)',
    date: '2024-01-15',
    location: 'Ponto UFRJ'
  },
  {
    id: '2',
    type: 'withdrawal' as const,
    amount: -5,
    description: 'Viagem de Ônibus - Linha 485',
    date: '2024-01-14',
    location: 'Terminal Alvorada'
  },
  {
    id: '3',
    type: 'deposit' as const,
    amount: 12,
    description: 'Reciclagem - Latas de Alumínio (0.8kg)',
    date: '2024-01-12',
    location: 'Ponto Shopping'
  },
  {
    id: '4',
    type: 'withdrawal' as const,
    amount: -5,
    description: 'Viagem de Ônibus - Linha 315',
    date: '2024-01-10',
    location: 'Terminal Central'
  },
  {
    id: '5',
    type: 'deposit' as const,
    amount: 8,
    description: 'Reciclagem - Papel (2kg)',
    date: '2024-01-08',
    location: 'Ponto Biblioteca'
  }
];

export default function DashboardDemo() {
  const [user, setUser] = useState(initialUser);
  const [transactions, setTransactions] = useState(mockTransactions);
  const [showAddRecycling, setShowAddRecycling] = useState(false);
  const [showUseCredits, setShowUseCredits] = useState(false);
  const { toast } = useToast();

  const handleAddRecycling = (materials: any[], totalCredits: number) => {
    // Update user balance
    setUser(prev => ({ ...prev, balance: prev.balance + totalCredits }));
    
    // Add new transaction
    const newTransaction = {
      id: `recycling-${Date.now()}`,
      type: 'deposit' as const,
      amount: totalCredits,
      description: `Reciclagem - ${materials.map(m => `${m.type} (${m.weight}kg)`).join(', ')}`,
      date: new Date().toISOString().split('T')[0],
      location: 'Ponto Demo'
    };
    
    setTransactions(prev => [newTransaction, ...prev]);
    setShowAddRecycling(false);
    
    toast({
      title: "Reciclagem adicionada!",
      description: `+${totalCredits} créditos foram adicionados ao seu saldo.`,
    });
  };

  const handleUseCredits = (amount: number, type: string, details: any) => {
    // Update user balance
    setUser(prev => ({ ...prev, balance: prev.balance - amount }));
    
    // Add new transaction
    const newTransaction = {
      id: `transport-${Date.now()}`,
      type: 'withdrawal' as const,
      amount: -amount,
      description: `${type} - ${details.line} (${details.quantity}x)`,
      date: new Date().toISOString().split('T')[0],
      location: details.destination
    };
    
    setTransactions(prev => [newTransaction, ...prev]);
    setShowUseCredits(false);
    
    toast({
      title: "Créditos utilizados!",
      description: `${amount} créditos foram usados para ${details.quantity} passagem(s) de ${type}.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        isLoggedIn={true}
        onMenuClick={() => console.log('Menu clicked')}
      />
      
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <Dashboard 
        user={user}
        transactions={transactions}
        onAddRecycling={() => setShowAddRecycling(true)}
        onUseCredits={() => setShowUseCredits(true)}
      />

      {/* Add Recycling Modal */}
      <Dialog open={showAddRecycling} onOpenChange={setShowAddRecycling}>
        <DialogContent className="max-w-2xl">
          <AddRecyclingModal 
            onAddRecycling={handleAddRecycling}
            onClose={() => setShowAddRecycling(false)}
          />
        </DialogContent>
      </Dialog>

      {/* Use Credits Modal */}
      <Dialog open={showUseCredits} onOpenChange={setShowUseCredits}>
        <DialogContent className="max-w-2xl">
          <UseCreditsModal 
            currentBalance={user.balance}
            onUseCredits={handleUseCredits}
            onClose={() => setShowUseCredits(false)}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
