import Header from "@/components/Header";
import Dashboard from "@/components/Dashboard";
import { ThemeToggle } from "@/components/ThemeToggle";

// Mock data for demo purposes
const mockUser = {
  name: "João Silva Santos",
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
        user={mockUser}
        transactions={mockTransactions}
        onAddRecycling={() => console.log('Add recycling')}
        onUseCredits={() => console.log('Use credits')}
      />
    </div>
  );
}