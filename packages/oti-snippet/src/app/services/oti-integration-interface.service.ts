import { OtiIntegrationInterfaceConfig } from '../oti.model';

export interface OtiIntegrationInterfaceService {
  configure(config: OtiIntegrationInterfaceConfig): void;
  init(): void;
  enabled(): boolean;
}
