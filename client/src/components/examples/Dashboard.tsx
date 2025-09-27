import Dashboard from '../Dashboard';

// Todo: remove mock functionality
const mockUser = {
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
  }
];

export default function DashboardExample() {
  return (
    <Dashboard 
      user={mockUser}
      transactions={mockTransactions}
      onAddRecycling={() => console.log('Add recycling clicked')}
      onUseCredits={() => console.log('Use credits clicked')}
    />
  );
}
