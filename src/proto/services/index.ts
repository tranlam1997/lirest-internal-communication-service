import * as UserService from './user/v1/user_service';
import * as HealthService from './health/v1/health_service';

export default {...UserService, ...HealthService};
