import Header from '../Header';

export default function HeaderExample() {
  return (
    <div className="space-y-4">
      <Header 
        isLoggedIn={false}
        onLoginClick={() => console.log('Login clicked')}
        onMenuClick={() => console.log('Menu clicked')}
      />
      <div className="p-4 text-sm text-muted-foreground">
        Above: Header for logged out user
      </div>
      <Header 
        isLoggedIn={true}
        onMenuClick={() => console.log('Menu clicked')}
      />
      <div className="p-4 text-sm text-muted-foreground">
        Above: Header for logged in user
      </div>
    </div>
  );
}