import { Leaf, Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface HeaderProps {
  isLoggedIn?: boolean;
  onMenuClick?: () => void;
  onLoginClick?: () => void;
}

export default function Header({ isLoggedIn = false, onMenuClick, onLoginClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur border-b">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Leaf className="h-6 w-6 text-primary" />
            <span className="text-foreground">EcoPass</span>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="/#como-funciona" className="text-muted-foreground hover:text-foreground transition-colors">
            Como Funciona
          </a>
          <a href="/beneficios" className="text-muted-foreground hover:text-foreground transition-colors">
            Benefícios
          </a>
          <a href="/pontos" className="text-muted-foreground hover:text-foreground transition-colors">
            Pontos de Coleta
          </a>
          <a href="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
            Demo Dashboard
          </a>
        </nav>

        <div className="flex items-center gap-2">
          {isLoggedIn ? (
            <Button size="icon" variant="ghost" data-testid="button-profile">
              <User className="h-4 w-4" />
            </Button>
          ) : (
            <Button onClick={onLoginClick} data-testid="button-login">
              Entrar
            </Button>
          )}
          
          <Button 
            size="icon" 
            variant="ghost" 
            className="md:hidden"
            onClick={onMenuClick}
            data-testid="button-menu"
          >
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}