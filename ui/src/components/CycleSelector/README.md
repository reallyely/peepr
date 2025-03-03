# Cycle Selector

The Cycle Selector component provides an intuitive way to select a one-week date range (cycle) within the year 2025.

## Features

- Select weekly cycles using a stepped slider interface
- Visual feedback showing the current cycle number and date range
- Keyboard accessible with arrow key navigation
- Month indicators to easily identify periods during the year
- Responsive design that works across device sizes

## Usage

```tsx
import CycleSelector from '../components/CycleSelector';

function App() {
  const handleCycleChange = (data) => {
    console.log(`Selected Cycle ${data.cycleNumber}:`, data.startDate, data.endDate);
  };

  return (
    <div>
      <h2>Select a Cycle</h2>
      <CycleSelector 
        onChange={handleCycleChange} 
        ariaLabel="Select a week-long cycle in 2025" 
      />
    </div>
  );
}
```

## Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `onChange` | `(cycleData: { cycleNumber: number; startDate: Date; endDate: Date }) => void` | `undefined` | Callback function triggered when a cycle is selected |
| `ariaLabel` | `string` | `"Select cycle"` | Accessibility label for the range input |

## Accessibility

The component is designed with accessibility in mind:
- Proper ARIA attributes for screen readers
- Keyboard navigation support
- Focus states for keyboard users
- Clear visual indicators and text descriptions