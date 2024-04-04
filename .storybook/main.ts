import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-onboarding',
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@chromatic-com/storybook',
        '@storybook/addon-interactions',
        '@storybook/addon-themes',
        '@storybook/addon-styling'
    ],
    framework: {
        name: '@storybook/react-vite',
        options: {legacyRootApi: true,},
    },
    docs: {
        autodocs: 'tag',
    },
    typescript: {
        reactDocgen: 'react-docgen-typescript',
        reactDocgenTypescriptOptions: {
          // Speeds up Storybook build time
          compilerOptions: {
            allowSyntheticDefaultImports: false,
            esModuleInterop: false,
          },
          // Makes union prop types like variant and size appear as select controls
          shouldExtractLiteralValuesFromEnum: true,
          // Makes string and boolean types that can be undefined appear as inputs and switches
          shouldRemoveUndefinedFromOptional: true,
          // Filter out third-party props from node_modules except @mui packages
          propFilter: (prop) =>
            prop.parent ? !/node_modules\/(?!@mui)/.test(prop.parent.fileName) : true,
        },
      },
      async viteFinal(config) {
        // Merge custom configuration into the default config
        const { mergeConfig } = await import('vite');
    
        return mergeConfig(config, {
          // Add dependencies to pre-optimization
          optimizeDeps: {
            include: ['storybook-dark-mode'],
          },
        });
      },
};
export default config;

