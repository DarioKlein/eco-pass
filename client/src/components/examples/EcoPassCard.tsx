import EcoPassCard from '../EcoPassCard';

export default function EcoPassCardExample() {
  return (
    <div className="space-y-8 p-4">
      <EcoPassCard
        userCpf="12345678901"
        cardNumber="1234 5678 9012"
        balance={25}
        userName="João Silva"
        onUseCredits={() => console.log('Use credits clicked')}
      />
      <div className="text-center text-sm text-muted-foreground">
        Cartão EcoPass com saldo disponível
      </div>
      <EcoPassCard
        userCpf="98765432100"
        cardNumber="9876 5432 1000"
        balance={0}
        userName="Maria Santos"
        onUseCredits={() => console.log('Use credits clicked')}
      />
      <div className="text-center text-sm text-muted-foreground">
        Cartão EcoPass sem saldo
      </div>
    </div>
  );
}