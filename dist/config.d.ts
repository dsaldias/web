export interface AuthConfig {
    graphqlAuth: string;
    graphqlApp: string;
    wss: string;
    wssApp: string;
    decodePassKey: string;
}
export declare function setConfig(config: AuthConfig): void;
export declare function getConfig(): AuthConfig;
