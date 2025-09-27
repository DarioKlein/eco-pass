# EcoPass Design Guidelines

## Design Approach
**Reference-Based Approach** - Drawing inspiration from modern fintech apps like Nubank and sustainable mobility platforms like Citymapper, emphasizing trust, environmental consciousness, and ease of use for students and transit users.

## Core Design Principles
- **Sustainable & Trustworthy**: Green-focused palette conveying environmental responsibility
- **Mobile-First**: Optimized for smartphone usage by students and commuters
- **Clear Value Communication**: Immediate understanding of recycling-to-credit system
- **Accessibility**: High contrast for outdoor/transit use scenarios

## Color Palette
**Primary Colors:**
- Primary Green: 142 69% 58% (forest green for trust and sustainability)
- Secondary Green: 120 40% 25% (dark green for text and accents)

**Supporting Colors:**
- Background Light: 0 0% 98% (clean, minimal background)
- Background Dark: 142 15% 15% (dark mode with green undertone)
- Success: 142 76% 36% (transaction confirmations)
- Warning: 45 93% 47% (low balance alerts)

## Typography
- **Primary**: Inter (clean, mobile-optimized)
- **Display**: Poppins (for headers and card numbers)
- Sizes: Focus on larger text (16px+) for mobile readability

## Layout System
**Tailwind Spacing**: Use units of 2, 4, 6, and 8 for consistent spacing
- Cards and components: p-6, m-4
- Section spacing: py-8, my-6
- Button padding: px-6, py-2

## Component Library

### Navigation
- Bottom tab navigation for mobile (Home, Card, History, Profile)
- Clean header with EcoPass logo and notifications

### Core Components
- **Digital Card Display**: Large, prominent QR code with card number
- **Credit Balance**: Bold, easy-to-read current balance with green accent
- **Transaction Cards**: Clean list items showing recycling deposits and transit usage
- **Action Buttons**: Primary green for main actions (Generate QR, Use Credits)

### Forms
- Simple registration with CPF input and validation
- Recycling amount input for collection points
- Transit credit redemption interface

### Data Displays
- Dashboard with weekly/monthly recycling stats
- Credit history with icons differentiating deposits vs. usage
- Environmental impact metrics (CO2 saved, items recycled)

## Key Sections

### Landing Page (3 sections max)
1. **Hero**: Bold headline about earning transit credits through recycling, with app preview
2. **How It Works**: 3-step process (Recycle → Earn → Ride)
3. **CTA**: Student-focused signup with university partnerships highlighted

### App Interface
- **Dashboard**: Balance, recent activity, QR code access
- **Digital Card**: Prominent QR code display with card details
- **History**: Comprehensive transaction log
- **Profile**: User settings and environmental impact stats

## Visual Treatments
- **Gradients**: Subtle green gradients (142 69% 58% to 142 40% 25%) for card backgrounds and CTAs
- **Cards**: Elevated white cards with subtle shadows on light backgrounds
- **Icons**: Heroicons for consistency, focusing on recycling, transit, and credit symbols

## Images
**Hero Image**: Large environmental illustration showing recycling and public transport integration
**Card Mockups**: Clean smartphone screens showing the EcoPass digital card
**Process Icons**: Simple illustrations for recycling bins, QR codes, and buses
**Student Photos**: Diverse university students using public transport (lifestyle context)

## Accessibility
- High contrast ratios for outdoor visibility
- Large touch targets (minimum 44px)
- Clear visual hierarchy with consistent dark mode implementation
- Screen reader friendly QR code alternatives