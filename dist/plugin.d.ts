import { App } from 'vue';
import { AuthConfig } from './config';
export { type AuthConfig } from './config';
export declare const AuthPlugin: {
    install(app: App, config: AuthConfig): void;
};
