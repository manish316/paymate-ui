# PayPal-Style Money Transfer App

A responsive React-based fake money transfer application that mimics the PayPal interface design.

## Features

✅ **Responsive Design**: Works seamlessly on both mobile and web platforms
✅ **PayPal-Style Interface**: Clean and modern UI matching PayPal's design language
✅ **Interactive Components**: Clickable buttons and navigation tabs
✅ **Real-time Balance Display**: Shows account balance prominently
✅ **Quick Actions**: Send, Request, Pay in store, and Transfer to bank options
✅ **Recent Activity**: Transaction history with different transaction types
✅ **Bottom Navigation**: Mobile-friendly navigation tabs

## Design Elements

### Header
- PayPal logo with branded colors
- User profile avatar (sample image from Unsplash)

### Balance Section  
- Large, prominent balance display (€41,742,352.00)
- Send and Request action buttons with hover effects

### Quick Actions
- Pay in store option with building icon
- Transfer to bank option with bank icon
- Responsive grid layout

### Recent Activity
- Transaction history with color-coded icons
- Different transaction types (received, transfer, purchase)
- Relative timestamps and amounts

### Bottom Navigation
- Home, Activity, Wallet, and Search tabs
- Active state indicators
- Mobile-optimized spacing

## Technology Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Heroicons** - Beautiful SVG icons via Tailwind

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd paymate-ui
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## Responsive Breakpoints

- **Mobile**: < 768px - Full-width mobile layout
- **Desktop**: ≥ 768px - Centered card layout with shadows

## Color Scheme

- **Primary Blue**: `#2563eb` (PayPal blue)
- **Background**: `#f9fafb` (Light gray)
- **Cards**: `#ffffff` (White)
- **Text**: Various gray shades for hierarchy

## File Structure

```
src/
├── App.jsx          # Main application component
├── main.jsx         # React app entry point
└── index.css        # Tailwind CSS imports
```

## Customization

The app is built with Tailwind CSS, making it easy to customize:

1. **Colors**: Modify the color classes in `App.jsx`
2. **Layout**: Adjust spacing and sizing with Tailwind utilities
3. **Icons**: Replace Heroicons with your preferred icon set
4. **Content**: Update balance, transactions, and user data

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This is a demo project created for educational purposes.