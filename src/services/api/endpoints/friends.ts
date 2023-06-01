import { ServiceDefinition } from '../requests';
export const definitions: ServiceDefinition[] = [
    {
        id: 'get-all-user-friends',
        method: 'GET',
        endpoint: '/user/friends/:userId',
        description: 'Get all friends',
        buildRequest: (data:any) => ({
            serviceId: 'get-all-user-friends',
            urlParams: { ...data },

        }),
    },{
        id: 'get-all-connecteduser-friends',
        method: 'GET',
        endpoint: '/user/friends',
        description: 'Get all friends',
        buildRequest: (data:any,headers) => ({
            serviceId: 'get-all-connecteduser-friends',
            urlParams: { ...data },
            headers

        }),
    },
    {
        id: 'delete-friend',
        method: 'DELETE',
        endpoint: '/user/friend/removefriend/:userId/:friendId',
        description: 'Delete a friend',
        buildRequest: (data: any,headers) => ({
            serviceId: 'delete-user',
            urlParams: { ...data },
            headers

        }),
    },
    {
        id: 'is-a-friend',
        method: 'GET',
        endpoint: '/user/friend/isafriend/:userid/:friendid',
        description: 'Verify if a user is a friend.',
        buildRequest:(data:any,headers) => ({
            serviceId: 'is-a-friend',
            urlParams: { ...data },
            headers
        })
    }
];
export default definitions;