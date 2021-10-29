module.exports = componentName => ({
  content: `import React from "react";

  import { Wrapper } from './styles';

export type ${componentName}Props = {
    foo: string;
}

export function ${componentName}({ foo }:${componentName}Props) { 
  return (
    <Wrapper data-testid="${componentName}">{foo}</Wrapper>
  )
}

`,
  extension: `.tsx`
});
