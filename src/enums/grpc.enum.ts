import glob from 'glob';

export const ServiceVersions = {
  v1: 'v1',
}
const protoServices = glob.sync(('src/proto/services/*'), { ignore: ['**/index.ts'] });

export const ServiceNames = protoServices.map((service) => {
  const serviceName = service.split('/').pop();
  // eg: services.users.v1.UsersService
  return `services.${serviceName}.${ServiceVersions.v1}.${serviceName[0].toUpperCase() + serviceName.slice(1)}Service`;
})
