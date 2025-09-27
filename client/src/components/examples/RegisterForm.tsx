import RegisterForm from '../RegisterForm';

export default function RegisterFormExample() {
  return (
    <div className="p-4">
      <RegisterForm 
        onRegister={(data) => console.log('Register data:', data)}
        onClose={() => console.log('Close clicked')}
      />
    </div>
  );
}