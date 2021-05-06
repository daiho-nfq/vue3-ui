import UIComponents from "./UI";
import FormComponents from "./Form";

const registerGlobalComponents = (app) => {
    const GlobalComponents = {
        ...UIComponents.components,
        ...FormComponents.components,
    };

    Object.keys(GlobalComponents).forEach((componentKey) => {
        if (!componentKey) {
            return;
        }

        const component = GlobalComponents[componentKey];
        const componentName = component.name || componentKey;

        app.component(componentName, component);
    });
};

export default registerGlobalComponents;
