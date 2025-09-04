# 🚗 Car Rental Quote Calculator

A modern, responsive Angular application for calculating car rental quotes with comprehensive pricing options and professional form handling.

## 🌟 Features

### Core Functionality
- **Smart Quote Calculation** - Dynamic pricing based on car category, rental duration, and location
- **Comprehensive Car Database** - 30+ manufacturers, 25+ models across 11 categories
- **Location-Based Pricing** - Major airports and city locations with location-specific fees
- **Flexible Rental Options** - One-way rentals, unlimited mileage, insurance packages

### User Experience
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Real-Time Updates** - Live quote calculations as you modify selections
- **Professional Phone Formatting** - Automatic formatting for phone number display
- **Form Validation** - Built-in HTML5 validation with user-friendly error messages

### Technical Features
- **TypeScript Interface Design** - Strongly typed data models for reliability
- **Angular Signals** - Modern reactive state management
- **Two-Way Data Binding** - Seamless connection between form inputs and component state
- **Professional Code Architecture** - Clean, maintainable, and scalable codebase

## 🚀 Live Demo

🔗 **[View Live Application](https://your-demo-link.netlify.app)**

![Car Rental App Screenshot](./docs/screenshot.png)

## 🛠️ Technologies Used

- **Frontend Framework:** Angular 17+
- **Language:** TypeScript
- **Styling:** SCSS/CSS3
- **Forms:** Angular Reactive Forms
- **State Management:** Angular Signals
- **Build Tool:** Angular CLI
- **Version Control:** Git

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18+ recommended)
- **npm** (comes with Node.js)
- **Angular CLI** (`npm install -g @angular/cli`)
- **Git** (for cloning the repository)

## 🏃‍♂️ Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/ShepherdDeimos/car-rental-quote-app.git
cd car-rental-quote-app
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
ng serve
```

### 4. Open in Browser
Navigate to `http://localhost:4200/` - the app will automatically reload when you make changes.

## 🏗️ Project Structure

```
car-rental-quote-app/
├── src/
│   ├── app/
│   │   ├── models/
│   │   │   └── rental-quote.ts      # TypeScript interfaces
│   │   ├── app.component.ts         # Main component logic
│   │   ├── app.html                 # Application template
│   │   └── app.scss                 # Component styles
│   ├── index.html                   # Main HTML file
│   └── main.ts                      # Application bootstrap
├── package.json                     # Dependencies and scripts
├── tsconfig.json                    # TypeScript configuration
├── angular.json                     # Angular CLI configuration
└── README.md                        # Project documentation
```

## 💡 How It Works

### Data Flow Architecture
1. **User Input** → Form fields with two-way data binding
2. **Signal Updates** → Reactive state management with Angular signals
3. **Business Logic** → Quote calculation and data formatting methods
4. **Display Updates** → Real-time UI updates based on state changes

### Key Components

#### RentalQuote Interface
Comprehensive TypeScript interface defining the structure for:
- Customer information (name, age, phone)
- Rental dates and times
- Car details (category, make, model, transmission)
- Pickup/dropoff locations
- Pricing breakdown (base price, taxes, fees, total)
- Additional services (GPS, child seat, insurance, etc.)

#### Signal-Based State Management
```typescript
// Example of reactive state management
customerName = signal('');
customerAge = signal(25);
phoneNumber = signal('');

formatPhoneNumber(phone: string): string {
  // Professional phone number formatting logic
}
```

## 🎯 Rental Categories & Pricing

### Vehicle Categories
- **Economy** - Compact, fuel-efficient vehicles
- **Compact** - Small cars perfect for city driving
- **Intermediate** - Mid-size comfort and efficiency
- **Standard** - Full-size sedans with extra space
- **Full Size** - Spacious vehicles for longer trips
- **Premium** - Luxury sedans with premium features
- **Luxury** - High-end vehicles with ultimate comfort
- **Convertible** - Open-top driving experience
- **SUV** - Sport utility vehicles for any terrain
- **Minivan** - Family-friendly with maximum seating
- **Truck** - Pickup trucks for work and adventure

### Supported Locations
Major airports and city centers including:
- Pittsburgh International Airport (PIT)
- Philadelphia International Airport (PHL)
- Downtown Pittsburgh, PA
- Philadelphia City Center, PA
- And many more...

## 🧪 Available Scripts

```bash
# Start development server
ng serve

# Build for production
ng build

# Run unit tests
ng test

# Run end-to-end tests
ng e2e

# Check code formatting
ng lint
```

## 🚀 Deployment

### Build for Production
```bash
ng build --configuration production
```

The build artifacts will be stored in the `dist/` directory, ready for deployment to any static hosting service.

### Deployment Options
- **Netlify** - Drag and drop the `dist` folder
- **Vercel** - Connect your GitHub repository for automatic deployments
- **GitHub Pages** - Use `ng deploy --github-pages`
- **Firebase Hosting** - `ng deploy --firebase`

## 🔧 Development Workflow

### Multi-Computer Development
This project supports cross-platform development using Git workflow:

```bash
# Before starting work (pull latest changes)
git pull origin main

# After making changes (save and push)
git add .
git commit -m "Add feature: customer age validation"
git push origin main
```

### VS Code Integration
- **Source Control panel** for visual Git operations
- **Staging area** for selective commits
- **Sync Changes** button for push/pull operations
- **Live Server** extension recommended for development

## 📚 Learning Resources

This project demonstrates professional Angular development patterns:

- **TypeScript Interface Design** - Strong typing for data models
- **Angular Signals** - Modern reactive state management
- **Component Architecture** - Clean separation of concerns
- **Form Handling** - Professional form design and validation
- **Git Workflow** - Version control best practices

## 🤝 Contributing

1. **Fork the Repository**
2. **Create a Feature Branch** (`git checkout -b feature/amazing-feature`)
3. **Commit Your Changes** (`git commit -m 'Add amazing feature'`)
4. **Push to Branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**ShepherdDeimos**
- GitHub: [@ShepherdDeimos](https://github.com/ShepherdDeimos)
- LinkedIn: [Your LinkedIn Profile](https://linkedin.com/in/yourprofile)

## 🙏 Acknowledgments

- Built with [Angular](https://angular.io/)
- Styled with modern CSS3 and SCSS
- Developed using TypeScript for type safety
- Follows Angular best practices and conventions

---

⭐ **Star this repository if you found it helpful!**

🐛 **Found a bug?** [Open an issue](https://github.com/ShepherdDeimos/car-rental-quote-app/issues)

💡 **Have a feature request?** [Start a discussion](https://github.com/ShepherdDeimos/car-rental-quote-app/discussions)

---

*This project showcases modern Angular development with TypeScript, demonstrating professional-grade form handling, state management, and user experience design.*
