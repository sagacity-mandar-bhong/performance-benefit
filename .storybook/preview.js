import { setCompodocJson } from "@storybook/addon-docs/angular";
import { addDecorator } from '@storybook/angular';
import { initializeWorker, mswDecorator } from 'msw-storybook-addon';
import docJson from "../documentation.json";
setCompodocJson(docJson);
initializeWorker();
addDecorator(mswDecorator);

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    docs: { inlineStories: true },
}