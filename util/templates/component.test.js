module.exports = componentName => ({
  content: `import React from "react";
import { render } from "@testing-library/react";

import { ${componentName}, ${componentName}Props } from "./${componentName}";

describe("Test Component", () => {
  let props: ${componentName}Props;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<${componentName} {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "Heather was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("${componentName}");

    expect(component).toHaveTextContent("Heather was here");
  });
});
`,
  extension: `.test.tsx`
});
