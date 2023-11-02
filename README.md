# React Radio Slider

`ReactRadioSlider` is a flexible, easy-to-integrate, and customizable React component that allows users to select a single option from a set of options in a slider-like UI. Unlike traditional select components, `ReactRadioSlider` provides a more interactive component with a smooth user experience.

## Features

- Adjustable width for options.
- Customizable opacity for deselected items.
- Optional min and max range for the slider input.
- Responsive design that works with different sizes and device types.

## Installation

Using npm:

```bash
npm install react-radio-slider
```

Using yarn:

```bash
yarn add react-radio-slider
```

## Props

Below are the properties that you can pass to `<ReactRadioSlider>`:

| Prop               | Type           | Required | Description                                                                                     |
|--------------------|----------------|----------|-------------------------------------------------------------------------------------------------|
| value              | number         | Yes      | The current value of the slider.                                                                |
| onChange           | function       | Yes      | Callback function that is fired when the value changes.                                         |
| radioOptions       | ReactNode[]    | Yes      | An array of React nodes that are the options the user can select from.                          |
| optionWidth        | number         | Yes      | The width of each option.                                                                       |
| deselectedOpacity  | number         | No       | Opacity of the non-selected items (0-100). Default is 50.                                       |
| optionHeight       | number         | No       | The height of each option. If not specified, the height will be adjusted automatically.         |
| max                | number         | No       | The maximum value of the slider. The default is 100.                                            |
| min                | number         | No       | The minimum value of the slider. The default is 0.                                              |
| gap                | number         | No       | The gap between the radio options and range input                                               |

## Basic Usage

Here is a basic example of using the `ReactRadioSlider` component:

```javascript
import React, { useState } from "react";
import ReactRadioSlider from "react-radio-slider";

const App = () => {
  const [value, setValue] = useState(0);
  const radioOptions = [
    // Your options here. They can be any valid React nodes.
  ];

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <ReactRadioSlider
      value={value}
      onChange={handleChange}
      radioOptions={radioOptions}
      optionWidth={50} // Example width value
    />
  );
};

export default App;
```

## Custom Styling

You can provide custom styles for the options by passing in React nodes with your styling applied as `radioOptions`. Here's an example of how you might achieve custom-styled options:

```javascript
const radioOptions = [
  <div style={{ backgroundColor: "red" }}>Option 1</div>,
  <div style={{ backgroundColor: "blue" }}>Option 2</div>,
  // ... more options
];
```

Pass this `radioOptions` array to the `ReactRadioSlider` component as a prop.

## Contributing

We encourage you to contribute to react-radio-slider! Please check out the [Contributing guide](CONTRIBUTING.md) for guidelines about how to proceed.

## License

This project is licensed under the GNU License - see the [LICENSE](LICENSE) file for details.

---

> Note: Make sure to replace `react-radio-slider` with your actual package name. Also, provide actual paths if your contributing and license guides are located in places other than the root or if they have different filenames.